import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const InternList = () => {

    const [interns, setInterns] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('http://localhost:3001/interns');
            const interns = await response.json();
            setInterns(interns);
        }
        fetchUsers();
    }, []);

    return (
        <div>
            {interns.map(u => (<div key={u.id}>{u.name} <NavLink to={`/interns/${u.id}`}>Edit</NavLink></div>))}
        </div>
    );
};

export default InternList;