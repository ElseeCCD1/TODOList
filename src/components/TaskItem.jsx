import React, { Component } from 'react';
import { MONTHS } from "../constants/months";

class TaskItem extends Component {
  render() {
    const date = new Date(this.props.task.date);
    return (
      <li>
        {this.props.task.text} by {date.getDay()} {MONTHS[date.getMonth()]} {date.getFullYear()} {date.getHours()}:{date.getMinutes()}
        &nbsp;
        <button onClick={() => this.props.toggleDeleteTaskModalOpened(this.props.task.id)}>Удалить</button>
      </li>
    );
  }
}

export { TaskItem };
