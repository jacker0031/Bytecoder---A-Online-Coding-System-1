import React, { Component } from "react";
import PROBLEMAPI from "../api/problems";
import axios from "axios";
const Profile = (props) => {
    let [problems, setProblems] = React.useState(""); // state hook
    React.useEffect(() => {
        // side effect hook
        axios
            .get("http://localhost:5000/api/v1/problems")
            .then(function (response) {
                setProblems(response.data);
                console.log(response.data);
            });
    }, []);

    return (
        <div class="container">
            <div class="main-body">
                <div class="row gutters-sm">
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img
                                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                        alt="Admin"
                                        class="rounded-circle"
                                        width="150"
                                    />
                                    <div class="mt-3">
                                        <h4>John Doe</h4>
                                        <p class="text-secondary mb-1">
                                            Full Stack Developer
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Full Name</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        Kenneth Valdez
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        fip@jukmuh.al
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Phone</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        (239) 816-9029
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Mobile</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        (320) 380-4539
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Address</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        Bay Area, San Francisco, CA
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card btn-box-row row-fluid">
                            <a href="#" class="btn-box big span4">
                                <i class=" icon-random"></i>
                                <b>65%</b>
                                <p class="text-muted">Total Submissions</p>
                            </a>
                            <a href="#" class="btn-box big span4">
                                <i class="icon-user"></i>
                                <b>15</b>
                                <p class="text-muted">Accuracy</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Profile;