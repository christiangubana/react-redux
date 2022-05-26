import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
          console.log("Err", err);
        });
      dispatch(setProducts(response.data));
    };
    fetchProducts();
  }, [dispatch]);
  console.log(products);
  return (
    <div className="ui grid container listing">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
