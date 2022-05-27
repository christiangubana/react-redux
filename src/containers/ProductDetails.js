import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts, removeSelectedProduct } from "../redux/actions/productActions";

const ProductDetails = () => {
  const { productId } = useParams();
  const selectedProduct = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { image, title, price, category, description } = selectedProduct;

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
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [dispatch, productId]);
  console.log(selectedProduct);
  return (
    <div className="ui grid container">
      {Object.keys(selectedProduct).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            {/* <div className="ui vertical divider">AND</div> */}
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title}/>
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label" href={title}>${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
