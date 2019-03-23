// Products
const getProductIds = state => state.menu.ids;

const getProductsEntities = state => state.entities.products;

export const getProducts = state => {
  const ids = getProductIds(state);
  const entities = getProductsEntities(state);
  return ids.map(id => entities[id]);
};
export default getProducts;
