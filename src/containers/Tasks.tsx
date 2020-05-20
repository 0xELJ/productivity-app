import React, { FC, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import TaskList from '../components/task/TaskList';
import TaskCreate from './TaskCreate';
import TaskDetails from './TaskDetails';
import { selectTask } from '../actions/tasks';
import { TasksProps } from '../types/TasksProps';
import { Task } from '../types/Task';

const Tasks: FC<TasksProps> = props => {
    const [showCreateTask, setShowCreateTask] = useState(false);
    const [showTaskDetails, setShowTaskDetails] = useState(false);

    const toggleCreateTask = () => {
        setShowCreateTask(!showCreateTask);
    };

    const toggleTaskDetails = () => {
        setShowTaskDetails(!showTaskDetails);
    };

    const handleSelectTask = (id: string) => {
        toggleTaskDetails();
        props.setSelectedTask(id);
    };

    return (
        <section className="my-5">
            <div className="container">
                <h1 className="text-center mb-5">Tareas</h1>
                <Button onClick={toggleCreateTask} variant="success" size="lg">Agregar tarea</Button>
                <Row className="mt-4">
                    <Col md="6" className="mb-4">
                        <TaskList
                            title="Tareas pendientes"
                            tasks={props.pendingTasks}
                            onSelectTask={handleSelectTask}
                            activeTaskId={props.pendingTasks[0]?.id}
                        />
                    </Col>
                    <Col md="6">
                        <TaskList
                            title="Tareas completadas"
                            tasks={props.completedTasks}
                            onSelectTask={handleSelectTask}
                        />
                    </Col>
                </Row>
            </div>
            <TaskCreate show={showCreateTask} handleClose={toggleCreateTask} />
            <TaskDetails show={showTaskDetails} handleClose={toggleTaskDetails} />
        </section>
    );
};

const mapStateToProps = (state: { tasks: Task[] }) => {
    return {
        pendingTasks: state.tasks.filter(task => task.enabled),
        completedTasks: state.tasks.filter(task => !task.enabled)
    };
};

export default connect(mapStateToProps, { setSelectedTask: selectTask })(Tasks);
