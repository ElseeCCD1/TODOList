import React, { Component } from 'react';
import { ItemsList } from "./ItemsList";
import { AddTaskModal } from "./AddTaskModal";
import { DeleteTaskModal } from "./DeleteTaskModal";

class TodoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      isAddTaskModalOpened: false,
      isDeleteTaskModalOpened: false,
      taskIdToDelete: ''
    }
  }

  async componentDidMount() {
    const response = await fetch( 'http://localhost:4000/tasks');
    const data = await response.json();
    this.setState({tasks: data})
  }

  appendTask = (newTask) => {
    const clonedTasks = [...this.state.tasks];
    clonedTasks.push(newTask);
    this.setState({tasks: clonedTasks});
  }

  deleteTask = async () => {
    await fetch( `http://localhost:4000/tasks/${this.state.taskIdToDelete}`,{
      method: 'DELETE',
      headers: {
        'Accept': 'application/json; charset=utf-8',
        'Content-Type': 'application/json; charset=utf-8'
      }
    });
    const tasksWithRemovedItem = this.state.tasks.filter(task => task.id !== this.state.taskIdToDelete);
    this.setState({tasks: tasksWithRemovedItem});
    this.toggleDeleteTaskModalOpened();
  }

  toggleAddTaskModalOpened = () => this.setState({isAddTaskModalOpened: !this.state.isAddTaskModalOpened});
  toggleDeleteTaskModalOpened = (taskIdToDelete) => {
    this.setState({taskIdToDelete: taskIdToDelete})
    this.setState({isDeleteTaskModalOpened: !this.state.isDeleteTaskModalOpened})
  };

  render() {
    return (
      <>
        {this.state.isAddTaskModalOpened && (
          <AddTaskModal
            toggleAddTaskModalOpened={this.toggleAddTaskModalOpened}
            tasks={this.state.tasks}
            appendTask={this.appendTask}
          />
        )}
        {this.state.isDeleteTaskModalOpened && (
          <DeleteTaskModal
            toggleDeleteTaskModalOpened={this.toggleDeleteTaskModalOpened}
            deleteTask={this.deleteTask}
          />
        )}
        <ItemsList
          tasks={this.state.tasks}
          toggleAddTaskModalOpened={this.toggleAddTaskModalOpened}
          toggleDeleteTaskModalOpened={this.toggleDeleteTaskModalOpened}
        />
      </>
    );
  }
}

export { TodoPage };
