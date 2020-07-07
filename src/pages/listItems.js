import React from 'react';

const ListItems = (props) => {

    const items = props.items;

    return (
        <div>
            {items.map(item => {
                return <div className="list" key={item.key}>
                    <div className = "item">{item.text}
                        <span class="fa fa-trash-o" aria-hidden="true"
                        onClick= {() => props.deleteItem(item.key)}></span>
                    </div>
                </div>
            })}
        </div>
    )
}

export default ListItems