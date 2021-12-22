import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log('App rendering')
    return (
        <div>
            <img src={`https://miro.medium.com/max/1200/1*pHsEux2h8wc3-yNCQNwz0A.jpeg`}/>
            <PageTitle title={'This is App component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value = {3}/>
            <Accordion title = 'Меню простое'/>
            <Accordion title = 'Меню сложное'/>
            Artikle 2
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>
        </div>

    );
}

function PageTitle(props: any) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>

}


export default App;
