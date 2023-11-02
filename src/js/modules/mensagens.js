let mensagensDeErro = {
    usuario: (mensagem = "<p>Usuário já existente, tente outro usuário.</p>") => {
        const usuarioFeedback = document.querySelector('[data-feedback="usuario"]')
        usuarioFeedback.classList.remove('hidden')
        usuarioFeedback.classList.add('feedback-erro')
        usuarioFeedback.innerHTML = mensagem

        clearTimeout(usuarioFeedback.fadeOutTimeout);
        clearTimeout(usuarioFeedback.hideTimeout);

        // Define um novo temporizador para animação de fadeOut
        usuarioFeedback.fadeOutTimeout = setTimeout(() => {
            usuarioFeedback.classList.add('animate__fadeOut');
        }, 3000);

        // Define um novo temporizador para esconder o feedback
        usuarioFeedback.hideTimeout = setTimeout(() => {
            usuarioFeedback.classList.remove('animate__fadeOut')
            usuarioFeedback.classList.add('hidden');
        }, 4000);
        
    },

    senha: () => {
        const senhaFeedback = document.querySelector('[data-feedback="senha"]')
        senhaFeedback.classList.replace('hidden', 'feedback-erro')
        senhaFeedback.innerHTML = "<p>A senha não está no padrão, tente novamente.</p>"

        clearTimeout(senhaFeedback.fadeOutTimeout);
        clearTimeout(senhaFeedback.hideTimeout);

        // Define um novo temporizador para animação de fadeOut
        senhaFeedback.fadeOutTimeout = setTimeout(() => {
            senhaFeedback.classList.add('animate__fadeOut');
        }, 3000);

        // Define um novo temporizador para esconder o feedback
        senhaFeedback.hideTimeout = setTimeout(() => {
            senhaFeedback.classList.remove('animate__fadeOut')
            senhaFeedback.classList.add('hidden');
        }, 4000);
    },

    senhaConfirmada: () => {
        const senhaConfirmadaFeedback = document.querySelector('[data-feedback="senhaConfirmada"]')
        senhaConfirmadaFeedback.classList.replace('hidden', 'feedback-erro')
        senhaConfirmadaFeedback.innerHTML = "<p>A confirmação de senha está incorreta, favor verificar.</p>"

        setTimeout(() => {
            senhaConfirmadaFeedback.classList.add('animate__fadeOut')
        }, 3000)

        setTimeout(() => {
            senhaConfirmadaFeedback.classList.remove('animate__fadeOut')
            senhaConfirmadaFeedback.classList.add('hidden')
        }, 4000)
    },
}

export default mensagensDeErro