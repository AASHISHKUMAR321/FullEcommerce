import React from "react";
import { Banner } from "./Banner";
import ImgMediaCard from "./Card";

import styled from "styled-components";
import MultipleSelectCheckmarks from "./Filter";
import BasicSelect from "./Sort";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getshoes } from "../redux/Shoes/action";
const HomeDiv = styled.div`
  .shoes {
    width: 90%;

    margin: auto;
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
  .filterAndsort {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    gap: 50px;
  }
`;

export const Home = () => {
  const dispatch = useDispatch();
  const shoes = useSelector((store) => store.shoes.shoes);
  useEffect(() => {
    dispatch(getshoes());
  }, []);

  console.log(shoes);

  return (
    <HomeDiv>
      <Banner />
      <div className="filterAndsort">
        <MultipleSelectCheckmarks />

        <BasicSelect />
      </div>

      <div className="shoes">
        {shoes?.map((e) => {
          return (
            <ImgMediaCard
              image={e.image}
              brand={e.brand}
              price={e.price}
              description={e.desc}
              key={e._id}
            />
          );
        })}
      </div>
    </HomeDiv>
  );
};
