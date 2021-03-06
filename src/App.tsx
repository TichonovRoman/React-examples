import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/onOff/OnOff";
import UncontrolledAccordion from "./components/UnconrolledAccordion/UnconrolledAccordion";
import {UncontrolledRating} from "./components/UconrolledRating/UnconrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Select} from "./components/Select/Select";

function App() {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    let items = [{title: 'Dimych', value: 1},
            {title: 'Valera', value: 2},
            {title: 'Roman', value: 3}];



    const onClickCallback = (value: any) => {alert(`user with ID ${value} should be happy`)}

    return (
        <div className={"App"}>

            <UncontrolledAccordion titleValue='Menu'/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<UncontrolledRating />*/}

            <Accordion
                titleValue='Menu'
                collapsed={accordionCollapsed}
                onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                items={items}
                onClick={onClickCallback}
            />

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            <UncontrolledAccordion titleValue={"BlaBla"}/>
            
            <Select onChange={()=>{}} value = {'Select City, pleas'} items={[
                {title: 'Moscow', value: "1"},
                {title: 'Kazan', value: "2"},
                {title: 'Voronezh', value: "3"},
                {title: 'Saratov', value: "4"},

            ]}/>

            {/*<Rating value={3}/>*/}


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


var user = {
    name: "Dimych",
    age: 12,
    address: {
        city: {
            title: "Minsk"
        }
    }
}















