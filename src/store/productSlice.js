import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: 'products',
  initialState: {
    prodsList: [
      { id: 1, price: 1000, title: 'prod1', descr: 'descr 1', img: 'img1.jpg', publish: true, catalogs: 1 },
      { id: 2, price: 2000, title: 'prod2', descr: 'descr 2', img: 'img2.jpg', publish: true },
      { id: 3, price: 3000, title: 'prod3', descr: 'descr 3', img: 'img3.jpg', publish: true },
    ],
    cartProdsList: [],
  },
  reducers: {
    addProduct(state, action) {
      const product = action.payload.product;
      state.prodsList.push(product);
    },
    removeProduct(state, action) {
      const productIdToRemove = action.payload.productId;
      state.prodsList = state.prodsList.filter(product => product.id !== productIdToRemove);
    },
    addProductToCart(state, action) {
      const productIdToAdd = action.payload.productId;
      const productToAdd = state.prodsList.find(product => product.id === productIdToAdd);
      state.cartProdsList.push(productToAdd);
    },
    removeProductFromCart(state, action) {
      const productIdToRemove = action.payload.productId;
      state.cartProdsList = state.cartProdsList.filter(product => product.id !== productIdToRemove);
    },
  }
});

export const { addProduct, removeProduct, addProductToCart, removeProductFromCart } = productSlice.actions;
export const selectCartProducts = state => state.products.cartProdsList;
export default productSlice.reducer;
