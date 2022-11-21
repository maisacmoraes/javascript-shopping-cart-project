import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
    beforeEach(async () => {
      await fetchProduct('MLB1405519561');
    });
  
    it('fetchProduct é uma função', () => {
      expect(typeof fetchProduct).toBe('function')
    });
  
    it('fetch é chamado ao executar fetchProduct', async () => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  
    it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
      const endpoint = 'https://api.mercadolibre.com/items/MLB1405519561';
      expect(fetch).toHaveBeenCalledWith(endpoint);
    });
  
    it('Testando o retorno da função fetchProduct', async () => {
      const expectValue = await fetchProduct('MLB1405519561')
      expect(expectValue).toEqual(product);
    });
  
    test('Deve lançar erro "Termo de busca não informado" quando passar parâmetro vazio', async () => {
      const emptySeach = '';
      await expect(fetchProduct(emptySeach)).rejects.toThrow(
        new Error('ID não informado')
      );
    });
  });

