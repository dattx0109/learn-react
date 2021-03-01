import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from "react-router";

UserList.propTypes = {

};

function UserList({userList}) {
    console.log(userList);
    return (
        <div className="card-group">
            {userList.map(user => (
                <a href="">
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                            <p key={user.id}></p>
                            <p className="card-text">{user.email}</p>
                            {/*<p className="card-text">{user.password}</p>*/}
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default UserList;