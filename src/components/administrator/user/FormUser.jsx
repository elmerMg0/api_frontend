import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function FormUser({
  onHide,
  createuser,
  userUpdate,
  setUserUpdate,
  updateUser,
}) {
  const initialValues = {
    nombres: "",
    username: "",
    password: "",
    tipo: "",
    url_image: "",
  };
  console.log(userUpdate.id);
  const [selectedImage, setSelectedImage] = useState(null);
  const [value, setValue] = useState(userUpdate ? userUpdate : initialValues);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeImage = (event) => {
    setValue({
      ...value, 
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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userUpdate.id) {
      updateUser(value,selectedImage);
      onHide();
    } else {
      createuser(value,selectedImage);
      onHide();
    }
    setUserUpdate({});
    setSelectedImage(null)
  };

  const handleCancel = () => {
    setUserUpdate({});
    onHide();
  };

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="nombres">Nombre Completo</Form.Label>
        <Form.Control
          type="text"
          id="nombres"
          name="nombres"
          value={value.nombres ? value.nombres : ""}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Nombre de Usuario</Form.Label>
        <Form.Control
          type="text"
          id="username"
          name="username"
          value={value.username ? value.username : ""}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contrasena</Form.Label>
        <Form.Control
          type="password"
          id="password"
          name="password"
          value={value.password ? value.password : ""}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tipo</Form.Label>
        <Form.Select
          id="tipo"
          name="tipo"
          value={value.tipo ? value.tipo : ""}
          onChange={handleChange}
        >
          <option>Administrador</option>
          <option value="administrador">Administrador</option>
          <option value="mesero">Mesero</option>
          <option value="cajero">Cajero</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Foto</Form.Label>
        <Form.Control
          className="form-control-file"
          type="file"
          name='url_image'
          id="foto"
          value={value.foto ? value.foto : ""}
          accept='.jpg,.png,jpng'
          onChange={handleChangeImage}
        />
      </Form.Group>
      {
          selectedImage ?
          <div className="modal-category-image">
            <img src={selectedImage} alt="preview"  />
          </div>
            :
            <>
              {
                value.url_image && value.url_image.length > 0 &&
                <div className="modal-category-image">
                  <img src={`http://localhost:8080/upload/${value.url_image}`} alt="a" />
                </div>
                
              }
              </> 
            

         }
      <hr />
      <Form.Group className="mb-3 d-flex justify-content-evenly">
        <button className="btn-main-red" onClick={handleCancel}>
          Cancelar
        </button>
        <button className="btn-main" onClick={handleSubmit}>
          Confirmar
        </button>
      </Form.Group>
    </>
  );
}

export default FormUser;
