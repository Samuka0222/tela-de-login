export default function verificaRequisitosSenha(senha) {
    const iconeMinCaracteres = document.getElementById('icone-minCaracteres')
    const iconeletraMaiuscula = document.getElementById('icone-letraMaiuscula')
    const iconeDigitoNumerico = document.getElementById('icone-digitoNumerico')
    const iconeCaractereEspecial = document.getElementById('icone-caractereEspecial')
    const caracteresEspeciais = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/ 
    
    if (senha.length < 8) {
        alteraIcone(iconeMinCaracteres, "reprovado")
    } else {
        alteraIcone(iconeMinCaracteres, "aprovado")
    }
    
    if (!/[A-Z]/.test(senha)) {
        alteraIcone(iconeletraMaiuscula, "reprovado")
    } else {
        alteraIcone(iconeletraMaiuscula, "aprovado")
    }
    
    if (!/\d/.test(senha)) {
        alteraIcone(iconeDigitoNumerico, "reprovado")
    } else {
        alteraIcone(iconeDigitoNumerico, "aprovado")
    }
    
    if (!caracteresEspeciais.test(senha)) {
        alteraIcone(iconeCaractereEspecial, "reprovado")
    } else{
        alteraIcone(iconeCaractereEspecial, "aprovado")
    }
}

function alteraIcone(icone, status) {
    if (status === "aprovado") {
        icone.classList.replace('fa-circle-xmark', 'fa-circle-check')
        icone.style.color = "green"
    } else {
        icone.classList.replace('fa-circle-check', 'fa-circle-xmark')
        icone.style.color = "red"
    }
}