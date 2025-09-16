let switchLanguage = prompt("Choose a language: en. English ru. Russian ara. Arabic");
switch (switchLanguage) {
    case "en":
        alert("You have selected English.");
        break;
    case "ru":
        alert("Вы выбрали русский.");
        break;
    case "ara":
        alert("لقد اخترت العربية.");
        break;
    default:
        alert("Language not supported.");
}