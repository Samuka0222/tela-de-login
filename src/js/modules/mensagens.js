let mensagensDeErro = {
    email: () => {
        const emailFeedback = document.querySelector('[data-feedback="email"]')
        emailFeedback.classList.remove('hidden')
        emailFeedback.classList.add('feedback-erro')
        emailFeedback.innerHTML = "<p class='animate__animated animate__shakeX'>E-mail inválido, tente novamente.</p>"

        setTimeout(() => {
            emailFeedback.classList.add('animate__fadeOut')
        }, 3000)

        setTimeout(() => {
            emailFeedback.classList.add('hidden')
        }, 4000)
    }, 
    
    usuario: () => {
        const usuarioFeedback = document.querySelector('[data-feedback="usuario"]')
        usuarioFeedback.classList.remove('hidden')
        usuarioFeedback.classList.add('feedback-erro')
        usuarioFeedback.innerHTML = "<p>Usuário inválido ou já existente, tente novamente.</p>"

        setTimeout(() => {
            usuarioFeedback.classList.add('animate__fadeOut')
        }, 3000)

        setTimeout(() => {
            usuarioFeedback.classList.add('hidden')
        }, 4000)
    },
    
    senha: () => {
        const senhaFeedback = document.querySelector('[data-feedback="senha"]')
        senhaFeedback.classList.remove('hidden')
        senhaFeedback.classList.add('feedback-erro')
        senhaFeedback.innerHTML = "<p>A senha não está no padrão, tente novamente.</p>"

        setTimeout(() => {
            senhaFeedback.classList.add('animate__fadeOut')
        }, 3000)

        setTimeout(() => {
            senhaFeedback.classList.add('hidden')
        }, 4000)
    },

    senhaConfirmada: () => {
        const senhaConfirmadaFeedback = document.querySelector('[data-feedback="senhaConfirmada"]')
        senhaConfirmadaFeedback.classList.remove('hidden')
        senhaConfirmadaFeedback.classList.add('feedback-erro')
        senhaConfirmadaFeedback.innerHTML = "<p>A confirmação de senha está incorreta, favor verificar.</p>"

        setTimeout(() => {
            senhaConfirmadaFeedback.classList.add('animate__fadeOut')
        }, 3000)

        setTimeout(() => {
            senhaConfirmadaFeedback.classList.add('hidden')
        }, 4000)
    },
}

export default mensagensDeErro