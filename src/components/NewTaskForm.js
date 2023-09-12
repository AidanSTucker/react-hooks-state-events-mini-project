// NewTaskForm.js
import React, { Component } from "react";

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      category: "All",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text, category } = this.state;
    if (text) {
      const newTask = {
        id: Date.now(),
        text,
        category,
      };
      this.props.onTaskFormSubmit(newTask);
      this.setState({
        text: "",
        category: "All",
      });
    }
  };

  render() {
    const { categories } = this.props;
    const { text, category } = this.state;
    return (
      <form className="new-task-form" onSubmit={this.handleSubmit}>
        <label>
          Details
          <input
            type="text"
            name="text"
            value={text}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Category
          <select name="category" value={category} onChange={this.handleChange}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Add task" />
      </form>
    );
  }
}

export default NewTaskForm;

