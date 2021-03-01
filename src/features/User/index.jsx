import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import UserList from "./UserList";


User.propTypes = {

};

function User(props) {
    const [userList, setUserList] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/users')
            .then(results => results.json())
            .then((data) => {
               setUserList(data);
            },
                (error) => {
                    setError(error);
                }
                )
    }, [])
    return (
        <div>
            <h1>list user</h1>
            <UserList userList = {userList} ></UserList>
        </div>
    );
}

export default User;