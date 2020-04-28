import React,{useState,useEffect} from 'react'
import {Modal,Button,Form} from 'react-bootstrap';
import axios from 'axios';

function Example({edit,setEditModal,instanceId,setChanged,changed}) {

    const [state,setState]=useState();

    useEffect(()=>{
        console.log(instanceId);
    },[instanceId])

    const handleSubmit=()=>{
        if(state){
            if(instanceId!==undefined){
                axios.post(`http://localhost:8080/api/${state}/${instanceId}`).then(res=>{
                  
                    setChanged(!changed);
                    setEditModal(false);
                })
            }
        }else{
            alert("Por Favor Selecione uma ação");

        }
    }
  
    return (
      <>
        <Modal
          size="lg"
          show={edit}
          onHide={() => setEditModal(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Instance
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Selecione a ação desejada</Form.Label>
                    <Form.Control as="select" onChange={(e)=>{setState(e.target.value)}}>
                        <option value=""></option>
                        <option value="stop">Stop</option>
                        <option value="start">Start</option>
                        <option value="terminate">Terminate</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" onClick={()=>handleSubmit()}>Salvar</Button>
            </Form>
              
            </Modal.Body>
        </Modal>
      </>
    );
  }
  
export default Example;