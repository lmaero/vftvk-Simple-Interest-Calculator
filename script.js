function compute() {
  // Get the principal input, capital to invest
  const principal = document.getElementById('principal').value;

  // Validates if the capital to invest is above zero
  if (Number(principal) <= 0) {
    window.alert('Enter a positive number');

    // Get focus on the capital input after entering a invalid number
    document.getElementById('principal').focus();
  } else {
    // Get main inputs
    const rate = document.getElementById('rate').value;
    const years = document.getElementById('years').value;

    // Calculate interest and future year from now
    const interest = (principal * years * rate) / 100;
    const year = new Date().getFullYear() + parseInt(years);

    //   Create result innerHTML to show highlighted elements
    document.getElementById('result').innerHTML =
      'If you deposit <span class="highlighted">' +
      principal +
      '</span>,<br />at an interest rate of <span class="highlighted">' +
      rate +
      '%</span><br />You will receive an amount of <span class="highlighted">' +
      interest +
      '</span>,<br />in the year <span class="highlighted">' +
      year +
      '</span><br />';
  }
}

function updateRate() {
  const rateVal = document.getElementById('rate').value;
  document.getElementById('rate_val').innerText = rateVal.toString() + ' %';
}
