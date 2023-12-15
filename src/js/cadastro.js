import verificaRequisitosSenha from "./modules/verificaRequisitosSenha.js";
import validaSenha from "./modules/validaSenha.js";
import validaUsuario from "./modules/validaUsuario.js"
import validaSenhaConfirmada from "./modules/validaSenhaConfirmada.js";
import mensagensDeErro from "./modules/mensagens.js";
let users = [];

class User {
    constructor(nome, sobrenome, email, usuario, senha) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.email = email
        this.usuario = usuario
        this.senha = senha
    }
}

// Dialog para requisitos de senha
const senhaRequisitos = document.getElementById('senhaRequisitos')

// Inputs
const inputSenha = document.getElementById('input-senha')
const inputUsuario = document.getElementById('input-user')

inputSenha.addEventListener('focus', () => {
    senhaRequisitos.classList.remove('hidden')
})

inputSenha.addEventListener('blur', () => {
    senhaRequisitos.classList.add('hidden')
})


// Verificação de requisitos da senha
inputSenha.addEventListener('input', () => {
    const senha = inputSenha.value
    verificaRequisitosSenha(senha)
})

inputUsuario.addEventListener('blur', () => {
    const usuario = inputUsuario.value
    const usuarioValido = validaUsuario(usuario)
    if (!usuarioValido) {
        mensagensDeErro.usuario("<p>Formato de usuário incorreto, tente novamente.</p>")
        return
    }
})

const formCadastro = document.getElementById('formCadastro')
formCadastro.addEventListener('submit', async (e) => {
    e.preventDefault()

    // Variaveis guardando o valor digitado no input
    let usuarioNome = document.getElementById('input-nome').value
    let usuarioSobrenome = document.getElementById('input-sobrenome').value
    let usuarioEmail = document.getElementById('input-email').value
    let usuarioUser = document.getElementById('input-user').value
    let usuarioSenha = document.getElementById('input-senha').value
    let usuarioSenhaConfirmada = document.getElementById('input-senha-confirmada').value

    // Confirmação de senha
    const senhaValida = validaSenha(usuarioSenha)
    if (!senhaValida) {
        mensagensDeErro.senha()
        return
    }

    // Validação de confirmação de senha
    const senhaConfirmadaValida = validaSenhaConfirmada(usuarioSenha, usuarioSenhaConfirmada)
    if (!senhaConfirmadaValida) {
        mensagensDeErro.senhaConfirmada()
        return
    }

    let newUser = new User(usuarioNome, usuarioSobrenome, usuarioEmail, usuarioUser, usuarioSenha)
    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    alert("Usuário cadastrado com sucesso!")
    window.location.href = "/index.html";

})