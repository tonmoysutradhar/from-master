import { useContext } from "react";
import { AssertContext } from "../Grandpa/Grandpa";


const Friend = () => {
    const gift = useContext(AssertContext)
    return (
        <div>
            <h2>Friend</h2>
            <p>has: {gift}</p>
        </div>
    );
};

export default Friend;