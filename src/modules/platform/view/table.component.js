import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

import { addUser } from '../../features/user-reducer';
import UserChart from '../../features/components/chart.component';

function UserTable() {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users.value);
    
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');
    const [employee, setEmployee] = useState('');

    return (
        <>
            <div className='form-inputs mt-4 mb-2 col-lg-7 ms-auto me-auto text-center'>
                <input 
                    onChange ={(e) => {setName(e.target.value)}}
                    type='text' placeholder="Name..."
                />
                <input  
                    onChange={(e) => {setPosition(e.target.value)}} 
                    type='text' placeholder="position"
                />
                <input 
                    onChange ={(e) => {setSalary(e.target.value)}}
                    type='number' placeholder="salary"
                />
                <input  
                    onChange={(e) => {setEmployee(e.target.value)}} 
                    type='number' placeholder="employee"
                />
                <button
                    style={{background: "#144D43", color: "white", fontWeight:"bold"}}
                    onClick={()=> {
                        dispatch(
                            addUser({
                                id: userList[userList.length - 1].id + 1 , name, position, salary, employee
                            })
                        )
                    }}
                >Add User</button>
            </div>

            <Table style={{background:"white"}} striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>position</th>
                    <th>salary</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.position}</td>
                                <td>{user.salary}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
          <UserChart />
        </>
    );
}

export default UserTable;