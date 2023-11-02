export default function validaUsuario(usuarioCadastrado) {
    if (!(/^\S*$/.test(usuarioCadastrado))) {
        return false
    }
    return true
}