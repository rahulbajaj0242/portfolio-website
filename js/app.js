function makeRateField() {
  const rateDiv = document.querySelector('#hourly-rate');
  rateDiv.innerHTML = '';
  let labelElement = document.createElement('label');
  labelElement.setAttribute('for', 'rate-field');
  labelElement.innerText = 'Hourly Rate';

  let inputElement = document.createElement('input');
  inputElement.setAttribute('id', 'rate-field');
  inputElement.setAttribute('type', 'number');
  inputElement.setAttribute('name', 'rate');
  inputElement.setAttribute('class', 'form-control');
  inputElement.setAttribute('step', 'any');
  inputElement.setAttribute('min', '0.00');

  rateDiv.appendChild(labelElement);
  rateDiv.appendChild(inputElement);
}

function removeRateField() {
  const rateDiv = document.querySelector('#hourly-rate');
  rateDiv.innerHTML = '';
}

window.onload = function () {
  window.scrollTo(0, 0);

  let form = document.querySelector('#contact-form');

  form.onsubmit = function (event) {
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      event.preventDefault();
      return false;
    }
    return true;
  };
};
