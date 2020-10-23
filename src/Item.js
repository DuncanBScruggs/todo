import React from "react";

function Item(props) {

    // handler to pass the target item status to be changed
    function statusHandler(e) {
        console.log(e.target.id)
        props.changeStatus(e.target.id)
    }

    // handler to pass the target item to be deleted from todoList state and local storage
    function removeHandler(e) {
        console.log(e.target.id)
        props.removeItem(e.target.id)
    }

    return (
        props.todoList.map((item, index) => {
            console.log(item, index)

            // logic for showing the correct items depending on the current page state
            let show;

            if (props.currentPage === 0) {
                show = true
                console.log("All", show)
            }
            else if (props.currentPage === 1) {
                console.log("Active")

                show = item.status

            }
            else {
                console.log("Completed")

                show = !item.status
            }

            return (
                // 

                // structure of todo item with checkbox text field and button to change active and complete status, show item name, and button for removing the item
                <div class={"input-group my-3 " + (!show && "d-none")}>
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <input id={index} onChange={statusHandler} type="checkbox" aria-label="Checkbox for completed" checked = {!item.status}/>
                        </div>
                    </div>
                    <input type="text" class="form-control" placeholder={item.name} aria-label="Text input with checkbox" disabled />
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <button id={index} class="btn btn-secondary"onClick={removeHandler} aria-label="Checkbox for remove"></button>
                        </div>
                    </div>
                </div>

            )
        })
    )
}

export default Item;