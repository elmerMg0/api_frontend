import React, { useState } from 'react'
import { InputGroup, Form } from 'react-bootstrap'
import search from '../../../assets/svg/search.svg'
const SearchBar = ( { setShow, filterCustomers} ) => {

  const handleOnChange = (e) => {
    filterCustomers(e.target.value);
  }

  return (
    <div className='search-bar'>
        <InputGroup>
            <Form.Control 
                placeholder='Ejm. Mario Jimenez Lopez'
                onChange={(e)=> handleOnChange(e) }
            />
        <img src={search} alt="icon-search" />
        </InputGroup>
        <button className='btn-main'onClick={() => setShow(true)}>Nuevo</button>
    </div>
  )
}

export default SearchBar;