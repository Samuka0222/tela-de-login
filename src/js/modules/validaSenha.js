export default function validaSenha(senha) {
    if (senha.length < 8) {
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