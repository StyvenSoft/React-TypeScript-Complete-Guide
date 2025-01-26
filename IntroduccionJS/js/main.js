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

// Object Literal enhacement

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

// Operador lógico

const balance = 1000;
const pay = 12000;
const card = false;

if (balance > pay || card) {
    console.log('Realizar pago');
} else {
    console.log('No se puede pagar');
}

// Operador ternario

balance > pay ?
    console.log('Pago') :
    card ?
        console.log('Pagar con tarjeta') :
        console.log('No pago');

// Optional chaining (?)

const student = {
    nameStudent: 'Steveen',
    classStudent: 'Programación 01',
    approved: true,
};

// Si existe Exams
console.log(student.exams?.examOne);

// Nullish coolescing (??)

const page = null ?? 1;

console.log(page);

// Evaluation corto circuito

const auth = true;

if ({}) {
    console.log('Truthy');
} else {
    console.log('false');
}

auth && console.log('Usuario autenticado');

// Fetch API con Promises
const urlData = 'https://jsonplaceholder.typicode.com/comments';

fetch(urlData)
    .then((response) => {
        if(response.ok) {
            return response.json() 
        }
        throw new Error('Se presento un error!');
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })

// Async - Await
const consultAPI = async () => {
    try {
        const response = await fetch(urlData)
        if(!response.ok) {
            throw new Error('Hubo un error!')
        }
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

consultAPI();

// Performance
const urlAll = 'https://jsonplaceholder.typicode.com/todos';

const consultNewAPI = async () => {
    try {
        const start = performance.now();
        
        const [response, responseTwo] = await Promise.all([fetch(urlData), fetch(urlAll)])

        const [data, dataTwo] = await Promise.all([response.json(), responseTwo.json()]);

        console.log(data);
        console.log(dataTwo);
        
        

        const end = performance.now();

        console.log(`El resultado es: ${end - start} ms`);
        
    } catch (error) {
        console.log(error.message);
    }
}

consultNewAPI();