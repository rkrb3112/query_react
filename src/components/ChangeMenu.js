import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const ChangeMenu = () =>{
    const [newFood, setNewFood] = useState("");
    const {setFood} = useContext(AppContext);

    return <div>
        <input onChange={(event) =>{setNewFood(event.target.value);}}/>
        <button onClick={() => {setFood(newFood)}}>Change food</button>
    </div>
};