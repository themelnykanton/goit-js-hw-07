const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener('input', event => {
  const inputValue = event.currentTarget.value;

  if (inputValue.length === 0 || !inputValue.trim()) {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }
});
