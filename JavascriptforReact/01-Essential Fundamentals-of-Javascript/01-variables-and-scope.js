
// En JavaScript, hay tres formas principales de declarar variables:

// let → Funciona a nivel de bloque, más segura que var.
//  const → Similar a let, pero su valor no puede cambiar una vez asignado.

/* Tipos de Alcance (Scope)
    1. Global Scope → Accesible desde cualquier parte del código.
    2. Function Scope → Accesible solo dentro de la función donde se declara.
    3. Block Scope → Variables dentro de bloques {} no pueden ser accedidas fuera de ellos. */

let userStatus = "Active";
let products = ["Laptop", "Mouse", "Keyboard"];
let count = 0;

const TAX_RATE = 0.19;
const API_URL = "https://api.example.com/products";
const EMAIL_SERVER = "smtp.example.com";

// Manejo de clientes

const COMPANY_NAME = "Tech Solutions";

function registetClient(clientName) {
    let clientId = Math.floor(Math.random() * 1000);
    let clientType = "Premium";

    if(clientId % 2 === 0) {
        let discount = 10;
        console.log(`Cliente id ${clientId}: ${clientName}, ${COMPANY_NAME}. obtuvo ${discount}% de descuento. Tipo: ${clientType}`);
    } else {
        clientType = "Basic";
        console.log(`Cliente registrado id ${clientId}: ${clientName} ${COMPANY_NAME}. sin descuento. Tipo: ${clientType}`);
    }
    
}

registetClient('Steveen Echeverri');


Number.MAX_VALUE;
Number.MIN_VALUE;

Math.random();


