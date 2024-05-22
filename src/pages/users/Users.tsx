import axios from "axios";
import { Pagination } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Votes {
  subjectDescription: string;
  vote: number;
  vote_date: string;
  notes: string;
}
interface Data {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  votes: Votes[];
}

const Users: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("http://localhost:8080/api/users")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
    console.log(data);
  }
  // const location = useLocation();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  // Funzione per cambiare pagina
  const setPage = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }
    setCurrentPage(page);
  };

  return (
    <>
      {/* {data && (
        <div>
          {data.map((user) => (
            <ul>
              <div className="border-b-2 border-blue-400">
                <li>User: {user.firstName + " " + user.lastName}</li>
                <li>Role: {user.role}</li>
                <li>User email: {user.email}</li>
                <li>
                  Votes:{" "}
                  {user.votes.map((vote) => (
                    <ul>
                      <li>
                        {"Subject: " +
                          vote.subjectDescription +
                          " Vote: " +
                          vote.vote +
                          " Date: " +
                          vote.vote_date.slice(0, 10) +
                          " Notes: " +
                          vote.notes}
                      </li>
                    </ul>
                  ))}
                </li>
              </div>
            </ul>
          ))}
        </div>
      )} */}
      {currentItems && (
        <div>
          {currentItems.map((c) => (
            <ul className="border-b-2 border-green-400">
              <li>User: {c.firstName + " " + c.lastName}</li>
              <li>Role: {c.role}</li>
              <li>User email: {c.email}</li>
              <li>
                Votes:{" "}
                {c.votes.map((vote) => (
                  <ul>
                    <li>
                      {"Subject: " +
                        vote.subjectDescription +
                        " Vote: " +
                        vote.vote +
                        " Date: " +
                        vote.vote_date.slice(0, 10) +
                        " Notes: " +
                        vote.notes}
                    </li>
                  </ul>
                ))}
              </li>
            </ul>
          ))}
        </div>
      )}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setPage}
      />
    </>
  );
};

export default Users;
