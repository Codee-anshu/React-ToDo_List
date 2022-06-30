import React, { useState } from "react";
import TaskList from "./TaskList";
import "./List.css"

const ToDo_List = () => {
    const [text, setText] = useState("");
    const [items, setItems] = useState([]);
    let changeText = (event) => {
        setText(event.target.value)

    }
    let addItems = () => {
        setItems((oldItems) => {
            return [...oldItems, text];
        });
        setText("");
    }
    let deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arr, index) => {
                return index !== id;

            })
        })

    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add Task" onChange={changeText} value={text} />
                    <button onClick={addItems}> + </button>
                    <ol>
                        {items.map((val, index) => {
                            return (
                                <>
                                    <TaskList text={val}
                                        onSelect={deleteItems}
                                        key={index}
                                        id={index}
                                    />

                                </>
                            )
                        })}
                    </ol>
                </div>
            </div>
        </>
    )

}


export default ToDo_List;