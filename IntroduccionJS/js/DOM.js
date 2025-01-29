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
        event.target.textContent = 'New click!';
        console.log(event.target);
    })
});

// Eventos del DOM - Input

const inputNameEvent = document.querySelector('#nombre');
inputNameEvent.addEventListener('input', (event) => {
    // console.log('Escribiendo...');
    console.log(event.target.value);
});

const inputPassword = document.querySelector('#password');
inputPassword.addEventListener('input', functionPassword)

function functionPassword() {
    inputPassword.type = 'text'

    setTimeout(() => {
        inputPassword.type = 'password'
    }, 3000);
}

// Eventos del DOM - Submit

const formDOM = document.querySelector('#formulario');
formDOM.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#nombre').value;
    const password = document.querySelector('#password').value;
    console.log(name);
    
    if(name === '' || password === '') {
        console.log('Campos obligatorios');
    } else {
        console.log('Iniciando sesión');
    }
    console.log('Enviando formulario...');
});


