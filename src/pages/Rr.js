
import RrDetails from "../components/RrDetails";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Rr = () => {
    return  ( 
        <div>
            <h1>in rr page</h1>
           <Link to="/addrr"> <Button >Add RR</Button> </Link>
        <RrDetails />
        </div>
     );
}
 
export default Rr;