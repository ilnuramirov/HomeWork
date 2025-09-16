function crypto(password) {
    let arrPassword = password.split("");
    arrPassword.reverse();
    return arrPassword.join("");
}
let originalPassword = "пароль";

console.log(crypto(originalPassword));

function decrypt(encryptedPassword, originalPassword) {
    let arrPassword = encryptedPassword.split("");
    arrPassword.reverse();
    let reversPass = arrPassword.join("");
    if (originalPassword === reversPass) {
        return true;
    } else {
        return false;
    }   
}

console.log(decrypt("длороп", originalPassword));
