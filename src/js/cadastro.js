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


const form = document.getElementById('formCadastro')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const usuarioNome = document.getElementById('input-nome').value
    const usuarioSobrenome = document.getElementById('input-sobrenome').value
    const usuarioEmail = document.getElementById('input-email').value
    const usuarioUser = document.getElementById('input-user').value
    const usuarioSenha = document.getElementById('input-senha').value

    
    // Cria um id dinamico com pelo menos 4 digitos
    const nextID = idCounter()
    const userID = 'user' + nextID.toString().padStart(4, '0') 

    let newUser = new User(userID, usuarioNome, usuarioSobrenome, usuarioEmail, usuarioUser, usuarioSenha)

    usuarios.push(newUser)

    localStorage.setItem('usuarios', JSON.stringify(usuarios))

    console.log(usuarios)
})


