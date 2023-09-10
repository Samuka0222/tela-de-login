export default function validaSenhaConfirmada (senha, senhaConfirmada) {
    if (senha !== senhaConfirmada) {
        return false
    }

    return true
} 
