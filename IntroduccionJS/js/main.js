const author = 'Steveen Echeverri';

console.log(`Welcome ${author}`);

// Variables Let

let client = 'Steveen'

// Constantes

const price = 52221;

// Tipos de datos

const product = 'Monitor 49 pulgadas';

console.log(typeof product);

const numberOne = 25.5;

// Boolean

const discount = true;

// Objetos

const newProduct = {
    nameProduct: 'Tablet',
    priceProduct: 4000,
    available: true,
};

// Destructuring

const { nameProduct, priceProduct, available } = newProduct;
console.log(nameProduct);

// Objetct Literal enhacement

const authenticated = true;
const newUser = 'Steveen';

const newObject = {
    authenticated,
    newUser
};

console.log(newObject);

// Manipulación de Objetos

// Reescribir
newProduct.available = false;

// Añadir
newProduct.image = 'Image.jpg';

// Eliminar
delete newProduct.priceProduct;

// No permite modificar
// Object.freeze(newProduct);
// No permite añadir o eliminar propiedad
// Object.seal(newProduct);

const newClient = {
    name: 'Hugo',
    premium: true,
    address: {
        neighborhood: "Flores"
    }
};

const { name: nameClient, address: { neighborhood }} = newClient;

console.log(nameClient);
console.log('Barrio: ', neighborhood);

const shoppingCart = {
    amount: 1,
    ...newProduct,
}

console.log(shoppingCart);

const newObjectClient = Object.assign(newProduct, newClient);
console.log(newObjectClient);

// Template string

const productOne = 'Computer';
const priceProductOne = 2850000;

console.log(`El producto es: ${productOne} y su precio es: ${priceProductOne}`);

// Arrays

const technologies = [23, 25, 12, true, 'React.js'];
console.log(technologies[4]);
console.log(technologies[1]);

const languages = ['HTML', 'CSS', 'javascript', 'typescript', 'java'];

languages.push('Python')

console.log(languages);

const langFilter = 'CSS';

const searchLang = languages.filter(function (tech) {
    if (tech !== langFilter) {
        return tech
    }
});

console.log(searchLang);

const searchLangMap = languages.map(function (tech) {
    console.log(tech);
})

console.log(searchLangMap);

// destructuring arrays

const [ , , javascript] = languages;

console.log(javascript);

// Iteradores

// 1. Foreach

languages.forEach(element => {
    console.log(element);
});

// 2. Map

const newArrayLang = languages.map(function (tech) {
    return tech
})

console.log(newArrayLang);

// 3. for ...of

for(let tech of languages) {
    console.log(tech);
}

// Function declaration

function sumNumbers(number1 = 0, number2 = 0) {
    console.log(number1 + number2);
}

sumNumbers(22, 23);

// Function expression

const subtraction = function (number1, number2) {
    console.log(number1 - number2);
}

// Arrow functions

const division = (number1, number2) => console.log(number1 / number2);

division(15, 3);

// filter
const numbersArray = [12, 52, 63, 13, 25, 35, 65];

const newArrayFilter = languages.filter(tech => tech !== 'HTML');
const resultFilterNumber = numbersArray.filter(number => number > 15);

// Includes

const resultLanguages = languages.includes('CSS');

// Some (Devuelve si al menos uno cumple la condición)

const resultSome = numbersArray.some(number => number > 15);

if(resultSome) {
    console.log('Hay elementos');
} else {
    console.log('No hay elementos');
}

// Find

const resultFind = numbersArray.find( number => number > 15);

// Every

const resultEvery = numbersArray.every( number => number > 5);

// Reduce

const resultReduce = numbersArray.reduce((total, number) => total + number, 0);
