import React, { useEffect, useState } from 'react'
import axios from "axios"
import style from "./Product.module.css"
import ProductCard from '../Product/ProductCard';

function Product() {
  const [products, setProducts] = useState();
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  return (
 
    <div className={style.product_contianer}>
      {
        products?.map((single_product, i) => {
          return <ProductCard key={i} data={single_product} />
        })
      }
    </div>
  )
}

export default Product