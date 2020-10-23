import React from "react";


function Input(props) {
    console.log(props)

    // click handler that passes the input target element to the setToDo function to be added to the todoList
    function clickHandler(e) {
        e.preventDefault();
        // console.log()
        if (e.target.elements.todo.value === "") {
            return;
        }

        else {
            // makes an object with the input as the name value and status default to true for active
            let listItem = {
                status: true,
                name: e.target.elements.todo.value
            }
            props.setToDo(listItem);
            e.target.elements.todo.value = ""
        }
    }

    function removeCompletedHandler(e){
        e.preventDefault(e);

        props.removeCompleted()
    }

    // structure of the Input field and button
    return (
        <>
            <form onSubmit={clickHandler}>
                <div class="input-group">
                    <input name="todo" id="todoinput " type="text" class="form-control" placeholder="To Do" aria-label="To Do" aria-describedby="basic-addon2" />

                    <div class="input-group-append">
                        <button
                            class="btn btn-secondary"
                            type="submit">Add Item</button>
                    </div>
                </div>
            </form>
            <button onClick={removeCompletedHandler} class="btn btn-danger">
                Remove Completed
                    </button>
        </>

    )
}

export default Input;