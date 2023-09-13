let mensagensDeErro = {
    email: () => {
        const emailFeedback = document.querySelector('[data-feedback="email"]')
        emailFeedback.classList.add('feedback-erro')
        emailFeedback.innerHTML = "<p class='animate__animated animate__shakeX'>E-mail inválido, tente novamente.</p>"
    }, 
    
    usuario: () => {
        const usuarioFeedback = document.querySelector('[data-feedback="usuario"]')
        usuarioFeedback.classList.add('feedback-erro')
        usuarioFeedback.innerHTML = "<p>Usuário inválido ou já existente, tente novamente.</p>"
    },
    
    senha: () => {
        const senhaFeedback = document.querySelector('[data-feedback="senha"]')
        senhaFeedback.classList.add('feedback-erro')
        senhaFeedback.innerHTML = "<p>A senha não está no padrão, tente novamente.</p>"
    },

    senhaConfirmada: () => {
        const senhaConfirmadaFeedback = document.querySelector('[data-feedback="senhaConfirmada"]')
        senhaConfirmadaFeedback.classList.add('feedback-erro')
        senhaConfirmadaFeedback.innerHTML = "<p>A confirmação de senha está incorreta, favor verificar.</p>"
    },
}

export default mensagensDeErro