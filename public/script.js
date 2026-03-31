// ===== Notion-like Sidebar Toggle =====

const sidebar = document.getElementById('sidebar');
const collapseBtn = document.getElementById('collapseBtn');
const sidebarOpenBtn = document.getElementById('sidebarOpenBtn');
const appContainer = document.querySelector('.app-container');

function collapseSidebar() {
  sidebar.classList.add('collapsed');
  appContainer.classList.add('sidebar-collapsed');
  sidebarOpenBtn.style.opacity = '1';
  sidebarOpenBtn.style.pointerEvents = 'auto';
}

function expandSidebar() {
  sidebar.classList.remove('collapsed');
  appContainer.classList.remove('sidebar-collapsed');
  sidebarOpenBtn.style.opacity = '0';
  sidebarOpenBtn.style.pointerEvents = 'none';
}

collapseBtn.addEventListener('click', collapseSidebar);
sidebarOpenBtn.addEventListener('click', expandSidebar);

// Sidebar nav item clicks (visual active state)
document.querySelectorAll('.sidebar-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

// New page button
document.getElementById('newPageBtn').addEventListener('click', () => {
  const title = document.querySelector('.page-title');
  title.textContent = '';
  title.focus();
});

// ===== Theme Toggle =====

const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
}

// Initialize from system preference
applyTheme(prefersDark.matches);

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  applyTheme(!isDark);
});

// ===== Calculator Logic =====

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}
function sqrtFn(x) {
  if (x < 0) throw new Error('Cannot take sqrt of negative number');
  return Math.sqrt(x);
}
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) throw new Error('Factorial requires a non-negative integer');
  if (n > 170) throw new Error('Input too large');
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

let current = '';
let pendingOp = null;
let pendingVal = null;
let justEvaled = false;

const resultEl = document.getElementById('result');
const expressionEl = document.getElementById('expression');

function updateDisplay(val) {
  resultEl.textContent = val;
  resultEl.classList.add('updated');
  setTimeout(() => resultEl.classList.remove('updated'), 150);
}

function updateExpression(val) {
  expressionEl.textContent = val;
}

function appendNum(n) {
  if (justEvaled) { current = ''; justEvaled = false; }
  current += n;
  updateDisplay(current);
}

function appendDot() {
  if (justEvaled) { current = '0'; justEvaled = false; }
  if (!current.includes('.')) current += (current === '' ? '0' : '') + '.';
  updateDisplay(current);
}

function appendOp(op) {
  if (op === 'sqrt') {
    const val = parseFloat(current || 0);
    try {
      const res = sqrtFn(val);
      updateExpression(`√(${val})`);
      current = String(res);
      updateDisplay(current);
      justEvaled = true;
    } catch(e) { updateDisplay('Error'); current = ''; }
    return;
  }
  if (op === '!') {
    const val = parseFloat(current || 0);
    try {
      const res = factorial(val);
      addToHistory(`${val}!`, res);
      updateExpression(`${val}!`);
      current = String(res);
      updateDisplay(current);
      justEvaled = true;
    } catch(e) { updateDisplay('Error'); current = ''; }
    return;
  }
  if (current !== '') {
    if (pendingOp !== null) {
      const a = pendingVal, b = parseFloat(current);
      try {
        let res;
        if (pendingOp === '+') res = add(a, b);
        else if (pendingOp === '-') res = subtract(a, b);
        else if (pendingOp === '*') res = multiply(a, b);
        else if (pendingOp === '/') res = divide(a, b);
        pendingVal = res;
        current = '';
        updateDisplay(res);
      } catch(e) { updateDisplay('Error'); clearAll(); return; }
    } else {
      pendingVal = parseFloat(current);
      current = '';
    }
  }
  pendingOp = op;
  updateExpression(`${pendingVal} ${op === '*' ? '×' : op === '/' ? '÷' : op}`);
  justEvaled = false;
}

function calculate() {
  if (pendingOp === null || current === '') return;
  const a = pendingVal, b = parseFloat(current);
  try {
    let res;
    if (pendingOp === '+') res = add(a, b);
    else if (pendingOp === '-') res = subtract(a, b);
    else if (pendingOp === '*') res = multiply(a, b);
    else if (pendingOp === '/') res = divide(a, b);
    const exprStr = `${a} ${pendingOp === '*' ? '×' : pendingOp === '/' ? '÷' : pendingOp} ${b}`;
    addToHistory(exprStr, res);
    updateExpression(`${exprStr} =`);
    current = String(res);
    updateDisplay(current);
    pendingOp = null;
    pendingVal = null;
    justEvaled = true;
  } catch(e) { updateDisplay('Error'); clearAll(); }
}

function clearAll() {
  current = '';
  pendingOp = null;
  pendingVal = null;
  justEvaled = false;
  updateDisplay('0');
  updateExpression('');
}

function toggleSign() {
  if (current !== '' && current !== '0') {
    current = current.startsWith('-') ? current.slice(1) : '-' + current;
    updateDisplay(current);
  }
}

// ===== History =====

const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
let history = [];

function addToHistory(expr, result) {
  history.unshift({ expr, result });
  if (history.length > 20) history.pop();
  renderHistory();
}

function renderHistory() {
  if (history.length === 0) {
    historyList.innerHTML = '<div class="history-empty">No calculations yet</div>';
    return;
  }
  historyList.innerHTML = history.map((entry, i) => `
    <div class="history-entry" data-index="${i}">
      <div class="history-expr">${entry.expr}</div>
      <div class="history-result">${entry.result}</div>
    </div>
  `).join('');

  historyList.querySelectorAll('.history-entry').forEach(el => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.index);
      current = String(history[idx].result);
      updateDisplay(current);
      justEvaled = true;
    });
  });
}

clearHistoryBtn.addEventListener('click', () => {
  history = [];
  renderHistory();
});

// ===== Keyboard Support =====

document.addEventListener('keydown', e => {
  // Don't intercept when editing page title
  if (document.activeElement.classList.contains('page-title')) return;

  if (e.key >= '0' && e.key <= '9') appendNum(e.key);
  else if (e.key === '.') appendDot();
  else if (e.key === '+') appendOp('+');
  else if (e.key === '-') appendOp('-');
  else if (e.key === '*') appendOp('*');
  else if (e.key === '/') { e.preventDefault(); appendOp('/'); }
  else if (e.key === 'Enter' || e.key === '=') calculate();
  else if (e.key === 'Backspace') {
    if (current.length > 0) {
      current = current.slice(0, -1);
      updateDisplay(current || '0');
    }
  }
  else if (e.key === 'Escape') clearAll();
});
