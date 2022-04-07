import { Button } from "react-bootstrap";
import RrForm from "../components/RrForm";
import { Link } from "react-router-dom";

const AddRr = () => {
    return ( 
        
        <div>

        <h1> in addrr page</h1>
        <RrForm />

        <Button variant='danger' size="lg">
            <Link to="/">Cancel</Link>
        </Button>
       
        
        </div>

     );
}
 
export default AddRr;