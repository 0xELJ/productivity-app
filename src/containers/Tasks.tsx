import React, { FC, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import TaskList from '../components/task/TaskList';
import TaskCreate from './TaskCreate';
import TaskDetails from './TaskDetails';
import { selectTask, setCompletedTasksFilter, setPendingTasksFilter } from '../actions/tasks';
import { TasksProps } from '../types/TasksProps';
import { Task } from '../types/Task';
import { TaskFilters } from '../constants/TaskFilters';
import completedTasksSelector from '../selectors/completedTasksSelector';
import pendingTasksSelector from '../selectors/pendingTasksSelector';

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

    const handlePressPendingFilter = (filter: TaskFilters) => {
        props.setPendingFilter(filter);
    };

    const handlePressCompletedFilter = (filter: TaskFilters) => {
        props.setCompletedFilter(filter);
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
                            onPressFilter={handlePressPendingFilter}
                            currentFilter={props.pendingFilter}
                            activeTaskId={props.pendingTasks[0]?.id}
                        />
                    </Col>
                    <Col md="6">
                        <TaskList
                            title="Tareas completadas"
                            tasks={props.completedTasks}
                            onSelectTask={handleSelectTask}
                            currentFilter={props.completedFilter}
                            onPressFilter={handlePressCompletedFilter}
                        />
                    </Col>
                </Row>
            </div>
            <TaskCreate show={showCreateTask} handleClose={toggleCreateTask} />
            <TaskDetails show={showTaskDetails} handleClose={toggleTaskDetails} />
        </section>
    );
};

const mapStateToProps = (state: { tasks: Task[], filters: { completedFilter: TaskFilters, pendingFilter: TaskFilters } }) => {
    return {
        pendingTasks: pendingTasksSelector(state),
        completedTasks: completedTasksSelector(state),
        pendingFilter: state.filters.pendingFilter,
        completedFilter: state.filters.completedFilter,
    };
};

export default connect(mapStateToProps, {
    setSelectedTask: selectTask,
    setPendingFilter: setPendingTasksFilter,
    setCompletedFilter: setCompletedTasksFilter
})(Tasks);
