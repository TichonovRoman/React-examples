import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/onOff/OnOff";
import UnconrolledAccordion from "./components/UnconrolledAccordion/UnconrolledAccordion";
import {UncontrolledRating} from "./components/UconrolledRating/UnconrolledRating";

function App() {

    console.log('App rendering')
    return (
        <div className={"App"}>
            {/*<img src={`https://hub.packtpub.com/wp-content/uploads/2018/03/react-jsx.png`}/>*/}
            {/*<PageTitle title={'This is App component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}
            {/*Article 1*/}
            {/*<Rating value= {3}/>*/}
            <OnOff />

            {/*<OnOff on={false}/>*/}


            <UnconrolledAccordion titleValue = 'Menu'/>



            {/*<Accordion titleValue = 'Users' collapsed = {false}/>*/}

            <UncontrolledRating />

            {/*<Rating value={3}/>*/}
            {/*<Accordion titleValue = 'Menu' collapsed = {false}/>*/}

            {/*<Rating value = {0}/>*/}
            {/*<Rating value = {1}/>*/}
            {/*<Rating value = {2}/>*/}
            {/*<Rating value = {3}/>*/}
            {/*<Rating value = {4}/>*/}
            {/*<Rating value = {5}/>*/}
        </div>

    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>

}


export default App;
