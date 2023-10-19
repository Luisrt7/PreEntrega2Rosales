
let sueldo, bonos, ingresosExtras, educacion, salud, utilidades, inversiones, alimentos;


function calcularPresupuesto() {
    sueldo = parseFloat(document.getElementById("sueldoInput").value) || 0;
    bonos = parseFloat(document.getElementById("bonosInput").value) || 0;
    ingresosExtras = parseFloat(document.getElementById("extrasInput").value) || 0;
    educacion = parseFloat(document.getElementById("educacionInput").value) || 0;
    salud = parseFloat(document.getElementById("saludInput").value) || 0;
    utilidades = parseFloat(document.getElementById("utilidadesInput").value) || 0;
    inversiones = parseFloat(document.getElementById("inversionesInput").value) || 0;
    alimentos = parseFloat(document.getElementById("alimentosInput").value) || 0;

    const totalIngresos = sueldo + bonos + ingresosExtras;
    const totalGastos = educacion + salud + utilidades + inversiones + alimentos;
    const presupuestoTotal = totalIngresos - totalGastos;

    mostrarPresupuesto(presupuestoTotal);
}

function mostrarPresupuesto(presupuesto) {
    const presupuestoTotalElement = document.getElementById("presupuestoTotal");
    presupuestoTotalElement.textContent = `El presupuesto total es: ${presupuesto}`;
}
