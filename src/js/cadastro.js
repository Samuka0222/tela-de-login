var usuarios = []

// Variaveis do formulario
const usuarioNome = document.getElementById('input-nome').value
const usuarioSobrenome = document.getElementById('input-sobrenome').value
const usuarioEmail = document.getElementById('input-email').value
const usuarioUser = document.getElementById('input-user').value
const usuarioSenha = document.getElementById('input-senha').value

const btnSubmit = document.getElementById('btnSubmit')

btnSubmit.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let user = {
        nome: usuarioNome,
        sobrenome: usuarioSobrenome,
        email: usuarioEmail,
        user: usuarioUser,
        senha: usuarioSenha
    }
    
    usuarios = [user]
    
    console.log(usuarios)
})


