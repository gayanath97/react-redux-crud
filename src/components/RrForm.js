import { useState,useEffect } from "react";
import {useNavigate,useParams, Link } from "react-router-dom";
import RrsService from "../services/RrsService";
import { Button } from "react-bootstrap";
import { createRr } from "../state/actions";

import {useSelector,useDispatch } from 'react-redux'
import {bindActionCreators} from 'redux'
import  {actionCreators} from '../state/index';



const RrForm = () => {
    const [extensionNo,setextensionNo]=useState("")
    const [customer,setcustomer]=useState("")
    const [location,setlocation]=useState("")
    const [sta_tus,setsta_tus]=useState("")

    const navigate = useNavigate();
    const {id} = useParams();
    const account = useSelector((state)=>state.rr);
    const dispatch = useDispatch();
    const {createRr,updateRr,getRrById} = bindActionCreators(actionCreators,dispatch);


    


    
    const saveOrUpdateRr = (e)=>{
        e.preventDefault();
    
        const rr = {extensionNo, customer, location}
    if(id){
         dispatch(updateRr(id, rr))
         .then(()=>{
            console.log(rr);
            navigate("/");
         }        
         )
         .catch(
            (e)=>{console.log(e);}
         )
        
    }else{
         dispatch(createRr(rr))
         .then(()=>{
            console.log(rr);
            navigate("/");
         }
            
         )
         .catch(
            (e)=>{console.log(e);}
         )
    }


    }

    useEffect(() => {
       
            getRrById(id)
            .then(
                (response)=>{
                    console.log(response.data.payload[0]);
                    
                    setextensionNo(response.data.payload[0].extensionNo)
                    setcustomer(response.data.payload[0].customer)
                    setlocation(response.data.payload[0].location)
                    setsta_tus(response.data.payload[0].sta_tus)
                }
            )
            .catch(
                (error)=>{
                     console.log(error)
                }
            )

           
        
    }, [])



    const title = ()=>{
        if(id){
                return <h2 >Update Rr</h2>
        }else{
               return <h2>Add Rr</h2>
        }
    }


    return ( 



         <div>
            
            {title()}
                
             
            <form >

             <div>
                                 <label > ExtensionNo :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter extensionNo"
                                     name = "extensionNo"
                                     value = {extensionNo}
                                     onChange = {(e) => {setextensionNo(e.target.value)}}
                                 >
                                 </input>
             </div>
             <div>
                                 <label > Customer :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter customer"
                                     name = "customer"
                                     value = {customer}
                                     onChange = {(e) => {setcustomer(e.target.value)}}
                                 >
                                 </input>
             </div>
             <div>
                                 <label > Location :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter location"
                                     name = "location"
                                     value = {location}
                                     onChange = {(e) => {setlocation(e.target.value)}}
                                 >
                                 </input>
             </div>
             
             
             <br / >
             <br / >

                  
            
        
             <div>
             <Button onClick={saveOrUpdateRr} variant='warning' size="lg">Submit</Button>
             </div>
             <br />
            
             
                 
             </form>

             


         </div>

     );
}
 
export default RrForm;


