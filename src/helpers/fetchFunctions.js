export const fetchProduct = async (id) => {
  if (!id) {
    throw new Error('ID não informado');
  }
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const data = await response.json();
  const handleId = data;
  return handleId;
};
fetchProduct('MLB1405519561');

export const fetchProductsList = async (search) => {
  if (!search) {
    throw new Error('Termo de busca não informado');
  }
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${search}`);
  const data = await response.json();
  const handleSearch = data.results;
  return handleSearch;
};
