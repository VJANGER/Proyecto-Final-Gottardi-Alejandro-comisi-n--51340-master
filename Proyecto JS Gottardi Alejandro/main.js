alert("Bienvenido a tú banco")

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
                costos = 1.1
                break;
            case 'uva':
                costos = 1.01
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


