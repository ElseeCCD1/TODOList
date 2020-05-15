import React, { Component } from 'react';
import { TaskItem } from "./TaskItem";

class ItemsList extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.toggleAddTaskModalOpened}>Add task</button>
        <ul>
          {this.props.tasks.map(task => (
            <TaskItem key={task.id} task={task} toggleDeleteTaskModalOpened={this.props.toggleDeleteTaskModalOpened} />)
          )}
        </ul>
      </>
    );
  }
}

export { ItemsList };
