import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Form, InputGroup, Collapse } from "react-bootstrap";

const initialState = {
  nombre: "",
  precio_venta: "",
  precio_compra: "",
  descripcion: "",
  estaod: 1,
  categoria: "",
  url_image: "",
};

const ProductModal = ({
  show,
  setShow,
  create,
  productToEdit,
  setProductToEdit,
  updateProduct,
  categories,
}) => {
  const [product, setProduct] = useState(initialState);
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [varieties, setVarieties] = useState([]);
  useEffect(() => {
    console.log(productToEdit);
    if (productToEdit && Object.keys(productToEdit).length !== 0) {
      setProduct(productToEdit);
    } else {
      setProduct(initialState);
    }
    console.log(product);
  }, [show]);

  const handleConfirm = () => {
    setShow(false);
    if (!product.id) {
      console.log(varieties)
      create(product, selectedImage, varieties);
    } else {
      updateProduct(product, selectedImage);
    }
    //create(product);
    setProductToEdit({});
    setSelectedImage(null);
  };
  const handleOnChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleCancel = () => {
    setShow(false);
    setProductToEdit({});
  };

  const handleImageChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.files[0],
    });
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const createListVariety = () => {
    let array = new Array(amount);
    let i;
    for (i = 0; i < amount; i++) {
      array[i] = [`variedad${i}`, ''] ;
    }
    setVarieties(array);
    console.log(array)
  };

  const handleOnChangeVariety = (e, id) => {
    const object = Object.fromEntries(varieties);
     const object2 = ({...object, [id]: e.target.value})
    setVarieties(Object.entries(object2))
    console.log(varieties)
  }

  return (
    <Modal show={show} size="md" centered backdrop>
      <Modal.Header>
        <Modal.Title>
          <h3>Crear nuevo producto</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
          <InputGroup.Text>Nombre</InputGroup.Text>
          <Form.Control
            placeholder="Nombre"
            type="text"
            onChange={handleOnChange}
            name="nombre"
            value={product.nombre}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Precio de venta</InputGroup.Text>
          <Form.Control
            placeholder="10.5"
            type="number"
            onChange={handleOnChange}
            name="precio_venta"
            value={product.precio_venta}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Precio de compra</InputGroup.Text>
          <Form.Control
            placeholder="5.5"
            type="text"
            onChange={handleOnChange}
            name="precio_compra"
            value={product.precio_compra}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Descripcion</InputGroup.Text>
          <Form.Control
            placeholder="tiene carne, papas, etc."
            type="text"
            onChange={handleOnChange}
            name="descripcion"
            value={product.descripcion}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Categoria</InputGroup.Text>
          <Form.Select>
            <option>Selecione una categoria</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nombre}
              </option>
            ))}
          </Form.Select>
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            placeholder="pique.jpg"
            type="file"
            onChange={handleImageChange}
            name="url_image"
            /*  value={product.url_image} */
            accept=".jpg,.png,jpng"
          />
        </InputGroup>
        {selectedImage ? (
          <div className="modal-product-image">
            <img src={selectedImage} alt="preview" />
          </div>
        ) : (
          <>
            {product.url_image && product.url_image.length > 0 && (
              <div className="modal-product-image">
                <img
                  src={`http://localhost:8080/upload/${product.url_image}`}
                  alt="foto producto"
                />
              </div>
            )}
          </>
        )}
        <div className="checkbox-variety">
          <input onClick={() => setOpen(!open)} type="checkbox" />
          <p>Incluir varidad al producto</p>
        </div>

        <Collapse in={open}>
          <div>
            <label>
              Cantidad de variedad:
              <input
                type="number"
                min={0}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button onClick={() => createListVariety()}>Aceptar</button>
            </label>
          </div>
        </Collapse>
        {open &&
          varieties.length > 0 &&
          varieties.map((a, index) => {
            return (
              <label key={index}>
                {"variedad "+index+":"}
                <input type="text" name={a[0]} onChange={(e) => handleOnChangeVariety(e,a[0])} />
              </label>
            );
          })}
        <div></div>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={() => handleCancel()} className="btn-main-red">
          Cancelar
        </button>
        <button onClick={handleConfirm} className="btn-main">
          Confirmar
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
