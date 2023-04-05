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
    foto: null,
  };
  console.log(userUpdate.id);
  const [foto, setFoto] = useState(null);
  const [value, setValue] = useState(userUpdate ? userUpdate : initialValues);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userUpdate.id) {
      updateUser(value);
      onHide();
    } else {
      createuser(value);
      onHide();
    }
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
          name="foto"
          id="foto"
          value={value.foto ? value.foto : ""}
          onChange={handleChange}
        />
      </Form.Group>
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
