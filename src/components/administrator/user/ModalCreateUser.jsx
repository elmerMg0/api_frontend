import React from 'react'
import { Modal } from 'react-bootstrap'
import FormUser from './FormUser'

export default function ModalCreateUser(props) {
    
  return (
      <>
          <Modal
              {...props}
              size="lg-sm"
              aria-labelledby="contained-modal-title-vcenter"
              centered
          >
              <Modal.Header >
                  <Modal.Title  id = "contained-modal-title-vcenter">
                      Crear Usuario
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body className='ms-3 me-3'>
                  <FormUser
                     onHide = {props.onHide}
                     createuser = {props.createuser}
                     userUpdate = {props.userUpdate}
                     setUserUpdate = {props.setUserUpdate}
                     updateUser = {props.updateUser}
                     
                  />
              </Modal.Body>

          </Modal>
      </>
  )
}
