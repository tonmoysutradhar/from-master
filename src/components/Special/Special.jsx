import { useContext } from "react";
import { AssertContext } from "../Grandpa/Grandpa";


const Special = ({asset}) => {

    const gift = useContext(AssertContext) ;

    return (
        <div>
            <h2>Special</h2>
            <p>has: {asset}</p>
            <p>has: {gift}</p>
        </div>
    );
};

export default Special;