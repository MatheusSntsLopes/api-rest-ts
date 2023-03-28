import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';




describe('Cidades - Delete', () => {

  it('Deletar registro', async () => {

    const res1 = await testServer.post('/cidades').send({nome: 'Tobias Barreto'});

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resApagada = await testServer.get(`/cidades/${res1.body}`).send();

    expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });

  it('Tenta criar um registro com nome pequeno', async () => {

    const res1 = await await testServer.get('/cidades/9999').send();

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');

  });

});
