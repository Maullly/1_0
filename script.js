//1_1
var ex1_button = document.getElementById('ex1_button');
var ex1_content = document.getElementById('ex1_content');

function show_numbers() {
  const numbers = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(i);
  }
  ex1_content.innerHTML = numbers;
};

ex1_button.addEventListener('click', show_numbers);

//1_2
var ex2_text = document.getElementById('ex2_text');
var ex2_content = document.getElementById('ex2_content');

ex2_text.addEventListener('input', function() {
  const value = ex2_text.value;
  if (value.length !== 9) {
    ex2_content.innerHTML = 'Długość numeru musi być równa 9';
    ex2_content.style.color = 'red';
    return;
  }
  if (/[a-zA-Z]/.test(value)) {
    ex2_content.innerHTML = 'Numer nie może zawierać liter';
    ex2_content.style.color = 'red';
    return;
  }
  if (/[^0-9]/.test(value)) {
    ex2_content.innerHTML = 'Numer nie może zawierać znaków specjalnych';
    ex2_content.style.color = 'red';
    return;
  }
  ex2_content.innerHTML = 'Numer telefonu jest poprawny';
  ex2_content.style.color = 'green';
});
