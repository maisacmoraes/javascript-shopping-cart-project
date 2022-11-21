export const fetchProduct = async (id) => {
  if (!id) {
    throw new Error('ID não informado');
  }

  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const data = await response.json();
    const handleId = data;
    return handleId;
  } catch (error) {
    return error.message;
  }
};
fetchProduct('MLB1405519561');

// A função deve obrigatoriamente receber um parâmetro com o id que será usado na busca, caso contrario deve retornar um erro com a mensagem: 'ID não informado';
// Utilize o endpoint https://api.mercadolibre.com/items/$ProductID
// $ProductID representa o id do produto a ser buscado;
// Por exemplo, se o id do produto for MLB1405519561, o retorno do endpoint será algo no formato:

export const fetchProductsList = async (search) => {
  if (!search) {
    throw new Error('Termo de busca não informado');
  }

  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${search}`);
    const data = await response.json();
    const handleSearch = data.results;
    return handleSearch;
  } catch (error) {
    return error.message;
  }
};
