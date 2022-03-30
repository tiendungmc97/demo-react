import React from 'react';
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody,Input, ModalFooter } from 'reactstrap';
function ModalExample (props) {
  const [state,setState] = useState({
    modal: false
  })
const [a,setA] = useState('')

 const  toggle  =() =>  {
    setState({
      modal: !state.modal
    });
  }
 const  handleInputChange =  () =>  {
      props.handleUpdate(a)
      toggle()
      
  }
  const handleChange = (e) => {
    setA(e.target.value)
  }
    return (
      <div>
        <Button color="danger" onClick={toggle}>{props.buttonLabel}Edit</Button>
        <Modal isOpen={state.modal} toggle={toggle} className={props.className}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <Input onChange={handleChange} value={a === '' ? props.value : a } />
          <ModalFooter>
            <Button color="primary" onClick={handleInputChange} >Save</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }


export default ModalExample;