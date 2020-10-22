import React from 'react';
import Header from "./Header";
import Input from "./Input";
import Item from "./Item";
import NothingToDo from "./NothingToDo";


class App extends React.Component {
  constructor() {
    super();

    this.pages = [
      { readableName: "All", url: "all" },
      { readableName: "Active", url: "active" },
      { readableName: "Completed", url: "completed" }
    ];

    this.state = {
      currentPage: 0,
      todoList: []
    }
    this.filter = ""

    this.setPage = this.setPage.bind(this)
    this.setToDo = this.setToDo.bind(this)
    this.changeStatus = this.changeStatus.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  removeItem(todoID) {
    console.log("remove Item")
    let copy = this.state.todoList;
    copy.splice(parseInt(todoID), 1)
    window.localStorage.setItem("todoList", copy)
    this.setState({ todoList: copy })
  }

  changeStatus(todoID) {
    console.log("change status")
    let copy = this.state.todoList;
    copy[parseInt(todoID)].status = !copy[parseInt(todoID)].status
    this.setState({ todoList: copy })
  }

  setToDo(todoItem) {
    this.setState({ todoList: this.state.todoList.concat(todoItem) })
  }

  setPage(newPageNum) {
    this.setState({ currentPage: newPageNum })
  }

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

        <Header
          pages={this.pages}
          currentPage={this.state.currentPage}
          setPage={this.setPage}
        />

        <div class="container">

          <Input
            todoList={this.state.todoList}
            setToDo={this.setToDo}
          />

        
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
