import React from 'react'
import {catagoryinfo} from "../Catagory/Catagoryinfo";
import CatagoryCard from '../Catagory/CatagoryCard';
import style from "./Catagory.module.css";
function Catagory() {
  return (
    <section className={style.catagory_container}>
      {catagoryinfo?.map((singleproduct, i) => {
        return <CatagoryCard key={i} data={singleproduct} />;
      })}
    </section>
  );
}

export default Catagory