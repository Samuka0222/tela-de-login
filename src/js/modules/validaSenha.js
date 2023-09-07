export default function validaSenha(senha, senhaConfirmada) {
    if (senha.length < 8 && senha !== senhaConfirmada) {
        return false
    }

    if (!/[A-Z]/.test(senha)) {
        return false
    }

    if (!/\d/.test(senha)) {
        return false
    }

    const caracteresEspeciais = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/
    if (!caracteresEspeciais.test(senha)) {
        return false
    }

    return true
}