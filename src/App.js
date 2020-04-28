import React,{useState,useEffect} from 'react';
import "./assets/styles.css"
import {Table,Container,Button} from 'react-bootstrap';
import axios from 'axios'
import Example from './components/EditInstance';
import {pencil} from 'react-icons-kit/fa/pencil'
import {Icon} from 'react-icons-kit'
import Nav from './components/NavBar';
import logo from './assets/amazon.png'

const App=()=>{

  const [instances,setInstances]=useState([]);
  const [edit, setEditModal] = useState(false);
  const [instan,setInstan] = useState();
  const [changed,setChanged] = useState(false);

  useEffect(()=>{
    axios.get("http://localhost:8080/api/instances").then(res=>{
      setInstances(res.data);
    })

  },[changed]);

  const handleClick=(instanceID)=>{
    console.log(instanceID);
    setInstan(instanceID);
    setEditModal(true);
  }

  const handleSubmit=()=>{
    axios.post(`http://localhost:8080/api/create`).then(res=>{
      console.log(res);            
      setChanged(!changed);
      setEditModal(false);
  })
  }

  return (
    <>
    <Nav/>
    <div className="header-amazon">
      <img src={logo} height={100}/>
    </div>
    <Container>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>instance_id</th>
          <th>image_id</th>
          <th>state</th>
          <th>IP Publico</th>
          <th>IP Privado</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {instances.map(instance=>{
          return(
            <tr>
              <td>{instance.instanceId}</td>
              <td>{instance.imageId}</td>
              <td className={`${instance.state.name}`}>{instance.state.name}</td>
              <td>{instance.publicIpAddress}</td>
              <td>{instance.privateIpAddress}</td>
              <td onClick={() =>handleClick(instance.instanceId)} className="btn-icon"><Icon size={25} icon={pencil} /></td>
            </tr>
          )
        })}
         
      </tbody>
    </Table>
    <Button variant="primary" onClick={()=>handleSubmit()}>Criar Instancia</Button>
    </Container>

      <Example edit={edit} setEditModal={setEditModal} instanceId={instan} setChanged={setChanged} changed={changed}/>

    </>
  );
}

export default App;
