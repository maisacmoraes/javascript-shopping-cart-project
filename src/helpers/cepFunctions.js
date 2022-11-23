export const getAddress = async (cep) => {
  try {
    const promise1 = fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
    const promise2 = fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);
    const promises = [promise1, promise2];
    const response = await Promise.any(promises);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const searchCep = async (cep) => {
  const cartAdress = document.querySelector('.cart__address');
  const address = await getAddress(cep);
  if (address.state) {
    const apiRoad = address.address || address.street;
    const apiDistrict = address.district || address.neighborhood;
    const apiCity = address.city;
    const apiState = address.state;
    cartAdress.innerHTML = `${apiRoad} - ${apiDistrict} - ${apiCity} - ${apiState}`;
  } else {
    cartAdress.innerHTML = 'CEP não encontrado';
  }
};
