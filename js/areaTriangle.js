document.addEventListener('DOMContentLoaded', () => {
    const alturaInput = document.getElementById('altura');
    const larguraInput = document.getElementById('largura');
    const resultadoInput = document.getElementById('resultado');
    const calcularButton = document.querySelector('.areaCalc button');

    calcularButton.addEventListener('click', () => {
        const altura = parseFloat(alturaInput.value);
        const largura = parseFloat(larguraInput.value);
        
        if (!isNaN(altura) && !isNaN(largura) && altura > 0 && largura > 0) {
            const area = (largura * altura) / 2;
            resultadoInput.value = area.toFixed(2) + ' m²';
        } else {
            resultadoInput.value = 'Por favor, insira valores válidos!';
        }
    });
});
