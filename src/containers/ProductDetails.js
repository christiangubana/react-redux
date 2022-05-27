import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../redux/actions/productActions";

const ProductDetails = () => {
  const { productId } = useParams();
  const selectedProduct = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductDetails = async () => {
      const res = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
          console.log("Error", err);
        });
      dispatch(selectedProducts(res.data));
    };
    if (productId && productId !== "") fetchProductDetails();
  }, [dispatch, productId]);
  console.log(selectedProduct);
  return (
    <div>
      <h1>Product Details</h1>
    </div>
  );
};

export default ProductDetails;
