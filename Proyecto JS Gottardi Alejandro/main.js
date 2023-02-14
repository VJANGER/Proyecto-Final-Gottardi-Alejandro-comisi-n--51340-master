alert("Bienvenido a tú banco")

const prestamos = ["pesos", "dolares", "uva"];
const filtro = prestamos.filter(prestamos => prestamos.includes('d'))
console.log(filtro)

const pedirPrestamo = () => {
    let moneda = ''
    let monto = 0
    let costos = 0
    let subtotal = 0
    let otroPrestamo = false
    do {
        moneda = prompt("¿Qué tipo de prestamo desea obtener (pesos, dolares o uva)?")
        monto = parseInt(prompt("¿Qué monto desea solicitar?"))
        switch (moneda) {
            case 'pesos':
                costos = 2.20
                break;
            case 'dolares':
                costos = 0.1
                break;
            case 'uva':
                costos = 0.5
                break;
            default:
                alert("Los datos ingresados no son correctos")
                costos = 0
                monto = 0
        }
        subtotal += costos * monto
        otroPrestamo = confirm("¿Desea obtener solicitar otro prestamo?")
    } while (otroPrestamo);
    return subtotal
};

const calcularCuotas = () => {
    let cuotas = 1
    let escogerCuota = false
    const quiereCuotas = confirm("Seleccione la cantidad de cuotas de su prestamo")
    if (quiereCuotas) {
        do {
            cuotas = parseInt(prompt("Ingrese 12, 24 o 36 cuotas:"))
            switch (cuotas) {
                case 12:
                case 18:
                case 24:
                case 36:
                    return cuotas
                default:
                    alert("El número de cuota no es válido")
            }
            escogerCuota = true
        } while (escogerCuota);
    } else {
        return cuotas
    }
};
let prestamo = pedirPrestamo();
let cuotas = calcularCuotas();

const valorCuota = prestamo / cuotas;
alert("El total a pagar es: $"+ prestamo + " en " + cuotas + " cuotas de: $"+valorCuota.toFixed(2));

console.log(Math.round(valorCuota))




class Producto {
    constructor(moneda, interes) {
        this.moneda = moneda.toUpperCase();
        this.interes = Number(interes);
        this.solicitado = false;
    }
    sumarCostoAdmin() {
        this.interes = this.interes * 0.21
    }
    vender() {
        this.solicitado = true
    }
}
const productos = []
const producto1 = new Producto('pesos', 2.20)
const producto2 = new Producto('dolares', 0.1)
const producto3 = new Producto('uva', 0.5)
productos.push(producto1, producto2, producto3)
for (const producto of productos) {
    producto.sumarCostoAdmin()
    producto.vender()
}
console.log(productos)


