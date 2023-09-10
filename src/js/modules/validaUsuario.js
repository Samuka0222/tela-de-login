import usuarios from "../cadastro.js";

export default function validaUsuario(usuarioCadastrado) {
    if (/^\S+$/.test(usuarioCadastrado)) {
        
        // Verifica se o usuário já está cadastrado.

        const usuarioExistente = usuarios.some((user) => user.usuario === usuarioCadastrado)
        return !usuarioExistente
    }

    return false
    
}