import React from 'react';
import FlipMove from 'react-flip-move';

const ListItems = (props) => {

    const items = props.items;

    return (
        <div>
            <FlipMove duration={500} easing="ease-in-out">
                {items.map(item => {
                    return <div className="list" key={item.key}>
                        <div className="item">
                            {/* <div>{item.key} </div> */}
                            <input type="text" id={item.key} value={item.text}
                                onChange={(e) => props.editItem(e.target.value, item.key)
                                }></input>
                            {/* <div className="fa fa-pencil-square-o" aria-hidden="true" ></div> */}
                            <span className="fa fa-trash-o" aria-hidden="true"
                                onClick={() => props.deleteItem(item.key)}></span>
                        </div>
                    </div>
                })}
            </FlipMove>
        </div>
    )
}

export default ListItems