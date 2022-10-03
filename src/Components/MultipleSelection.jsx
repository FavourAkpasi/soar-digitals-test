import Select from "react-select";
import axios from "axios";

import React, { useEffect, useState } from "react";

const MultipleSelection = ({ url }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios(url)
      .then((response) => {
        const data = response.data.map((user) => user.name);
        setUsers(data);
      })
      .catch((error) => {
        console.log("error fetching data", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "loading...";
  if (error) return "error";

  const usersObject = users.map((user) => {
    return {
      label: user,
      value: user,
    };
  });

  return (
    <>
      <Select
        defaultValue={[usersObject[2], usersObject[3]]}
        isMulti
        name="users"
        options={usersObject}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </>
  );
};

export default MultipleSelection;
