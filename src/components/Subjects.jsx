import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/subjects')
      .then((response) => setSubjects(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Subjects</h2>
      <ul className="list-disc pl-5">
        {subjects.map((subject, index) => (
          <li key={index} className="mb-2">{subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default Subjects;