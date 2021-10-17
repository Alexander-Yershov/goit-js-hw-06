const inputRef = document.querySelector("#name-input");
const spanNameOutputRef = document.querySelector('#name-output');
inputRef.addEventListener("input" ,(e) => {
    e.currentTarget.value.length !== 0 ? spanNameOutputRef.textContent = e.currentTarget.value :
    spanNameOutputRef.textContent = 'Anonymous';
  });