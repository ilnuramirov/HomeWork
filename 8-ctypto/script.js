function crypto(password) {
    const step = 2;
    let arrPassword = [];
    for (let i = 0; i < password.length; i += step) {
        arrPassword.push(password.slice(i, i + step));
    }
    for (let i = 0; i < arrPassword.length; i++) {
        arrPassword[i] = arrPassword[i].split("").reverse().join("");
    }
    return arrPassword.join("");
}
let originalPassword = "пароль";

console.log(crypto(originalPassword));

function check(encryptedPassword, originalPassword) {
   const step = 2;
    let arrEncryptedPassword = [];
    for (let i = 0; i < encryptedPassword.length; i += step) {
        arrEncryptedPassword.push(encryptedPassword.slice(i, i + step));
    }
    for (let i = 0; i < arrEncryptedPassword.length; i++) {
        arrEncryptedPassword[i] = arrEncryptedPassword[i].split("").reverse().join("");
    }
    return arrEncryptedPassword.join("") === originalPassword;
   
}

console.log(check("апорьл", originalPassword));
