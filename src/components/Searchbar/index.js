import React, { useContext } from "react";
import ListContext from "../utils/ListContext";
import "./style.css";

function Searchbar(prop) {

    const pageState = useContext(ListContext)
  
    return (
      <form className="search container">
        <div className="form-group">
          <label htmlFor="user-choice">Employee Search:</label>
          <input
            name="user-choice"
            list="users"
            type="text"
            className="form-control"
            placeholder="please search for an employee"
            id="user-choice"
            onChange = {event => pageState.search = event.target.value.toLowerCase()}
          />
          <datalist id="users">
            {pageState.directory.map(user=> (
              
            <option value={`${user.name.first} ${user.name.last}`} key={`${user.name.first} ${user.name.last}`}/>
            
            ))}
          </datalist>
        </div>
      </form>
    );
  }
  
  export default Searchbar;