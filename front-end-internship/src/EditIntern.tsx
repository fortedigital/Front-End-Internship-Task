import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

export const EditIntern: React.FC = () => {
  const { id } = useParams();

  useEffect(() => {
      //TODO: get intern from REST api http://localhost:3001/interns/:id
      console.log(`I want to get intern with id: ${id}!`)
  }, [id]);

  return (
    <div>
        <NavLink to="/">Back to list </NavLink>
        <form>
            <label>Name</label>
            <input type="text" name="name" />              
            <label>Email</label>
            <input type="text" name="email" />

            <input type="submit" value="Submit" />
        </form>
    </div>
  );
}
