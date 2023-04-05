import React from 'react'
import { Modal } from 'react-bootstrap'
import FormUser from './FormUser'

export default function ModalCreateUser({modalShow}) {
    
  return (
      <>
          <Modal
              modalShow
              size="lg-sm"
              aria-labelledby="contained-modal-title-vcenter"
              centered
          >
              <Modal.Header  closeButton>
                  <Modal.Title  id="contained-modal-title-vcenter">
                      Crear Usuario
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body className='ms-3 me-3'>
                  <FormUser
                     
                  />
              </Modal.Body>

          </Modal>
      </>
  )
}
