const form = document.getElementById('formulario')
let linhas = ''
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste" />'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('Digite a nota mínima: '))


form.addEventListener('submit', function(e){
    e.preventDefault()
    addLinha()
    atualizaTab()
    atualizaNotaFinal()
})

function addLinha() {
    
    const nome = document.getElementById('nome')
    const nota = document.getElementById('nota')

    if (atividades.includes(nome.value)) {
        alert (`A atividade ${nome.value} já foi inserida`)
    } else {
        atividades.push(nome.value)
        notas.push(parseFloat(nota.value))
    
        let linha = '<tr>'
        linha += `<td>${nome.value}</td>`
        linha += `<td>${nota.value}</td>`
        linha += `<td>${nota.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>` 
        linhas += linha
    }

    nome.value = ''
    nota.value = ''
}

function atualizaTab() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaNotaFinal() {
    const mediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal() {
    let somaFinal = 0

    for (let i = 0; i < notas.length; i++) {
        somaFinal += notas[i]
    }

    return somaFinal / notas.length

}