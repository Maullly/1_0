// Ex1 - OnClick
var ex1_button = document.getElementById('ex1_button');  
var ex1_content = document.getElementById('ex1_content');  

function show_numbers() {
  const numbers = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(i);
  }
  ex1_content.innerHTML = numbers.join(', ');
}

ex1_button.addEventListener('click', show_numbers);

// Ex2 - Validation
var ex2_text = document.getElementById('ex2_text');
var ex2_content = document.getElementById('ex2_content');

ex2_text.addEventListener('input', function() {
  const phoneRegex = /^\d{3}-?\d{3}-?\d{4}$/;
  if (phoneRegex.test(ex2_text.value)) {
    ex2_content.innerHTML = '✓ Valid phone number';
    ex2_content.style.color = 'green';
  } else if (ex2_text.value === '') {
    ex2_content.innerHTML = '';
  } else {
    ex2_content.innerHTML = '✗ Invalid format (use: 123-456-7890)';
    ex2_content.style.color = 'red';
  }
});

// Ex3 - Drag & Drop
var ex3_element = document.getElementById('ex3_element');
var ex3_one = document.getElementById('ex3_one');
var ex3_two = document.getElementById('ex3_two');

ex3_element.draggable = true;

ex3_element.addEventListener('dragstart', function(e) {
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
});

ex3_one.addEventListener('dragover', function(e) {
  e.preventDefault();
  return false;
});

ex3_two.addEventListener('dragover', function(e) {
  e.preventDefault();
  return false;
});

ex3_one.addEventListener('drop', function(e) {
  e.preventDefault();
  ex3_one.appendChild(ex3_element);
});

ex3_two.addEventListener('drop', function(e) {
  e.preventDefault();
  ex3_two.appendChild(ex3_element);
});
