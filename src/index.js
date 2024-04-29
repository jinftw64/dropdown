import './style.css';

function createDropDown(element) {
  if (!element.classList.contains('dropdown')) {
    return console.log('not a dropdown')
  }

  const button = element.querySelector('button');
  const uL = element.querySelector('ul');

  button.addEventListener('click', () => {
    for (const child of uL.children) {
      if (child.classList.contains('hidden')) {
        child.classList.remove('hidden');
      } else {
        child.classList.add('hidden');
      }
    }
  })
}

const first = document.querySelector('#first');
const second = document.querySelector('#second');

createDropDown(first);
createDropDown(second);
