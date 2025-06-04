const apiKey = '68c3b4be753392dee8c80280'; 

const fromSelect = document.getElementById('fromCurrency');
const toSelect = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const resultEl = document.getElementById('result');
const convertBtn = document.getElementById('convertBtn');
const switchBtn = document.getElementById('switchBtn');

async function loadCurrencies() {
  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`);
    const data = await response.json();

    data.supported_codes.forEach(([code, name]) => {
      const option1 = new Option(`${code} - ${name}`, code);
      const option2 = new Option(`${code} - ${name}`, code);
      fromSelect.appendChild(option1);
      toSelect.appendChild(option2);
    });

    fromSelect.value = 'USD';
    toSelect.value = 'MAD';
  } catch (err) {
    resultEl.textContent = '⚠️ Failed to load currencies.';
  }
}

async function convertCurrency() {
  const from = fromSelect.value;
  const to = toSelect.value;
  const amount = amountInput.value;

  if (!amount || amount <= 0) {
    resultEl.textContent = 'Enter a valid amount';
    return;
  }

  try {
    const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`);
    const data = await res.json();

    resultEl.textContent = `${amount} ${from} = ${data.conversion_result} ${to}`;
  } catch (error) {
    resultEl.textContent = '⚠️ Error fetching conversion';
  }
}

function switchCurrencies() {
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;

  convertCurrency();
}

convertBtn.addEventListener('click', convertCurrency);
switchBtn.addEventListener('click', switchCurrencies);

loadCurrencies();
