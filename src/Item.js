import React from "react";

function Item(props) {

    return (
        props.todoList.map((item, index) => {
            return (

                <div class={"input-group mb-3"}>
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <input name="status" type="checkbox" aria-label="Checkbox for completed" />
                        </div>
                    </div>
                    <input type="text" class="form-control" placeholder={item.name} aria-label="Text input with checkbox" disabled />
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <input type="checkbox" aria-label="Checkbox for remove" />
                        </div>
                    </div>
                </div>

            )
        })
    )
}

export default Item;