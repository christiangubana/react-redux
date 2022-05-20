import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  product: [{
    id: 1,
    title: 'Christian',
    category: 'Programmer'
  }],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return state;

    default:
      return state;
  }
};
