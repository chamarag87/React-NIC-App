import React, {useState}  from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import lankaNIC from "lanka-nic";
import 'bootstrap/dist/css/bootstrap.min.css';



function App(){

    const [nic, setNic] = useState("");
    const[dob, setDob]= useState("");
    const[gender, setGender]= useState("");
    // const[data, setData]= useState("");

    const search=()=>{
        let {dateOfBirth, gender}= lankaNIC.getInfoFromNIC(nic);
        setDob(new Date(dateOfBirth).toISOString().slice(0, 10));
        setGender(gender);
    }
    return(



        <divv>
            <Form>
                <Form.Group className="w-25 border rounded m-5 p-5 mt-5 bg-light" controlId="NIC NO">
                    <Form.Label>NIC NO</Form.Label>
                    <Form.Control type="nic no" placeholder="Enter the NIC NO" onChange={(val)=> setNic(val.target.value)}/>
                    <br/>
                    <div>
                        <Button className="Button1" variant="success" onClick={()=>search()}>
                            Search</Button>
                    </div>

                    <br/>
                    <br/>
                    <Form.Label>NIC NO:{nic} </Form.Label>
                    <br/>
                    <br/>
                    <Form.Label>DOB:{dob} </Form.Label>
                    <br/>
                    <br/>
                    <Form.Label>Gender:{gender} </Form.Label>
                </Form.Group>
                <br/>
            </Form>
        </divv>








            );
}
export default App;
