import React, { FC, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import TaskList from '../components/task/TaskList';
import TaskCreate from './TaskCreate';
import TaskDetails from './TaskDetails';
import { reorderTasks, selectTask, setCompletedTasksFilter, setPendingTasksFilter } from '../actions/tasks';
import { TasksProps } from '../types/TasksProps';
import { Task } from '../types/Task';
import { TaskFilters } from '../constants/TaskFilters';
import completedTasksSelector from '../selectors/completedTasksSelector';
import pendingTasksSelector from '../selectors/pendingTasksSelector';
import activeTaskSelector from '../selectors/activeTaskSelector';

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

    const handleDrag = (startId: string, endId: string) => {
        props.reorderTaskList(startId, endId);
    };

    return (
        <section className="my-5">
            <div className="container">
                <Button onClick={toggleCreateTask} variant="success" size="lg">Agregar tarea</Button>
                <Row className="mt-4">
                    <Col md="6" className="mb-4">
                        <TaskList
                            title="Tareas pendientes"
                            tasks={props.pendingTasks}
                            onDragEnd={handleDrag}
                            onSelectTask={handleSelectTask}
                            onPressFilter={handlePressPendingFilter}
                            currentFilter={props.pendingFilter}
                            activeTaskId={props.activeTaskId}
                        />
                    </Col>
                    <Col md="6" className="mb-5">
                        <TaskList
                            title="Tareas completadas"
                            tasks={props.completedTasks}
                            onDragEnd={handleDrag}
                            onSelectTask={handleSelectTask}
                            onPressFilter={handlePressCompletedFilter}
                            currentFilter={props.completedFilter}
                            disableDrop={true}
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
        activeTaskId: activeTaskSelector(state)?.id,
    };
};

export default connect(mapStateToProps, {
    setSelectedTask: selectTask,
    setPendingFilter: setPendingTasksFilter,
    setCompletedFilter: setCompletedTasksFilter,
    reorderTaskList: reorderTasks
})(Tasks);
