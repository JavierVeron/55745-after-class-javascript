// 1- Declaramos nuestro Array de Productos
const productos = [
    {id:1, nombre:"Gaseosa Coca Cola sabor original 2.25 l.", precio:715, imagen:"https://carrefourar.vtexassets.com/arquivos/ids/332148-1200-auto?v=638211437412370000&width=1200&height=auto&aspect=true"},
    {id:2, nombre:"Gaseosa Coca-Cola Zero 1.75 l.", precio:550, imagen:"https://carrefourar.vtexassets.com/arquivos/ids/320545-1200-auto?v=638187405189770000&width=1200&height=auto&aspect=true"},
    {id:3, nombre:"Gaseosa cola Pepsi regular 3 l.", precio:651, imagen:"https://carrefourar.vtexassets.com/arquivos/ids/308971-1200-auto?v=638146793795100000&width=1200&height=auto&aspect=true"},
    {id:4, nombre:"Gaseosa cola classic Cunnington pet 2.25 lts.", precio:373.68, imagen:"https://carrefourar.vtexassets.com/arquivos/ids/333914-1200-auto?v=638216542095370000&width=1200&height=auto&aspect=true"}
];

// Declarar la Clase Carrito
class Carrito {
    constructor() {
        this.productos = [];
        this.cantMaxProductos = 10;
        this.totalAPagarMax = 6000;
        this.precioFernetHielo = 3800;
        this.comboAgregado = false;
    }

    agregarProducto(producto, cantidad) {
        const item = {itemProducto:producto, itemCantidad:cantidad};
        console.log(item);
        this.productos.push(item);
    }

    totalProductos() {
        let total = 0;

        for (const item of this.productos) {
            total += item.itemCantidad;
        }

        return total;
    }

    totalAPagar() {
        let total = 0;

        for (const item of this.productos) {
            total += item.itemProducto.precio * item.itemCantidad;
        }

        if (this.comboAgregado) {
            total += this.precioFernetHielo;
        }

        return total;
    }

    aplicarDescuento() {
        let total = this.totalAPagar();

        if ((this.totalProductos() > this.cantMaxProductos) || (this.totalAPagar() > this.totalAPagarMax)) {
            total = total * 0.9;
        }

        return total;
    }

    agregarCombo() {
        let pregunta = prompt("Desea agregar el Combo: FERNET + HIELO? (SI / NO)").toUpperCase();

        if (pregunta == "SI") {
            this.comboAgregado = true;
        }
    }
}

function mostrarTotalAPagar() {
    let salida = "Total Productos: " + carrito.totalProductos() + "\n";
    salida += "Subtotal: $" + carrito.totalAPagar() + "\n";

    if (carrito.comboAgregado) {
        salida += "Combo FERNET + HIELO: $" + carrito.precioFernetHielo + "\n";
    }

    salida += "Total A Pagar: $" + carrito.aplicarDescuento();

    return salida;
}


// Comienzo de mi Programa
const carrito = new Carrito(); // Declaro mi Array Carrito (comienza vacío por defecto);

let salida = "";

for (const producto of productos) {
    salida += producto.id + "- " + producto.nombre + " $" + producto.precio + "\n";
}

let productoSeleccionado;

while (productoSeleccionado != 0) {
    productoSeleccionado = parseInt(prompt("Seleccione el Producto para agregar al Carrito: (0 para Salir)\n\n" + salida));

    if (productoSeleccionado == 0) {
        break;
    }

    let producto = productos[productoSeleccionado - 1]; // Obtener el producto seleccionado
    let cantidad = parseInt(prompt("Cuántos productos de " + producto.nombre + " vas a llevar?"));
    carrito.agregarProducto(producto, cantidad); // Agregar al Carrito el producto seleccionado 
}

carrito.agregarCombo(); // Preguntar si se desea agregar el Combo de Fernet + Hielo
salida = mostrarTotalAPagar();
alert(salida);
console.log(salida);