import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('http://localhost:3001/users');
            const users = await response.json();
            setUsers(users);
        }
        fetchUsers();
    }, []);

    return (
        <div>
            {users.map(u => (<div key={u.id}>{u.name} <NavLink to={`/users/${u.id}`}>Edit</NavLink></div>))}
        </div>
    );
};

export default UserList;