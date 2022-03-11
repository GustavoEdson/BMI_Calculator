function Escopo() {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        const imc = peso.value / (parseFloat(altura.value) * parseFloat(altura.value))

        console.log(imc);
        if (peso || altura == NaN) {
            resultado.innerHTML = `Informação invalida.`
        }
        if (imc < 18.5) {
            resultado.innerHTML = `Seu IMC é (${imc.toFixed(2)}) Abaixo do Peso`
        }
        if (imc >= 18.5 && imc >= 24.09) {
            resultado.innerHTML = `Seu IMC é (${imc.toFixed(2)}) Peso normal`
        }
        if (imc >= 25 && imc <= 29.09) {
            resultado.innerHTML = `Seu IMC é (${imc.toFixed(2)}) Sobrepeso`
        }
        if (imc >= 30.00 && imc <= 34.09) {
            resultado.innerHTML = `Seu IMC é (${imc.toFixed(2)}) Obesidade grau 1`
        }
        if (imc >= 35.00 && imc <= 39.09) {
            resultado.innerHTML = `Seu IMC é (${imc.toFixed(2)}) Obesidade grau 2`
        }
        if (imc > 40.00) {
            resultado.innerHTML = `Seu IMC é (${imc.toFixed(2)}) Obesidade grau 3`
        }
    }
    form.addEventListener('submit', recebeEventoForm)
}
Escopo()