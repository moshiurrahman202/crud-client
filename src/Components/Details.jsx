
import { useLoaderData } from "react-router";


const Details = () => {
    const data = useLoaderData()
    console.log("this is from details => ",data);
    
    return (
        <div>
            <h1>This is details components</h1>
        </div>
    );
};

export default Details;