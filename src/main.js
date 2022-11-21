import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const loading = async () => {
  const elementoPai = document.body;
  const p = document.createElement('p');
  p.classList = 'loading';
  elementoPai.appendChild(p);
  p.innerHTML = 'carregando...';
};

const handleProducts = document.querySelector('.products');

const productList = async (products) => {
  handleProducts.innerHTML = '';
  const handleFetchProductsList = await fetchProductsList(products);
  handleFetchProductsList.forEach((element) => {
    const li = createProductElement(element);
    handleProducts.appendChild(li);
  });
};
loading();

try {
  await productList('computador');
} catch (error) {
  const fatherElement = document.body;
  const paragraph = document.createElement('p'); paragraph.classList = 'error';
  fatherElement.appendChild(paragraph);
  paragraph.innerHTML = ('Algum erro ocorreu, recarregue a página e tente novamente');
}

const removeLoading = document.querySelector('.loading');
removeLoading.remove();
