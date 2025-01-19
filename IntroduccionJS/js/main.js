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
