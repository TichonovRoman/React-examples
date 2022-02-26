import React, {KeyboardEventHandler, useState} from "react";
import styles from "./Select.module.css"

export type ItemType = {
    title: string,
    value: string,
    // country?: number
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = React.memo(SelectForMemo)


function SelectForMemo(props: SelectPropsType) {
    const selectedItem = props.items.find(i => i.value === props.value)
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)


    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()

    }

    const onKeyUp = (e:any) => {
        for (let i=0; i<props.items.length; i++) {
            if (props.items[i].value === hoveredElementValue) {
                if (!props.items[i+1].value) {
                    props.onChange(props.items[i+1].value)
                    break
                }



            }
        }
    }

    return (
        <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            <div className={styles.items}>
                {active && props.items.map(i => <div
                    onMouseEnter={() => {setHoveredElementValue(i.value)}}
                    className={styles.item + " " + (hoveredElementValue === i.value ? styles.selected : "")}
                    onClick={() => onItemClick(i.value)}
                    key={i.value}>
                    {i.title}</div>)}
            </div>



        </div>
    )


}

