let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

const exibirSenha = document.querySelector('#exibirSenha')
const form = document.querySelector('[data-formulario]')
const feedback = document.getElementById('feedback')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const userDigitado = document.getElementById('input-user').value
    const senhaDigitada = document.getElementById('input-senha').value
    
    const dadosValidos = usuarios.some((user) => (user.usuario === userDigitado || user.email === userDigitado) && user.senha === senhaDigitada)

    if(dadosValidos) {
        window.location.href = "/src/pages/home.html"
    } else {
        feedback.classList.add('feedback-erro')
        feedback.innerHTML = "<p>Dados estão incorretos, favor verifique e tente novamente.</p>"
    }

})

exibirSenha.addEventListener('click', () => {
    const senha = document.getElementById('input-senha')
    if (senha.type === 'password') {
        senha.type = 'text'
    } else {
        senha.type = 'password'
    }
})