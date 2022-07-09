import React from 'react'
import { Banner } from './Banner'
import ImgMediaCard from './Card'

import styled from 'styled-components'
import MultipleSelectCheckmarks from './Filter'
import BasicSelect from './Sort'
const HomeDiv = styled.div`

  .shoes{
    width: 90%;
   
      margin: auto;
      margin-top: 80px;
        display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 40px;
  }
  .filterAndsort{
    display: flex;
    justify-content: center;
    margin-top: 50px;
    gap: 50px;
  }
`



export const Home = () => {

  const data = [
    {
      "image": 
        "https://sslimages.shoppersstop.com/sys-master/images/hc9/ha3/26983567032350/FMPU38621202_BLACK.jpg_230Wx334H",
      "desc":
        "synthetic leather mid top lace up mens sport shoes - black"
      ,
      "price":
        "5999"
      ,
      "brand":
        "puma"
      ,
      "size": [
        "Size:",
        "7",
        ",8",
        ",9",
        ",10",
        ",11"
      ]
    },
    {
      "image": 
        "https://sslimages.shoppersstop.com/sys-master/images/h97/h38/26983628734494/FMPU38621201_WHITE.jpg_230Wx334H",
      "desc":
        "synthetic leather mid top lace up mens sport shoes - white"
      ,
      "price":
        "5999"
      ,
      "brand":
        "puma"
      ,
      "size": [
        "Size:",
        "7",
        ",9",
        ",10"
      ]
    },
    {
      "image": 
        "https://sslimages.shoppersstop.com/sys-master/images/h33/hff/27493365448734/FMJJ132253803_WHITE.jpg_230Wx334H",
      "desc":
        "polyester regular lace up mens sneakers - white"
      ,
      "price":
        "2449"
      ,
      "brand":
        "jack and jones"
      ,
      "size": [
        "Size:",
        "40",
        ",41",
        ",42",
        ",43",
        ",44",
        ",45"
      ]
    },
    {
      "image": 
        "https://sslimages.shoppersstop.com/sys-master/images/h66/hd4/27679875301406/LPSCDRGFS20136_BROWN.jpg_230Wx334H",
      "desc":
        "leather slipon mens formal shoes - brown"
      ,
      "price":
        "1999"
      ,
      "brand":
        "louis philippe"
      ,
      "size": [
        "Size:",
        "6",
        ",7",
        ",8",
        ",9",
        ",10"
      ]
    },
    {
      "image": 
        "https://sslimages.shoppersstop.com/sys-master/images/h18/h86/27493327044638/FMJJ142999901_BLACK.jpg_230Wx334H",
      "desc":
        "polyurethane regular slipon mens slides - black"
      ,
      "price":
        "1189"
      ,
      "brand":
        "jack and jones"
      ,
      "size": [
        "Size:",
        "40",
        ",41",
        ",42"
      ]
    },]
  return (
    <HomeDiv>
      
      <Banner />
      <div className='filterAndsort'>
      <MultipleSelectCheckmarks />

      <BasicSelect />
      </div>
      
      <div className='shoes'>
      {data.map((e)=>{
        return <ImgMediaCard  image={e.image} brand={e.brand} price={e.price} description={e.desc} key={e._id}/>
      })}
      </div>
    

      
    </HomeDiv>
  )
}
