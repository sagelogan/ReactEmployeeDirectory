import React, {useState, useEffect,} from "react";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import List from "./components/List";
import ListContext from "./components/utils/ListContext";
import people from "./directory.json";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [pageState, setPageState] = useState({
    directory : people,
    search:"",
  })

  useEffect(()=> {
    if(!pageState.search){
      setPageState({...pageState, directory: people})
    }else{
      setPageState({...pageState, directory: people.filter(user=> (`${user.name.first} ${user.name.last}`).toLowerCase().includes(pageState.search) === true)})
    }
  },[pageState])



  return (
   <ListContext.Provider value={pageState}>
              <Header />
              <Searchbar/>
              <List/>
              </ListContext.Provider>
  );
}

export default App;
