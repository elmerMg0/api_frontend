import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function FormUser({ value, updateCompany,setValue }) {
  const initialValues = {
    id:"",
    nombre: "",
    email: "",
    phone: "",
    celular: "",
    nit: "",
  };
  //console.log(userUpdate.id);
  //const [value, setValue] = useState(company);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCompany(value);

  };
  //console.log(company)
  useEffect(() => {
  }, [value]);

  return (
    <div style={{width:"700px"}}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="nombre">Nombre Company</Form.Label>
        <Form.Control
          type="text"
          id="nombre"
          name="nombre"
          value={value.nombre}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          id="email"
          name="email"
          value={value.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="number"
          id="phone"
          name="phone"
          value={value.phone}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Celular</Form.Label>
        <Form.Control
          type="number"
          id="phone"
          name="phone"
          value={value.celular}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>NIT</Form.Label>
        <Form.Control
          type="number"
          id="nit"
          name="nit"
          value={value.nit}
          onChange={handleChange}
        />
      </Form.Group>

      <hr />
      <Form.Group className="mb-3 d-flex justify-content-evenly">
        <button className="btn-main" onClick={handleSubmit}>
          Actualizar
        </button>
      </Form.Group>
    </div>
  );
}

export default FormUser;
