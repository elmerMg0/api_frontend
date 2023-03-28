import React, { useState } from 'react';

const FormUser = () => {
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [foto, setFoto] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    // a un servidor o procesarlos de otra manera
    console.log(nombre, tipo, foto);
  };

  return (
    <div >
      <form className=''>
        <div >
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"            
            id="nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="tipo">Tipo:</label>
          <select
            
            id="tipo"
            value={tipo}
            onChange={(event) => setTipo(event.target.value)}
            required
          >
            <option value="">Selecciona un tipo</option>
            <option value="A">Tipo A</option>
            <option value="B">Tipo B</option>
            <option value="C">Tipo C</option>
          </select>
        </div>
        <div>
          <label htmlFor="foto">Foto:</label>
          <input
            type="file"
            className="form-control-file"
            id="foto"
            onChange={(event) => setFoto(event.target.files[0])}
            required
          />
        </div>
        
      </form>
    </div>
  );
};

export default FormUser;
