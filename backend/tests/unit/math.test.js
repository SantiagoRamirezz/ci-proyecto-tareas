describe('Pruebas unitarias básicas', () => {
    function suma(a, b) {
        return a + b;
    }

    function esTextoValido(texto) {
        return typeof texto === 'string' && texto.length > 0;
    }

    test('La función suma debe sumar correctamente', () => {
        expect(suma(2, 3)).toBe(5);
    });

    test('La función esTextoValido debe validar correctamente', () => {
        expect(esTextoValido('Hola')).toBe(true);
        expect(esTextoValido('')).toBe(false);
        expect(esTextoValido(123)).toBe(false);
    });
});
