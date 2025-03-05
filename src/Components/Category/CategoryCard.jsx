import React from "react"
import style from "./Category.module.css"
import { Link } from "react-router-dom"
function CategoryCard({ data }) {
  return (
    <div className={style.category}>
      <Link to={`/category/${data.category}`}>
        <span>{data.category}</span>
        <img src={data.imageLink} alt="" />
        <p>Shop Now</p>
      </Link>
    </div>
  )
}

export default CategoryCard