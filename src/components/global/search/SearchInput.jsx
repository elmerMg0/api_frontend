import React from 'react'
import { InputGroup, Form } from 'react-bootstrap'
import search from '../../../assets/svg/search.svg'
const SearchInput = ( { setShow, filterSomething, placeHolder} ) => {

  const handleOnChange = (e) => {
    filterSomething(e.target.value);
  }

  return (
    <div className='search-bar'>
        <InputGroup>
            <Form.Control 
                placeholder={placeHolder}
                onChange={(e)=> handleOnChange(e) }
            />
        <img src={search} alt="icon-search" />
        </InputGroup>
        <button className='btn-main'onClick={() => setShow(true)}>Nuevo</button>
    </div>
  )
}

export default SearchInput;