import React, { FC } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import TaskList from '../components/task/TaskList';
import { Task } from '../types/Task';

const tasks: Task[] = [
    {
        id: '1',
        name: 'Card Title 1',
        description: 'Some quick example text to build on the card and make up the bulk of the card\'s content.',
        durationTime: '01:15:00',
        timeLeft: '00:50:33',
        active: true,
        createdAt: '15/10/2019',
        enabled: true,
    },
    {
        id: '2',
        name: 'Card Title 2',
        description: 'Some quick example text to build on the card and make up the bulk of the card\'s content.',
        durationTime: '01:15:00',
        timeLeft: '00:50:33',
        active: false,
        createdAt: '15/10/2019',
        enabled: true,
    },
    {
        id: '3',
        name: 'Card Title 3',
        description: 'Some quick example text to build on the card and make up the bulk of the card\'s content.',
        durationTime: '01:15:00',
        timeLeft: '00:50:33',
        active: false,
        createdAt: '15/10/2019',
        enabled: true,
    },
    {
        id: '4',
        name: 'Card Title 4',
        description: 'Some quick example text to build on the card and make up the bulk of the card\'s content.',
        durationTime: '01:15:00',
        timeLeft: '00:50:33',
        active: false,
        createdAt: '15/10/2019',
        enabled: true,
    },
    {
        id: '5',
        name: 'Card Title 5',
        description: 'Some quick example text to build on the card and make up the bulk of the card\'s content.',
        durationTime: '01:15:00',
        timeLeft: '00:50:33',
        active: false,
        createdAt: '15/10/2019',
        enabled: true,
    },
];

const completedTasks: Task[] = [
    {
        id: '6',
        name: 'Card Title 6',
        description: 'Some quick example text to build on the card and make up the bulk of the card\'s content.',
        durationTime: '01:15:00',
        timeLeft: '00:50:33',
        active: false,
        createdAt: '15/10/2019',
        enabled: false,
    },
    {
        id: '7',
        name: 'Card Title 7',
        description: 'Some quick example text to build on the card and make up the bulk of the card\'s content.',
        durationTime: '01:15:00',
        timeLeft: '00:50:33',
        active: false,
        createdAt: '15/10/2019',
        enabled: false,
    },
    {
        id: '8',
        name: 'Card Title 8',
        description: 'Some quick example text to build on the card and make up the bulk of the card\'s content.',
        durationTime: '01:15:00',
        timeLeft: '00:50:33',
        active: false,
        createdAt: '15/10/2019',
        enabled: false,
    },
    {
        id: '9',
        name: 'Card Title 9',
        description: 'Some quick example text to build on the card and make up the bulk of the card\'s content.',
        durationTime: '01:15:00',
        timeLeft: '00:50:33',
        active: false,
        createdAt: '15/10/2019',
        enabled: false,
    },
    {
        id: '10',
        name: 'Card Title 10',
        description: 'Some quick example text to build on the card and make up the bulk of the card\'s content.',
        durationTime: '01:15:00',
        timeLeft: '00:50:33',
        active: false,
        createdAt: '15/10/2019',
        enabled: false,
    },
];

const Tasks: FC<any> = () => {
  return (
      <section className="my-5">
          <div className="container">
              <h1 className="text-center mb-5">Tareas</h1>
              <Button variant="success" size="lg">Agregar tarea</Button>
              <Row className="mt-4">
                  <Col md="6" className="mb-4">
                      <TaskList title="Tareas pendientes" tasks={tasks} />
                  </Col>
                  <Col md="6">
                      <TaskList title="Tareas completadas" tasks={completedTasks} />
                  </Col>
              </Row>
          </div>
      </section>
  );
};

export default Tasks;
