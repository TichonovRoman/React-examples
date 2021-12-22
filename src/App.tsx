import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Reting";

function Hello() {
    return (
        alert('Hello')
    )
}

//Hello()

function App() {
    console.log('App rendering')
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>

    );
}

function AppTitle() {
    console.log('AppTitle rendering')
    return <>This is App component</>

}


export default App;
