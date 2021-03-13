import React, { useContext } from "react";
import "./style.css";
import ListContext from "../utils/ListContext"

function List() {

    const pageState = useContext(ListContext)
  
    return (
      <table className="container">
          <tr> 
              <th>🙋‍♂️</th>
              <th className="sort" onClick={ _event => pageState.directory = pageState.directory.sort((function(a, b) {return a.name.first > b.name.first ? 1:-1;}))}> Employee ⏫⏬</th>
              <th>✉ Email </th>
              <th>📞 Phone # </th>
          </tr>
          {pageState.directory.map(user => (

          <tr> 
              <td><img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`}></img></td>
              <td>{`${user.name.first},${user.name.last}`}</td>
              <td>{user.email}</td>
              <td>{user.cell}</td>
          </tr>
          
          ))}
      </table>
    );
  }
  export default List;