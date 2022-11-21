import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
// import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

// const handleProducts = document.querySelector('.products');

// const productList = async (products) => {
//   handleProducts.innerHTML = '';
//   const handleFetchProductsList = await fetchProductsList(products);
//   handleFetchProductsList.forEach((element) => {
//     const li = document.createElement(createProductElement(element));
//     handleProducts.appendChild(li);
//   });
// };

// productList('computador');
//   handleFetchProductsList.forEach((products) => { products[] element.appendChild(createProductElement(element))
// }
//      )}
//    const li = document.createElement(createProductElement(products));
//    li.textContent = element;
//   });

// product.appendChild('products');

// const animals = {};
// if (!animal) {
//   species.forEach((specie) => {
//     animals[specie.name] = specie.residents.length;
//   });
//   return animals;

//   const arr = [];
//   manager(managerId).forEach((element) => arr.push(`${element.firstName} ${element.lastName}`));
//   return arr;

//   const renderCoins = (coins) => {
//     coinsList.innerHTML = '';
//     coinsArray.forEach((coin) => {
//       const [coinName, value] = coin;
//       const li = document.createElement('li');
//       li.textContent = `${coinName} - ${value};`
//       coinsList.appendChild(li);
//     })
//   }
// depois você vai fazer um foreach na constante e iterar com cada elemento criando um elemento através da função createProductElement e não esquecer de 'afilhá-lo' ao elemento pai com a função appendChild().
// Não sei se te ajudo assim rs.

// Lembrete a tua função fetchProductList deve tá funcionando, ou seja ter cumprido o requisito 2. E a função createProductElement(), também já tá criada no arquivo shopFunctions.js. E a dica é que o parâmetro da função createProductElement() é justamente o iterável do result da tua fetch na funcão fetchProductList.

const loading = async () => {
  const elementoPai = document.body;
  const p = document.createElement('p');
  p.classList = 'loading';
  elementoPai.appendChild(p);

  if (await fetchProductsList('computador') !== 'undefined') {
    p.innerHTML = 'carregando...';
  } else {
    p.innerHTML = '';
  }
};
loading();
