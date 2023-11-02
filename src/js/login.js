const exibirSenha = document.querySelector('#exibirSenha')
const form = document.querySelector('[data-formulario]')
const feedback = document.getElementById('feedback')


exibirSenha.addEventListener('click', () => {
    const senha = document.getElementById('input-senha')
    if (senha.type === 'password') {
        senha.type = 'text'
    } else {
        senha.type = 'password'
    }
})

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    
    const userDigitado = document.getElementById('input-user').value
    const senhaDigitada = document.getElementById('input-senha').value
    
    const credenciais = {
        usuario: userDigitado,
        senha: senhaDigitada,
    }
    
    try {
        const resposta = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(credenciais)
        })

        if(resposta.ok) {
            const data = await resposta.json()
            const token = data.token

            localStorage.setItem('token', token)

            window.location.href = "/src/pages/home.html"

        } else {
            feedback.classList.remove('hidden')
            feedback.classList.add('feedback-erro')
            feedback.innerHTML = "<p>Dados estão incorretos, favor verifique e tente novamente.</p>"
            setTimeout(() => {
                feedback.classList.add('animate__fadeOut')
            }, 3000)
        
            setTimeout(() => {
                feedback.classList.add('hidden')
            }, 4000)
        }
    } catch (error) {
        console.error("Erro na solicitação", error)
    }
})
