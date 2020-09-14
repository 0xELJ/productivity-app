import React, { FC } from 'react';
import TaskForm from '../components/task/TaskForm';
import { Button, Modal } from 'react-bootstrap';
import { useActions } from '../hooks/useActions';
import { createTask } from '../actions/tasks';
import { TaskFormValues } from '../types/TaskFormValues';
import { TaskCreateProps } from '../types/TaskCreateProps';

const TaskCreate: FC<TaskCreateProps> = ({ show, handleClose }) => {
    const taskFormId = 'taskForm';
    const addTask = useActions(createTask, []);

    const handleSubmitEvent = () => {
        const taskForm = document.getElementById(taskFormId) as HTMLFormElement;
        taskForm.dispatchEvent(new Event('submit', { cancelable: true }));
    };

    const onSubmit = (task: TaskFormValues) => {
        addTask(task);
        handleClose();
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

export default TaskCreate;
