import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface Intern {
  id: number;
  name: string;
  // ...
}

export const InternList: React.FC = () => {
  const [interns, setInterns] = useState<Intern[]>([]);

  useEffect(() => {
      const fetchInterns = async () => {
          const response = await fetch('http://localhost:3001/interns');
          const interns: Intern[] = await response.json();
          setInterns(interns);
      }
      fetchInterns();
  }, []);

  return (
    <div>
      {interns.map(intern => (
        <div key={intern.id}>
          {intern.name} <NavLink to={`/interns/${intern.id}`}>Edit</NavLink>
        </div>
      ))}
    </div>
  )
}
