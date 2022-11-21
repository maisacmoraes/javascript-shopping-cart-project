import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  beforeEach(async () => {
    await fetchProductsList('computador');
  });

  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function')
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toHaveBeenCalledWith(endpoint);
    
  });

  it('Testando o retorno da função fetchProductsList', async () => {
    const expectValue = await fetchProductsList('computador')
    expect(expectValue).toEqual(computadorSearch);
  });

  it('Testando o retorno da função fetchProductsList', async () => {
    const expectValue = await fetchProductsList('computador')
    expect(expectValue).toEqual(computadorSearch);
  });

  test('Deve lançar erro "Termo de busca não informado" quando passar parâmetro vazio', async () => {
    const emptySeach = '';
  
    await expect(fetchProductsList(emptySeach)).rejects.toThrow(
      new Error('Termo de busca não informado')
    );
  });
});
