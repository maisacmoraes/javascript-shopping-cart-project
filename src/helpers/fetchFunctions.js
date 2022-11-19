export const fetchProduct = async () => {};

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

fetchProductsList('computador');
