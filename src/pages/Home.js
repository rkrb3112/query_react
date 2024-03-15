import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () =>{
    
    const {food} = useContext(AppContext);

    return <h1>Home page: {food}</h1>
};