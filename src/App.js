import React from 'react';
import Header from "./Header";
import Input from "./Input";
import Item from "./Item";



class App extends React.Component {
  constructor() {
    super();

    // page names and urls (if needed) to pas to NavBar
    this.pages = [
      { readableName: "All", url: "all" },
      { readableName: "Active", url: "active" },
      { readableName: "Completed", url: "completed" }
    ];

    // state for the current page and the To Do List
    this.state = {
      currentPage: 0,
      todoList: []
    }

    // binding functions to pass to children
    this.setPage = this.setPage.bind(this)
    this.setToDo = this.setToDo.bind(this)
    this.changeStatus = this.changeStatus.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.removeCompleted = this.removeCompleted.bind(this)
  }

  // function to remove an item from the todo list state and local storage
  removeItem(todoID) {
    console.log("remove Item")
    let copy = this.state.todoList;
    copy.splice(parseInt(todoID), 1)
    window.localStorage.setItem("todoList", copy)
    this.setState({ todoList: copy })
  }

  // removes all completed items from todoList
  removeCompleted(){
    console.log("remove completed")
    let copy = this.state.todoList.filter((item, index) => {
      console.log(!item.status)
      if(item.status){
        return item;
      }
    })
    window.localStorage.setItem("todoList", copy)
    this.setState({ todoList: copy })
  }

  // function for changing the status of a todo list item between true for active and false for complete
  changeStatus(todoID) {
    console.log("change status")
    let copy = this.state.todoList;
    copy[parseInt(todoID)].status = !copy[parseInt(todoID)].status
    this.setState({ todoList: copy })
  }

  // function for setting a Todo item to the todoList
  setToDo(todoItem) {
    this.setState({ todoList: this.state.todoList.concat(todoItem) })
  }

  // sets the new page number to the current in state
  setPage(newPageNum) {
    this.setState({ currentPage: newPageNum })
  }

  // current page and the todoList get put into local storage
  componentDidMount() {
    console.log(" in componentDidMount method")

    let todoList = window.localStorage.getItem("todoList")
    let currentPage = window.localStorage.getItem("currentPage")

    if (currentPage) {
      console.log("found currentPage, ")
      this.setState({ currentPage: JSON.parse(currentPage) })
    }
    if (todoList) {
      console.log("found todoList, ")
      this.setState({ todoList: JSON.parse(todoList) })
    }
    else {
      console.log("did not find currentPage")
      window.localStorage.setItem("currentPage", 0)
      window.localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
    }
  }

  componentDidUpdate() {
    console.log("in componentDidUpdate", this.state.currentPage)
    window.localStorage.setItem("currentPage", JSON.stringify(this.state.currentPage))
    window.localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
  }

  render() {
    return (
      <div class="brand-main">

            {/* header is the Nav Bar and is passed pages, currentPage, and set page to be able to change the state of the page */}
            <Header
              pages={this.pages}
              currentPage={this.state.currentPage}
              setPage={this.setPage}
            />

        <div class="container mt-5">

          {/* Input is passed the todoList and setToDO to take in user input and update the state of the todoList */}
          <Input
            todoList={this.state.todoList}
            setToDo={this.setToDo}
            removeCompleted={this.removeCompleted}
          />

          {/* Item is passed todoList, changeStatus, CurrentPage and removeItem to be able to show items on the list, 
          control there active or complete status, show them by status for the correct page, and remove an item */}
          <Item todoList={this.state.todoList}
            changeStatus={this.changeStatus}
            currentPage={this.state.currentPage}
            removeItem={this.removeItem}
          />
          


        </div>
      </div>
    )
  }



}

export default App;
