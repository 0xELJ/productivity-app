import React, { FC, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import TaskForm from '../components/task/TaskForm';
import { TaskFormValues } from '../types/TaskFormValues';
import { TaskDetailsProps } from '../types/TaskDetailsProps';
import taskDetailsSelector from '../selectors/taskDetailsSelector';
import { deleteTask, resetSelectedTask, updateTask } from '../actions/tasks';
import Moment from 'react-moment';
import { Task } from '../types/Task';
import { useGlobalState } from '../hooks/useGlobalState';
import { useActions } from '../hooks/useActions';

const TaskDetails: FC<TaskDetailsProps> = ({ show, handleClose }) => {
    const task = useGlobalState(taskDetailsSelector);
    const [removeTask, resetTask, patchTask] = useActions([deleteTask, resetSelectedTask, updateTask], []);
    const [taskFormId] = useState('taskForm');

    useEffect(() => {
       return () => {
           resetTask();
       }
    }, [resetTask]);

    const getFormValues = () => {
        if (task) {
            const { name, description, durationTime: { hours, minutes, seconds } } = task;
            return { name, description, hours, minutes, seconds };
        } else {
            return undefined;
        }
    };

    const handleSubmitEvent = () => {
        const taskForm = document.getElementById(taskFormId) as HTMLFormElement;
        taskForm.dispatchEvent(new Event('submit', { cancelable: true }));
    };

    const onSubmit = (formValues: TaskFormValues) => {
         const newTaskValues = updateTaskValues(formValues);
         patchTask(newTaskValues);
         handleClose();
    };

    const updateTaskValues = (newValues: TaskFormValues) => {
        const { id, createdAt, active, enabled } = task as Task;
        const { name, description, hours, minutes, seconds } = newValues;
        return {
            id,
            name,
            description,
            durationTime: { hours, minutes, seconds },
            timeLeft: { hours, minutes, seconds },
            createdAt,
            active,
            enabled
        };
    };

    const onDeleteTask = () => {
        const { id } = task as Task;
        removeTask(id);
        handleClose();
    };

    const allowUpdate = () => {
        if (task?.enabled) {
            return <Button onClick={handleSubmitEvent} variant="warning">Modificar</Button>;
        }
        return null;
    };

    return (
        <Modal animation={false} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Detalles de tarea</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TaskForm
                    id={taskFormId}
                    onSubmit={onSubmit}
                    initialValues={getFormValues()}
                    disabled={!task?.enabled}
                />
                <p className="mb-0">
                    <span className="font-weight-bold">Creada: </span>
                    <Moment fromNow>{task?.createdAt}</Moment>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onDeleteTask} variant="danger" className="mr-auto">Eliminar</Button>
                {allowUpdate()}
            </Modal.Footer>
        </Modal>
    );
};

export default TaskDetails;
