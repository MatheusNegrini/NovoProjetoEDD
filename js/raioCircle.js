document.addEventListener('DOMContentLoaded', () => {
    const diametroInput = document.getElementById('diametro');
    const resultadoInput = document.getElementById('resultado');
    const calcularButton = document.querySelector('.areaCalc button');

    calcularButton.addEventListener('click', () => {
        const diametro = parseFloat(diametroInput.value);
        
        if (!isNaN(diametro) && diametro > 0) {
            const raio = diametro / 2;
            resultadoInput.value = raio.toFixed(2) + ' m²';
        } else {
            resultadoInput.value = 'Por favor, insira valores válidos!';
        }
    });
});
