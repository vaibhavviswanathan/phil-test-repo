async function callApi(endpoint, body) {
  const res = await fetch(`/api/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return res.json();
}

function showResult(id, data) {
  const el = document.getElementById(`result-${id}`);
  if (data.error) {
    el.textContent = `Error: ${data.error}`;
    el.className = 'result error';
  } else {
    el.textContent = `= ${data.result}`;
    el.className = 'result success';
  }
}

document.getElementById('form-add').addEventListener('submit', async (e) => {
  e.preventDefault();
  const { a, b } = Object.fromEntries(new FormData(e.target));
  showResult('add', await callApi('add', { a, b }));
});

document.getElementById('form-subtract').addEventListener('submit', async (e) => {
  e.preventDefault();
  const { a, b } = Object.fromEntries(new FormData(e.target));
  showResult('subtract', await callApi('subtract', { a, b }));
});

document.getElementById('form-multiply').addEventListener('submit', async (e) => {
  e.preventDefault();
  const { a, b } = Object.fromEntries(new FormData(e.target));
  showResult('multiply', await callApi('multiply', { a, b }));
});

document.getElementById('form-sqrt').addEventListener('submit', async (e) => {
  e.preventDefault();
  const { x } = Object.fromEntries(new FormData(e.target));
  showResult('sqrt', await callApi('sqrt', { x }));
});

document.getElementById('form-factorial').addEventListener('submit', async (e) => {
  e.preventDefault();
  const { n } = Object.fromEntries(new FormData(e.target));
  showResult('factorial', await callApi('factorial', { n }));
});
