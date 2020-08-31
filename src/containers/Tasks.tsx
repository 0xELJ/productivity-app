import React, { FC, useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useGlobalState } from '../hooks/useGlobalState';
import { useActions } from '../hooks/useActions';
import completedTasksSelector from '../selectors/completedTasksSelector';
import pendingTasksSelector from '../selectors/pendingTasksSelector';
import activeTaskSelector from '../selectors/activeTaskSelector';
import TaskList from '../components/task/TaskList';
import TaskCreate from './TaskCreate';
import TaskDetails from './TaskDetails';
import {
    fetchAllTasks,
    reorderTasks,
    selectTask,
    setCompletedTasksFilter,
    setPendingTasksFilter
} from '../actions/tasks';
import { TaskFilters } from '../constants/TaskFilters';

const Tasks: FC = () => {
    const pendingTasks = useGlobalState(pendingTasksSelector);
    const completedTasks = useGlobalState(completedTasksSelector);
    const activeTask = useGlobalState(activeTaskSelector);
    const filters = useGlobalState(({ filters }) => filters);
    const [getAllTasks, setSelectedTask, setPendingFilter, setCompletedFilter, reorderTaskList] = useActions([
        fetchAllTasks,
        selectTask,
        setPendingTasksFilter,
        setCompletedTasksFilter,
        reorderTasks
    ], []);
    const [showCreateTask, setShowCreateTask] = useState(false);
    const [showTaskDetails, setShowTaskDetails] = useState(false);

    useEffect(() => {
        getAllTasks();
    }, [getAllTasks]);

    const toggleCreateTask = () => {
        setShowCreateTask(!showCreateTask);
    };

    const toggleTaskDetails = () => {
        setShowTaskDetails(!showTaskDetails);
    };

    const handleSelectTask = (id: string) => {
        toggleTaskDetails();
        setSelectedTask(id);
    };

    const handlePressPendingFilter = (filter: TaskFilters) => {
        setPendingFilter(filter);
    };

    const handlePressCompletedFilter = (filter: TaskFilters) => {
        setCompletedFilter(filter);
    };

    const handleDrag = (startId: string, endId: string) => {
        reorderTaskList(startId, endId);
    };

    return (
        <section className="my-5">
            <div className="container">
                <Button onClick={toggleCreateTask} variant="success" size="lg">Agregar tarea</Button>
                <Row className="mt-4">
                    <Col md="6" className="mb-4">
                        <TaskList
                            title="Tareas pendientes"
                            tasks={pendingTasks}
                            onDragEnd={handleDrag}
                            onSelectTask={handleSelectTask}
                            onPressFilter={handlePressPendingFilter}
                            currentFilter={filters.pendingFilter}
                            activeTaskId={activeTask?.id}
                        />
                    </Col>
                    <Col md="6" className="mb-5">
                        <TaskList
                            title="Tareas completadas"
                            tasks={completedTasks}
                            onDragEnd={handleDrag}
                            onSelectTask={handleSelectTask}
                            onPressFilter={handlePressCompletedFilter}
                            currentFilter={filters.completedFilter}
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

export default Tasks;
