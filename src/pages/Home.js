import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {

    const { data: catData, isLoading, isError, refetch } = useQuery({queryKey:["cat"], queryFn: () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    }});

    if(isError){
        return <h1>I am sorry</h1>
    }

    if(isLoading){
        return <h1>Loading...</h1>
    }

    // const { food } = useContext(AppContext);

    return (
        <h1>
            {/* Home page: {food} */}
            <p>{catData?.fact}</p>
            <button onClick={refetch}>Update </button>
        </h1>
    )
};