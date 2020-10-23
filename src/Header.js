import React from "react";


function Header(props){

    // logic for showing in the header what view you are in
    let page = ""
    if (props.currentPage === 0){
        page = "All"
    }
    else if (props.currentPage === 1){
        page = "Active"
    }
    else {
        page = "Completed"
    }


    return(
            // shows the navbar
            <nav class="navbar navbar-expand-lg navbar-dark brand fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#">{"To Do List: " + (page)}</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            {
                                // loops through the pages prop and populates the Nav Bar with however many items in the prop
                                props.pages.map((item, index) => {
                                    return (
                                        <li class="nav-item">
                                            <a 
                                                href="#"
                                                onClick={() => props.setPage(index)} 
                                                class={"nav-link " + (props.currentPage === index ? "active" : "")}>
                                                {item.readableName}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>

    )
}

export default Header