let switchLanguage = prompt("Choose a language: en. English ru. Russian de. German");
switch (switchLanguage) {
    case "en":
        console.log("Hello!");
        break;
    case "ru":
        console.log("Привет!");
        break;
    case "de":
        console.log("Guten Tag!");
        break;
    default:
        console.log("Language not supported.");
}