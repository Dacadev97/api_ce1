const { crearGenero, editarGenero, eliminarGenero, obtenerGeneros } = require('../controllers/generoController');

test('Crear un nuevo género', async () => {
    const req = { body: { nombre: 'Acción', estado: true, descripcion: 'Películas de acción' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
    await crearGenero(req, res);
  
    expect(res.status).toHaveBeenCalledWith(201);
  });