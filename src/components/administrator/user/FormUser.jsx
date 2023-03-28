import { useState } from 'react';
import {Form} from 'react-bootstrap';

function FormUser({onHide, createuser, valuerow, updateuser}) {
    const initialValues = {
        nombres:"",
        username:"",
        password:"",
        tipo:"",
        foto:null
        
    }
    const [foto, setFoto] = useState(null);
    const [value,setValue] = useState(!valuerow ? initialValues:valuerow)

    const handleChange=(e) =>{
        setValue({
            ...value, [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos del formulario
        // a un servidor o procesarlos de otra manera
        console.log(valuerow)
        if(valuerow){
            updateuser(value,valuerow.id)
        }else{
            createuser(value)
        }
        
        console.log(value);
    };
    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="nombres">Nombre Completo</Form.Label>
                <Form.Control
                    type="text"            
                    id="nombres"
                    name="nombres"
                    value={value.nombres?value.nombres:""}
                    onChange={handleChange}
                    
                />
          
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Nombre de Usuario</Form.Label>
                <Form.Control
                    type="text"            
                    id="username"
                    name="username"
                    value={value.username?value.username:""}
                    onChange={handleChange}
                    
                />
          
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Contrasena</Form.Label>
                <Form.Control
                    type="password"            
                    id="password"
                    name="password"
                    value={value.password? value.password:""}
                    onChange={handleChange}
                    
                />
          
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Tipo</Form.Label>
                <Form.Select 
                    id="tipo"
                    name="tipo"
                    value={value.tipo?value.tipo:""}
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
                    value={value.foto?value.foto:""}
                    onChange={handleChange}
                    
                />
            </Form.Group>
            <hr/>
            <Form.Group className="mb-3 d-flex justify-content-evenly">
                  <button className="btn-danger" onClick={onHide}>Cancelar</button>
                  <button className="btn-main" onClick={handleSubmit} >Confirmar</button>
            </Form.Group>             
             
           
            
        </>
    );
}

export default FormUser;