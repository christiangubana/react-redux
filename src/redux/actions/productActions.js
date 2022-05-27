import { ActionTypes } from "../constants/actionTypes";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (selectedProduct) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: selectedProduct,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
