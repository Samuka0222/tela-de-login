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

let usuarios = []
let idCounter = 1


const form = document.getElementById('formCadastro')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const usuarioNome = document.getElementById('input-nome').value
    const usuarioSobrenome = document.getElementById('input-sobrenome').value
    const usuarioEmail = document.getElementById('input-email').value
    const usuarioUser = document.getElementById('input-user').value
    const usuarioSenha = document.getElementById('input-senha').value

    // Cria um id dinamico com pelo menos 4 digitos
    const userID = 'user' + idCounter.toString().padStart(4, '0') 

    let newUser = new User(userID, usuarioNome, usuarioSobrenome, usuarioEmail, usuarioUser, usuarioSenha)

    usuarios.push(newUser)

    idCounter++

    console.log(usuarios)
})


