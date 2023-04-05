import React from 'react'

const PosCategories = ( { categories, getProducts} ) => {

  const handleSelectCategory = ( cat ) => {
    getProducts(cat.id)
  }

  return (
    <div className='pos-categories'>
      <h5>Categorias</h5>
      {
        categories && categories.length > 0 &&
        categories.map( (cat) => {
          return <div className='pos-category' key={cat.id} onClick={() => handleSelectCategory(cat)}> 
               <h5>{cat.nombre}</h5>
               <img src={"http://localhost:8080/upload/" + cat.url_image} alt="" />
            </div>
        })
      }
    </div>
  )
}

export default PosCategories