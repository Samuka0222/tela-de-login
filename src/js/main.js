
const exibirSenha = document.querySelector('#exibirSenha')
const form = document.querySelector('[data-formulario]')


function efetuarLogin() {
    const userDigitado = document.getElementById('input-user').value
    const senhaDigitada = document.getElementById('input-senha').value

    if (userDigitado === usuarios.user && senhaDigitada === usuarios.senha) {
        alert("Login aprovado")
    } else {
        alert("Credências inválidas, tente novamente.")
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const btnSubmit = document.getElementById('botao-Submit')
    btnSubmit.click()
})


exibirSenha.addEventListener('click', () => {
    const senha = document.getElementById('input-senha')
    if (senha.type === 'password') {
        senha.type = 'text'
    } else {
        senha.type = 'password'
    }
})