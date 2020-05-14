import React, { FC } from 'react';
import TaskForm from '../components/task/TaskForm';
import { Button, Modal } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { TaskFormValues } from '../types/TaskFormValues';
import { Task } from '../types/Task';
import { createTask } from '../actions/tasks';
import { TaskCreateProps } from '../types/TaskCreateProps';

const TaskCreate: FC<TaskCreateProps> = ({ show, handleClose, addTask }) => {
    const taskFormId = 'taskForm';

    const handleSubmitEvent = () => {
        const taskForm = document.getElementById(taskFormId) as HTMLFormElement;
        taskForm.dispatchEvent(new Event('submit', { cancelable: true }));
    };

    const onSubmit = (values: TaskFormValues) => {
        const task = generateTask(values);
        addTask(task);
        handleClose();
    };

    const generateTask = ({ name, description, hours, minutes, seconds }: TaskFormValues): Task => {
        return {
            id: uuid(),
            name,
            description,
            durationTime: { hours, minutes, seconds},
            timeLeft: { hours, minutes, seconds},
            active: false,
            enabled: true,
            createdAt: new Date().toISOString()
        };
    };

    return (
        <Modal animation={false} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Agrega una tarea</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TaskForm id={taskFormId} onSubmit={onSubmit} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleSubmitEvent}>Agregar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default connect(null, { addTask: createTask })(TaskCreate);
