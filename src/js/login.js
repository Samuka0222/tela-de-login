const exibirSenha = document.querySelector('#exibirSenha');
const form = document.querySelector('[data-formulario]');
const feedback = document.getElementById('feedback');
let users = JSON.parse(localStorage.getItem('users')) || [];

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

    for (let user of users) {
        if ((user.usuario === credenciais.usuario || user.email === credenciais.usuario) && user.senha === credenciais.senha) {
            window.location.href = "/src/pages/home.html";
        } else {
            feedback.classList.replace('hidden', 'feedback-erro');
            feedback.innerHTML = "<p>Dados estão incorretos, favor verifique e tente novamente.</p>";
            setTimeout(() => {
                feedback.classList.add('animate__fadeOut');
            }, 3000);

            setTimeout(() => {
                feedback.classList.replace('feedback-erro', 'hidden');
            }, 4000);
        }
    }
})
