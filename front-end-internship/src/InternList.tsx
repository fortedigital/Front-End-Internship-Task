import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const InternList: React.FC = () => {
  const [interns, setInterns] = useState([]);

  useEffect(() => {
      const fetchInterns = async () => {
          const response = await fetch('http://localhost:3001/interns');
          const interns = await response.json();
          setInterns(interns);
      }
      fetchInterns();
  }, []);

  return (
    <div>
      Interns list
      {/* {interns.map(intern => (<div key={intern.id}>{intern.name} <NavLink to={`/interns/${intern.id}`}>Edit</NavLink></div>))} */}
    </div>
  )
}
