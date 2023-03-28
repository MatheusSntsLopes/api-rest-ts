
import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';




describe('Cidades - Update', () => {

  it('Atualizar registro', async () => {

    const res1 = await testServer.post('/cidades').send({nome: 'Tobias Barreto'});

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resApagada = await testServer.put(`/cidades/${res1.body}`).send({nome: 'Lagarto'});

    expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });

  it('Tenta atualizar um registro com nome pequeno', async () => {
    const res1 =  await testServer.put('/cidades/99999').send({nome: 'Aracaju'});

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });

});

