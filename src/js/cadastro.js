import validaSenha from "./modules/validaSenha.js"
import validaSenhaConfirmada from "./modules/validaSenhaConfirmada.js"
import validaEmail from "./modules/validaEmail.js"
import mensagensDeErro from "./modules/mensagens.js"

class User {
    constructor(nome, sobrenome, email, usuario, senha) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.email = email
        this.usuario = usuario
        this.senha = senha
    }
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

// Validação da senha
inputSenha.addEventListener('input', () => {
    const senha = inputSenha.value
    console.log(senha)
    const senhaValida = validaSenha(senha)
    if (!senhaValida) {
        mensagensDeErro.senha()
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

    //Validação de E-mail
    const emailValido = validaEmail(usuarioEmail)
    if (!emailValido) {
        mensagensDeErro.email()
        return
    }


    // Validação de confirmação de senha
    const senhaConfirmadaValida = validaSenhaConfirmada(usuarioSenha, usuarioSenhaConfirmada)
    if (!senhaConfirmadaValida) {
        mensagensDeErro.senhaConfirmada()
        return
    }

    let newUser = new User(usuarioNome, usuarioSobrenome, usuarioEmail, usuarioUser, usuarioSenha)

    try {
        const resposta = await fetch('http://localhost:8080/clients-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })

        if (resposta.ok) {
            console.log("Usuário cadastrado")
        } else {
            console.error("Erro ao criar o usuário")
        }
    } catch (error) {
        console.error("Erro na solicitação", error)
    }
})