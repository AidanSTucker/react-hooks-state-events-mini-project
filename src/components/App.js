// App.js
import React, { Component } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: TASKS,
      selectedCategory: "All",
    };
  }

  // Function to handle category selection
  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category });
  };

  // Function to add a new task
  handleTaskAdd = (newTask) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }));
  };

  // Function to delete a task
  handleTaskDelete = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  };

  render() {
    const { tasks, selectedCategory } = this.state;
    return (
      <div className="App">
        <h2>My tasks</h2>
        <CategoryFilter
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={this.handleCategorySelect}
        />
        <NewTaskForm
          categories={CATEGORIES}
          onTaskFormSubmit={this.handleTaskAdd}
        />
        <TaskList
          tasks={tasks}
          selectedCategory={selectedCategory}
          onDeleteTask={this.handleTaskDelete}
        />
      </div>
    );
  }
}

export default App;
