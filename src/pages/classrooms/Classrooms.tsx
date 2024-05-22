import axios from "axios";
import React, { useEffect, useState } from "react";

interface Classes {
  name: string;
}

const Classrooms: React.FC = () => {
  const [classList, setClassList] = useState<[]>();

  useEffect(() => {
    getClasses();
  }, []);

  function getClasses() {
    axios
      .get("http://localhost:8080/schoolclass")
      .then((response) => {
        setClassList(response.data);
        console.log(classList);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <div>
        {classList && (
          <ul>
            <li className="flex flex-col w-fit">
              {classList.map((i) => (
                <button className="m-4">Classe: {i}</button>
              ))}
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Classrooms;
