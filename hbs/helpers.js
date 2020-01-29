const hbs = require('hbs');

// Helpers permite registrar la palabra clave para asi poder hacer el llmado dentro de un archivo hbs.
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
//hacemos el registro de la palabra capitalizar para luego hacer el llamdo del mismo en un archivo hbs
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() +
            palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});