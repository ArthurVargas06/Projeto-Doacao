const registroForm = document.getElementById('registroForm')
const registrarBtn = document.getElementById('registrarBtn')


registrarBtn.addEventListener('click', function(event) {
    event.preventDefault()
    mostrarMensagemDeSucesso()
})
function mostrarMensagemDeSucesso() {
    registroForm.style.display = 'none'
    const sucessoMessage = document.getElementById('sucessoMessage')
    sucessoMessage.style.display = 'block'
}
