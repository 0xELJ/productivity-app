import React, { FC } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import TaskList from '../components/task/TaskList';
import { TasksState } from '../types/TasksState';

const Tasks: FC<any> = props => {
  return (
      <section className="my-5">
          <div className="container">
              <h1 className="text-center mb-5">Tareas</h1>
              <Button variant="success" size="lg">Agregar tarea</Button>
              <Row className="mt-4">
                  <Col md="6" className="mb-4">
                      <TaskList title="Tareas pendientes" tasks={props.tasks.pending} />
                  </Col>
                  <Col md="6">
                      <TaskList title="Tareas completadas" tasks={props.tasks.completed} />
                  </Col>
              </Row>
          </div>
      </section>
  );
};

const mapStateToProps = (state: { tasks: TasksState }) => ({ tasks: state.tasks });

export default connect(mapStateToProps)(Tasks);
