document.addEventListener("DOMContentLoaded", function () {
    // Theme aus dem data-theme-Attribut des <html>-Tags lesen
    const theme = document.documentElement.getAttribute("data-theme");

    // JSON-Datei für das Theme laden
    fetch(`../../themes/${theme}/theme-config.json`)
        .then(response => response.json())
        .then(data => applyTheme(data))
        .catch(error => console.error("Theme-Config konnte nicht geladen werden:", error));
});

function applyTheme(config) {
    // Setzt die Farben und andere Variablen aus theme-config.json für Light Mode
    document.documentElement.style.setProperty("--tech-primary", config.primaryColor);
    document.documentElement.style.setProperty("--tech-secondary", config.secondaryColor);
    document.documentElement.style.setProperty("--tech-gradient", `linear-gradient(45deg, ${config.primaryColor}, ${config.secondaryColor})`);
    document.documentElement.style.setProperty("--theme-bg", config.backgroundColor);
    document.documentElement.style.setProperty("--theme-text", config.textColor);

    // Wenn Dark Mode aktiviert ist, dann setze die Dark Mode Farben
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.style.setProperty("--theme-bg", config.darkMode.backgroundColor);
        document.documentElement.style.setProperty("--theme-text", config.darkMode.textColor);
    }
}
