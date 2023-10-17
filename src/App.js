
import Main from './pages/Main';
import { useEffect } from 'react';
import store from "./store";
import { Provider } from "react-redux"; import { useSelector } from 'react-redux';
import { Route, Router, Routes } from 'react-router-dom';


function App() {
  const language = useSelector(state => state.language);
  useEffect(() => {

    if (localStorage.getItem("language") !== language) {
      localStorage.setItem("language", language);
    }

  }, [language]);



  return (
    <>
  
        <Main />



    </>
  );
}


export default App;
