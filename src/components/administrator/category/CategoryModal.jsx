import React, { useState, useEffect} from "react";
import { Modal} from "react-bootstrap";
import { Form, InputGroup, ModalTitle, Button } from "react-bootstrap";

const initialState = {
  nombre:'',
  descripcion: '',
  url_image: ''
}

const CategoryModal = ({ show, setShow, create, categoryToEdit, setCategoryToEdit ,updateCategory}) => {

  const [category, setcategory] = useState(initialState)
  const [selectedImage, setSelectedImage] = useState(null);


  useEffect ( ( ) => {
    console.log(categoryToEdit)
    if(categoryToEdit && Object.keys(categoryToEdit).length !== 0){
      setcategory(categoryToEdit) 
    }else{
      setcategory(initialState)
    }
    console.log(category)
  },[show])

  const handleConfirm = () => {
    setShow(false);
    if( !category.id ){
      create(category, selectedImage);
    }else{
      updateCategory(category, selectedImage);
    }
    //create(category);
    setCategoryToEdit({})
    setSelectedImage(null)
  }
  const handleOnChange = (e) => {
    setcategory({
      ...category, 
      [e.target.name]:e.target.value
    })
  }

  const handleFileChange = (e) => {
    setcategory({
      ...category, 
      [e.target.name]:e.target.files[0]
    })
  }

  const handleCancel = () => {
    setShow(false)
    setCategoryToEdit({})
  }

  const handleImageChange = (event) => {
    setcategory({
      ...category, 
      [event.target.name]:event.target.files[0]
    })
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  
  return (
    <Modal show={show} size="md" centered backdrop>
      <Modal.Header>
        <Modal.Title>
          <h3>Crear nueva categoria</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <InputGroup className="mb-3">
          <InputGroup.Text>Nombre</InputGroup.Text>
          <Form.Control 
            placeholder="Piques"
            type="text"
            onChange={handleOnChange}
            name='nombre'
            value={category.nombre}
            required
          />
        </InputGroup>
 
        <InputGroup className="mb-3">
          <InputGroup.Text>Descripcion</InputGroup.Text>
          <Form.Control 
            placeholder="varidad de piques..."
            type="text"
            onChange={handleOnChange}
            name='descripcion'
            value={category.descripcion}
          />
        </InputGroup>
        <InputGroup className="mb-3">
      
          <Form.Control 
            placeholder="pique.jpg"
            type="file"
            onChange={handleImageChange}
            name='url_image'
           /*  value={category.url_image} */
            accept='.jpg,.png,jpng'
          />
        </InputGroup>
        {
          selectedImage ?
          <div className="modal-category-image">
            <img src={selectedImage} alt="preview"  />
          </div>
            :
            <>
              {
                category.url_image && category.url_image.length > 0 &&
                <div className="modal-category-image">
                  <img src={`http://localhost:8080/upload/${category.url_image}`} alt="a" />
                </div>
                
              }
              </> 
            

         }
       {/*   {selectedImage && (
            
          )}
 */}

      </Modal.Body>
      <Modal.Footer >
        <button onClick={()=> handleCancel()} className='btn-main-red'>Cancelar</button>
        <button onClick={handleConfirm} className="btn-main">Confirmar</button>
      </Modal.Footer>
    </Modal>
  );
};

export default CategoryModal;
