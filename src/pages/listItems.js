import React from 'react';

const ListItems = (props) => {

    const items = props.items;

    return(
        <div>
            {items.map(item => {
                return <div className ="list" key="item.key">
                        <p>{item.text}</p>
                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </div>
            })}
        </div>
    )
}

export default ListItems