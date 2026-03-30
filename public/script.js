document.querySelectorAll('form[data-op]').forEach(form => {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const op = form.dataset.op;
    const resultEl = form.querySelector('.result');
    const body = {};

    new FormData(form).forEach((val, key) => {
      body[key] = val;
    });

    try {
      const res = await fetch(`/api/${op}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      resultEl.classList.remove('hidden', 'success', 'error');

      if (res.ok) {
        resultEl.classList.add('success');
        resultEl.textContent = `Result: ${data.result}`;
      } else {
        resultEl.classList.add('error');
        resultEl.textContent = `Error: ${data.error}`;
      }
    } catch {
      resultEl.classList.remove('hidden', 'success');
      resultEl.classList.add('error');
      resultEl.textContent = 'Network error — is the server running?';
    }
  });
});
