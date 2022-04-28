const GETAPI = "https://api-test.innoloft.com/product/6781/";
const PUTAPI = "https://api-test.innoloft.com/product/6781/";

// Actions
const LOAD_PRODUCTS = "LOAD_PRODUCTS";

// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return action.state;
    default:
      return state;
  }
}

// Action Creators
export const loadProducts = () => async (dispatch) => {
  const response = await fetch(GETAPI);
  const state = await response.json();
  dispatch({ type: LOAD_PRODUCTS, state });
};

export const editProduct = (product) => async (dispatch) => {
  await fetch(PUTAPI, {
    method: "PUT",
    body: new URLSearchParams({
      description: product.description,
      categories: product.category,
      attribute: product.attribute,
      business_model: product.businessModels,
    }),
  });
  const response = await fetch(PUTAPI);
  const state = await response.json();
  dispatch({ type: LOAD_PRODUCTS, state });
};
