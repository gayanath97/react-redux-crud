import { Link} from "react-router-dom";
import {useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { useNavigate } from "react-router-dom";



import {useSelector,useDispatch } from 'react-redux'
import {bindActionCreators} from 'redux'
import  {actionCreators} from '../state/index';

const RrDetails = () => {

 const navigate = useNavigate();

 
 const account = useSelector((state)=>state.rr);
 const dispatch = useDispatch();
 const {createRr,updateRr,retrieveRrs,deleteRr,getRrById} = bindActionCreators(actionCreators,dispatch);
 const [rrs, setrrs] = useState([])
  
 useEffect(() => {
      retrieve_Rrs();
 }, []);

const retrieve_Rrs = () => {
    
    retrieveRrs()
    .then(()=>{
      setrrs(account.payload[0]);
    })
    .catch(()=>{ 
        console.log("error");})

  };

    const removeRr = (id) => {
          dispatch(deleteRr(id))
          
          .then(() => {
            setrrs(account.payload[0]);
            navigate("/");
          })
          .catch(e => {
            console.log(e);
          });
      };
      const update_Rr = (id) => {
        dispatch(updateRr(id))
        
        .then(() => {
          setrrs(account.payload[0]);
          navigate("/");
        })
        .catch(e => {
          console.log(e);
        });
    };

    

    return ( 

      <div>
      
      
      <h1>rr details</h1>
      
        
        <Table striped borderd hover variant="light">
            <thead>
                <th>Rr Id</th>
                <th>Rr ExtensionNo</th>
                <th>Rr Customer</th>
                <th>Rr Location</th>
                <th>Rr Sta_tus</th>
                <th>Actions</th>
            </thead>
            <tbody>
             {   
                  
                    rrs.map(

                        rr =>
                        
                        <tr key={rr.id}>
                               <td>{rr.id}</td>
                               <td>{rr.extensionNo}</td>
                               <td>{rr.customer}</td>
                               <td>{rr.location}</td>
                               <td>{rr.sta_tus}</td>
                               <td>
                               {/* <buttton> <Link to={`/edit-rr/${rr.id}`} >Update</Link></buttton>  */}
                               <Button onClick = {()=>{update_Rr(rr.id)}}
                               variant="warning"> <Link to={`/edit-rr/${rr.id}`} >Update</Link></Button>
                               <Button  onClick = {()=>{removeRr(rr.id)}}
                             style = {{marginLeft:"15px"}} variant="danger"> Delete</Button>
                                    

                               </td>
                        </tr>

                    )
             }       
            </tbody>
        </Table>

              
               
           
           
       </div>
      

     );
}
 
export default RrDetails;