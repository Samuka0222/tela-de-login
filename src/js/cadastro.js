import validaSenha from "./modules/validaSenha.js"
import validaSenhaConfirmada from "./modules/validaSenhaConfirmada.js"
import validaUsuario from "./modules/validaUsuario.js"
import validaEmail from "./modules/validaEmail.js"
import mensagensDeErro from "./modules/mensagens.js"

class User {
    constructor(userId, nome, sobrenome, email, usuario, senha) {
        this.userId = userId
        this.nome = nome
        this.sobrenome = sobrenome
        this.email = email
        this.usuario = usuario
        this.senha = senha
    }
}

let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
usuarios = usuarios.map((data) => new User(data.userId, data.nome, data.sobrenome, data.email, data.usuario, data.senha));

let idCounter = () => {
    // Encontra o ID mais alto atual
    let maxId = -1
    usuarios.forEach((cliente) => {
        const id = parseInt(cliente.userId.substr(4), 10)
        if (!isNaN(id) && id > maxId) {
            maxId = id
        }
    })
    return maxId + 1
}

// Detalhes
const senhaRequisitos = document.getElementById('senhaRequisitos')

// Inputs
const inputSenha = document.getElementById('input-senha')

inputSenha.addEventListener('focus', () => {
    senhaRequisitos.classList.remove('hidden')
})

inputSenha.addEventListener('blur', () => {
    senhaRequisitos.classList.add('hidden')
})


const formCadastro = document.getElementById('formCadastro')
formCadastro.addEventListener('submit', (e) => {
    e.preventDefault()
    
    // Variaveis guardando o valor digitado no input
    let usuarioNome = document.getElementById('input-nome').value
    let usuarioSobrenome = document.getElementById('input-sobrenome').value
    let usuarioEmail = document.getElementById('input-email').value
    let usuarioUser = document.getElementById('input-user').value
    let usuarioSenha = document.getElementById('input-senha').value
    let usuarioSenhaConfirmada = document.getElementById('input-senha-confirmada').value

    //Validação de E-mail
    const emailValido = validaEmail(usuarioEmail)
    if (!emailValido) {
        mensagensDeErro.email()
        return
    }

    // validação de usuário
    const usuarioValido = validaUsuario(usuarioUser)
    if (!usuarioValido) {
        mensagensDeErro.usuario()
        return
    }

    // Validação da senha
    const senha = inputSenha.value
    const senhaValida = validaSenha(senha)
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

    // Cria um id dinamico com pelo menos 4 digitos
    const nextID = idCounter()
    const userID = 'user' + nextID.toString().padStart(4, '0')

    let newUser = new User(userID, usuarioNome, usuarioSobrenome, usuarioEmail, usuarioUser, usuarioSenha)

    usuarios.push(newUser)

    localStorage.setItem('usuarios', JSON.stringify(usuarios))

    window.location.href = '/index.html'

    console.log(usuarios)
})


export default usuarios