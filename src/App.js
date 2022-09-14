import { useState } from "react";
import Header from "../src/components/Header.jsx";
import { products as productList } from "./data/products.js";
import ProductContainer from "./components/ProductContainer.jsx";

function App() {
  // Recibo todo el dataset como un estado:
  const [products, setProducts] = useState(productList);

  // Esta función se ejecutará al clicar el icono de voto para actualizar el dataset.
  // El ID del icono votado servirá para identificarlo
  function updateProducts(iconId) {
    // Recorro todos los productos con map, pero si el id coincide con el icono, lo cambio
    let updatedProducts = products.map((elem) => {
      if (elem.id === iconId) {
        elem.votes = elem.votes + 1;
        return elem;
      } else {
        return elem;
      }
    });

    // Reordeno el array en función de los votos
    reorderList(updatedProducts, "votes");

    // Actualizo el dataset
    setProducts(updatedProducts);
  }

  function reorderList(list, orderCriteria) {
    list.sort((elementA, elementB) => {
      return elementB[orderCriteria] - elementA[orderCriteria];
    });
  }

  // Después de haber hecho los cambios en el dataset (products) se lo paso a ProductContainer para que recorra ese array en vez del dataset original.
  // También le paso la propiedad onProductClick para que éste a su vez se la pase a Product (prop drilling)
  return (
    <div className="App">
      <Header style="danger" />
      <ProductContainer
        updatedProducts={products}
        onProductClick={updateProducts}
      />
    </div>
  );
}

export default App;
