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
    // First, check if the form is valid (e.g., not missing required fields).
    // If it is missing anything, stop the submission now.
    if (!form.checkValidity()) {
      // Update the CSS to indicate any invalid fields
      debugger;
      form.classList.add('was-validated');
      // Stop the form from being submitted until things are filled out
      event.preventDefault();
      return false;
    }
    // Everything looks good, allow this form to be submitted
    return true;
  };
};
