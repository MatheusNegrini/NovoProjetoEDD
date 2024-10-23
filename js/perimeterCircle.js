document.addEventListener('DOMContentLoaded', () => {
    const raioInput = document.getElementById('raio');
    const resultadoInput = document.getElementById('resultado');
    const calcularButton = document.querySelector('.areaCalc button');

    calcularButton.addEventListener('click', () => {
        const raio = parseFloat(raioInput.value);
        
        if (!isNaN(raio) && raio > 0) {
            const raioTotal = raio*3.1416*2;
            resultadoInput.value = raioTotal.toFixed(2) + ' m²';
        } else {
            resultadoInput.value = 'Por favor, insira valores válidos!';
        }
    });
});
