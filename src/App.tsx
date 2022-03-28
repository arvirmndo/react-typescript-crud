import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Button, Table, Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <div className = "container">
        <div className="my-auto">
          <h1 className="text-center">React-TypeScript User CRUD Demo</h1>
          <div className="text-right">
            <Button className="mb-3 btn-success">Add User</Button>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                    <Button className='mx-2 '>Edit</Button>
                    <Button variant='danger'>Delete</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default App;
