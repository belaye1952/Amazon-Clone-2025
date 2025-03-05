import React from 'react'
import {categoryinfo} from "./Categoryinfo";
import CategoryCard from './CategoryCard';
import style from "./Category.module.css";
function Category() {
  return (
    <section className={style.category_container}>
      {categoryinfo?.map((singleproduct, i) => {
        return <CategoryCard key={i} data={singleproduct} />;
      })}
    </section>
  );
}

export default Category