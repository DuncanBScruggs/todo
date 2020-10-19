import React from 'react';
import Header from "./Header";
import Input from "./Input";
import Item from "./Item";



class App extends React.Component {
  constructor(){
    super();

    let content = [];

    this.pages = [
      { readableName: "All", url: "all" },
      { readableName: "Active", url: "active" },
      { readableName: "Completed", url: "completed" }
    ];
    
    this.state = {
        currentPage: 0,
        todoList: []
    }

    this.setPage = this.setPage.bind(this)
    this.setToDo = this.setToDo.bind(this)

  }

  setToDo(todoItem){
    this.setState({ todoList: this.state.todoList.concat(todoItem)})
  }

  setPage(newPageNum) {
    this.setState({ currentPage: newPageNum })
  }

  componentDidMount() {
    console.log(" in componentDidMount method")

    let currentPage = window.localStorage.getItem("currentPage")

    if (currentPage) {
        console.log("found currentPage, ")
        this.setState({ currentPage: JSON.parse(currentPage) })
    }
    else {
        console.log("did not find currentPage")
        window.localStorage.setItem("currentPage", 0)
    }
  }

  componentDidUpdate() {
    console.log("in componentDidUpdate", this.state.currentPage)
    window.localStorage.setItem("currentPage", JSON.stringify(this.state.currentPage))
    }

  render(){
      return(
        <div class = "brand-main">

          <Header 
            pages={this.pages}
            currentPage={this.state}
            setPage={this.setPage}
          />

          <Input 
            todoList= {this.state.todoList}
            setToDo= {this.setToDo}
          />

          {(this.state.todoList == []) ?  "" : <Item todoList= {this.state.todoList}/>}

          
        </div>
      )
  }



}

export default App;
