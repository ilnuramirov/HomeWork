let switchLanguage = prompt("Choose a language: en. English ru. Russian de. German");
switch (switchLanguage) {
    case "en":
        console.log("You have selected English.");
        break;
    case "ru":
        console.log("Вы выбрали русский.");
        break;
    case "de":
        console.log("Guten Tag");
        break;
    default:
        console.log("Language not supported.");
}