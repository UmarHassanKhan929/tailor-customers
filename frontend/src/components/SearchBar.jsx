import React from 'react'
import { MDBCol } from "mdbreact";
import './SearchBar.css'
const SearchBar = ({setQuery}) => {
  return (
    <MDBCol md="4" style={{"marginRight":"5px"}}>
      <div className="active-pink-3 active-pink-4 mb-4">
        <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={e=>setQuery(e.target.value)}/>
      </div>
    </MDBCol>
  )
}

export default SearchBar