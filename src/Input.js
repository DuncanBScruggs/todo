import React from "react";


function Input(props) {
    console.log(props)

    function clickHandler(e) {
        e.preventDefault();
        // console.log()
        if(e.target.elements.todo.value === ""){
            return;
        }

        else{
            let listItem = {
                status: true,
                name: e.target.elements.todo.value
            }
            props.setToDo(listItem);
            e.target.elements.todo.value = ""
        }
    }

    return (
        <form onSubmit={clickHandler}>
            <div class="input-group">
                <input name="todo" id="todoinput " type="text" class="form-control" placeholder="To Do" aria-label="To Do" aria-describedby="basic-addon2" />
                        
                <div class="input-group-append">
                    <button
                        class="btn btn-outline-secondary"
                        type="submit">Add Item</button>
                </div>
            </div>
        </form>

    )
}

export default Input;