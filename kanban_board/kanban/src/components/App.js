import React, { PureComponent } from "react";
import TaskList from "./TaskList";
import { connect } from "react-redux";
import TaskCreate from "./TaskCreate";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Routes from "../routes";
import { sort } from "../actions";

class App extends PureComponent {
  render() {
    return <Routes />;
  }
}

export default App;
