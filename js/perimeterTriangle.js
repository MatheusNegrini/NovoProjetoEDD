document.addEventListener('DOMContentLoaded', () => {
    const lado1Input = document.getElementById('lado1');
    const lado2Input = document.getElementById('lado2');
    const lado3Input = document.getElementById('lado3');
    const resultadoInput = document.getElementById('resultado');
    const calcularButton = document.querySelector('.areaCalc button');

    calcularButton.addEventListener('click', () => { 
        const lado1 = parseFloat(lado1Input.value);
        const lado2 = parseFloat(lado2Input.value);
        const lado3 = parseFloat(lado3Input.value);
        
        if (!isNaN(lado1) && !isNaN(lado2) && !isNaN(lado3) && 
            lado1 > 0 && lado2 > 0 && lado3 > 0) {

            const perimetro = lado1 + lado2 + lado3;

            resultadoInput.value = perimetro.toFixed(2) + ' m';
        } else {
            resultadoInput.value = 'Por favor, insira valores válidos!';
        }
    });
});
