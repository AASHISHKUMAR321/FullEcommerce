import React from 'react'
import styled from 'styled-components'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import logo from '../../../images/logo.png'


const NavDiv = styled.div`

    
    display: grid;
    grid-template-columns: repeat(3,1fr);
    /* grid-template-rows: repeat(3,1fr); */
    /* border: 1px solid green; */
    div{
        /* border: 1px solid red; */
  
    }
   .search{
       width: 100%;
       margin-top: 10px;
       height: 30px;
       display: grid;
       grid-template-columns: 70% 30%;
   }
   .search>input{
       
    height: 30px;
    outline: none;
  
   }
   .link ul{
       display: flex;
        list-style: none;
        cursor: pointer;
   }
   ul li{
       margin-top:10px;
       margin-left: 30px;
   }
   button{
       background-color: black;
       color: white;
       border: 0px;
       margin-left: -10px;
       cursor: pointer;
     
   }
   
   @media only screen and (min-width: 0px) and (max-width: 375px) {
    ul li{
       
       margin-left: 10px;
   }
   }
    @media only screen and (min-width: 0px) and (max-width: 768px){
        grid-template-columns: repeat(2,1fr);
        .search{
            width: 90%;
           
            margin-top: 70px;
            margin-left: 20px;
            position: absolute;
        background-color: green;
       
      
        .link{
        
            position: relative;
        }
        .search{
       width: 90%;
       display: grid;
       grid-template-columns: repeat(70%,30%);
   }
    }

       
    }
    
`

export const Navbar = () => {
  return (
    <NavDiv>

         <div>
             <img src={logo} alt="" width="100px" height="60px" />
         </div>
         <div className='search'>
             <input type="text"   placeholder=' Search here' /><button>search</button>
         </div>
         <div className='link'>
             <ul>
                 <li>Register</li>
                 <li>Login</li>
                 <li><ShoppingBagIcon /></li>
             </ul>
         </div>
        
    </NavDiv>
  )
}
