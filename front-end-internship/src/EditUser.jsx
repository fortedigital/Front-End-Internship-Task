import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const EditUser = () => {
    const { id } = useParams();

    useEffect(() => {
        //TODO: get user from REST api from http://localhost:3001/users/:id
        console.log(`I want to get user with id: ${id}!`)
    }, [id]);

    return (
        <div>
            <NavLink to="/">Back to list </NavLink>
            <form>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Surname</label>
                <input type="text" name="surname" />
                <label>Email</label>
                <input type="text" name="email" />
                <label>Password</label>
                <input type="password" name="password" />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default EditUser;