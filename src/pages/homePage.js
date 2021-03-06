import React, { useState } from 'react';
import ListItems from './listItems';

function HomePage() {

    const [formItems, setFormItems] = useState([]);
    const [currentListItem, setCurrentListItem] = useState({
        text: '',
        key: ''
    });

    const handleInput = (e) => {
        setCurrentListItem({
            text: e.target.value,
            key: Date.now()
        })
        console.log()
    }

    const onClick = (e) => {
        e.preventDefault(); //When we click on add button, page wont refreshed. 
        console.log("List Item :", currentListItem);
        if (currentListItem.text) {
            setFormItems([
                ...formItems, // [{heloo}]
                currentListItem
            ])
        }
    }

    const deleteFormItem = (key) => {
        const filteredItems = formItems.filter(items => items.key!== key);
        setFormItems([
            ...filteredItems
        ])
    }

    const editFormItem = (text, key) => {
        const items = formItems.map(item => {
            if(item.key === key){
                item.text = text;
            }
            return item
        })
        setFormItems(items)
    }

    return (
        <div className="homepage">
            <header>
                <form id='to-do-form' onSubmit={onClick}>
                    <input
                        type="text"
                        placeholder="Enter here"
                        value={currentListItem.text}
                        onChange={e => handleInput(e)}
                    />
                    <button type="Submit"> Add </button>
                </form>
                <ListItems items = {formItems} deleteItem = {deleteFormItem} editItem = {editFormItem}/>
            </header>
        </div>
    )
}

export default HomePage