const passwordBox = document.querySelector(".input")
const passwordLen = 14

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const symbols   = "!@#$%^&*()_-+=[]{}|:;<>,.?/~\'"
const numbers   = "0123456789"
const allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+=[]{}|:;<>,.?/~\'0123456789"

function generatePassword(){
    password = ""
    password += upperCase[Math.floor(Math.random()*upperCase.length)]
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password += symbols[Math.floor(Math.random()*symbols.length)]
    password += numbers[Math.floor(Math.random()*numbers.length)]

    while(passwordLen > password.length){
        password += allCharacters[Math.floor(Math.random()*allCharacters.length)]
    }

    passwordBox.value = password
}

function copyPassword(){
    passwordBox.select()
    document.execCommand("copy")
}

document.querySelector(".js-generate-btn").addEventListener("click",()=>{
    generatePassword()
})

document.querySelector(".js-copy-password").addEventListener("click",()=>{
    copyPassword()
})

