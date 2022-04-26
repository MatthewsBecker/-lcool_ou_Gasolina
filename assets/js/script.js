function calcular(){
    const gs = parseFloat(document.getElementById("gasolina").value)
    const alc = parseFloat(document.getElementById("alcool").value)

    const resultado = document.getElementById("resultado")

    var r = (alc/gs).toFixed(2)

    if ( r <= 0.7 ) {
        resultado.textContent = `Vale mais a pena usar Álcool`
    } else {
        resultado.textContent = `Vale mais a pena usar Gasolina`
    }
}