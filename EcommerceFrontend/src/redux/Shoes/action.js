export const GETSHOES = "GETSHOES";
import axios from "axios";

export const addShoes = (data) => {
    return {
        type: GETSHOES,
        payload: data,
    };
};

export const getshoes = () => async(dispatch) => {
    const data = await axios.get("https://ak-ecommerce-app.herokuapp.com/shoes");
    dispatch(addShoes(data.data));
};