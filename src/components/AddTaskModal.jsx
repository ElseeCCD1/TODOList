import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import { ModalHeader } from "./Modal/ModalHeader";
import styles from "./AddTaskModal.module.css";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from "./Modal/Modal";
import { ModalFooter } from "./Modal/ModalFooter";

class AddTaskModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.tasks[this.props.tasks.length-1].id + 1,
      text: '',
      date: new Date()
    }
  }

  handleTextChange = event => {this.setState({text: event.target.value})}

  handleDateChange = date => this.setState({date: date});

  handleSubmit = async () => {
    const { appendTask, toggleAddTaskModalOpened } = this.props;
    await fetch( 'http://localhost:4000/tasks',{
      method: 'POST',
      headers: {
        'Accept': 'application/json; charset=utf-8',
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(this.state)
    });
    appendTask(this.state);
    toggleAddTaskModalOpened();
  }

  render() {
    const toggleAddTaskModalOpened = this.props.toggleAddTaskModalOpened;

    return (
      <Modal>
        <ModalHeader onCrossClick={toggleAddTaskModalOpened}>Add new task</ModalHeader>
        <div className={styles.row}>
          <label className={styles.label}>Task</label>
          <input type='text' value={this.state.text} onChange={this.handleTextChange} />
        </div>
        <div className={styles.row}>
          <label className={styles.label}>Starting Date</label>

          <DatePicker
            selected={this.state.date}
            onChange={this.handleDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="Time"
            dateFormat="MMMM d, yyyy HH:mm"
          />
        </div>
        <ModalFooter>
          <button onClick={this.handleSubmit}>Create task</button>
        </ModalFooter>
      </Modal>
    );
  }
}

export { AddTaskModal };
