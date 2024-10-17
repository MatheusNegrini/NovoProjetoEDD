// areaQuadrado.js

document.addEventListener("DOMContentLoaded", () => {
    const botaoCalcular = document.querySelector("button");
    const ladoInput = document.getElementById("lado");
    const resultadoInput = document.getElementById("resultado");

    botaoCalcular.addEventListener("click", () => {
        const lado = parseFloat(ladoInput.value);

        if (!isNaN(lado) && lado > 0) {
            const area = lado * lado;
            resultadoInput.value = `${area} m²`;
        } else {
            alert("Por favor, insira um valor válido para o lado.");
        }
    });
});
