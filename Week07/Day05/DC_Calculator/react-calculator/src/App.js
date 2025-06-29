import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Please enter valid numbers');
      return;
    }

    let res = 0;
    switch (operation) {
      case 'add':
        res = n1 + n2;
        break;
      case 'subtract':
        res = n1 - n2;
        break;
      case 'multiply':
        res = n1 * n2;
        break;
      case 'divide':
        res = n2 !== 0 ? n1 / n2 : 'Cannot divide by zero';
        break;
      default:
        res = 'Unknown operation';
    }

    setResult(res);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>React Calculator</h2>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First Number"
        style={{ marginBottom: '10px', display: 'block', width: '100%' }}
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second Number"
        style={{ marginBottom: '10px', display: 'block', width: '100%' }}
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        style={{ marginBottom: '10px', display: 'block', width: '100%' }}
      >
        <option value="add">➕ Add</option>
        <option value="subtract">➖ Subtract</option>
        <option value="multiply">✖️ Multiply</option>
        <option value="divide">➗ Divide</option>
      </select>

      <button onClick={handleCalculate} style={{ width: '100%', padding: '10px' }}>
        Calculate
      </button>

      {result !== null && (
        <h3 style={{ marginTop: '20px' }}>
          Result: <span style={{ color: 'green' }}>{result}</span>
        </h3>
      )}
    </div>
  );
}

export default App;
