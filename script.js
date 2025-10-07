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