const form = document.querySelector('.inputs');
const imageLink = document.querySelector('#image-link');
const topTextInput = document.querySelector('#top-text-input');
const bottomTextInput = document.querySelector('#bottom-text-input');
const submitButton = document.querySelector('#submit-button');
const main = document.querySelector('.main-section');


submitButton.addEventListener('click', function(e) {
  e.preventDefault();

  if (imageLink.value === '') {
    return alert("Just like the worst Nintendo games, there's no link.");
  };

  let newDiv = document.createElement('div');
  newDiv.classList.add('meme-div');
  main.appendChild(newDiv);
  newDiv.style.background = `center / cover no-repeat url(${imageLink.value})`;

  let topText = document.createElement('p');
  topText.textContent = topTextInput.value;
  newDiv.appendChild(topText);

  let bottomText = document.createElement('p');
  bottomText.textContent = bottomTextInput.value;
  newDiv.appendChild(bottomText);

  let deleteButton = document.createElement('div');
  deleteButton.classList.add('delete-button', 'delete-button-hidden');
  newDiv.appendChild(deleteButton);

  let line = document.createElement('div');
  line.classList.add('line');
  deleteButton.appendChild(line);

  newDiv.addEventListener('mouseover', function() {
    deleteButton.classList.toggle('delete-button-hidden');
  })
  newDiv.addEventListener('mouseout', function() {
    deleteButton.classList.toggle('delete-button-hidden');
  })

  deleteButton.addEventListener('click', function(e) {
    this.parentNode.remove();
  })

  imageLink.value = '';
  topTextInput.value = '';
  bottomTextInput.value = '';
});