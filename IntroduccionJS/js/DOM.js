// Selectores
const heading = document.querySelector('.heading');

console.log(heading);
console.log(heading.tagName);
console.log(heading.textContent);
console.log(heading.classList);
console.log(heading.id);

const links = document.querySelector('.navegacion a');
const linksAll = document.querySelectorAll('.navegacion a');

console.log(linksAll);

// Manipular elementos HTML con JS

heading.textContent = 'JavaScript Intermedio - Manipulación de DOM update';
heading.id = 'newId';

// delete heading.textContent;

heading.removeAttribute('id');

const inputName = document.querySelector('#nombre');
inputName.value = 'Nuevo valor input';

linksAll.forEach( link => link.textContent = 'Update link')

// Eventos del DOM - clicks

heading.addEventListener('click', () => {
    heading.textContent = 'JavaScript Intermedio - Manipulación de DOM Click'
});

heading.addEventListener('mouseenter', () => {
    // heading.textContent = 'JavaScript Intermedio - Manipulación de DOM mouseenter'
});

linksAll.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Update link click');
        console.log(event.target);
    })
});

