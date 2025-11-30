import request from 'supertest';
import app from '../../server.js';

describe('Pruebas funcionales del endpoint /tasks', () => {

    test('GET /tasks debe responder con un arreglo de tareas', async () => {
        const response = await request(app).get('/tasks');

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);

        // Validar estructura mínima
        if (response.body.length > 0) {
            expect(response.body[0]).toHaveProperty('id');
            expect(response.body[0]).toHaveProperty('title');
        }
    });

});
