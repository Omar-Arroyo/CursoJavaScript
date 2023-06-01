console.log("Factura de Supermercado");
let nombre = prompt("Ingrese su nombre: ");
let dni = prompt("Ingrese su numero de documento: ");

precioLeche = 180;
precioHarina = 95;
precioPasta = 120;
precioArroz = 95;
precioAzucar = 80;

//Funcion
let multi = (a,b)=> a*b;

let product = prompt("Ingrese nombre del producto: (0 para finalizar)");
while (product != 0){
    switch (product){
    case "Leche":
        let lecheTotal = parseInt(prompt("Ingrese cantidad: "));
        console.log("Llevas "+lecheTotal+" leche/s por un monto de: " + (multi (precioLeche,lecheTotal)+"$"));
    break;
    case "Harina":
        let harinaTotal = parseInt(prompt("Ingrese cantidad: "));
        console.log("Llevas "+harinaTotal+" harina/s por un monto de: " + (multi (precioHarina,harinaTotal)+"$"));
    break;   
    case "Pasta":
        let pastaTotal = parseInt(prompt("Ingrese cantidad: "));
        console.log("Llevas "+pastaTotal+" pasta/s por un monto de: " + (multi (precioPasta,pastaTotal)+"$"));
    break;
    case "Arroz":
        let arrozTotal = parseInt(prompt("Ingrese cantidad: "));
        console.log("Llevas "+arrozTotal+" arroz por un monto de: " + (multi (precioArroz,arrozTotal)+"$"));
    break;
    case "Azucar":
        let azucarTotal = parseInt(prompt("Ingrese cantidad: "));
        console.log("Llevas "+arrozTotal+" azucar por un monto de: " + (multi (precioAzucar,azucarTotal)+"$"));
    break;
    default:
        alert ("Producto invalido o inexistente")
    }
    product = prompt("Ingrese nombre del producto: (0 para finalizar)");
}

console.log("Sr/a Clientes " + nombre);
console.log("Nro de documento: " + dni);
