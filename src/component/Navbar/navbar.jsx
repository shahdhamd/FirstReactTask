import React, { Component } from 'react'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container p-2">
                        <a className="navbar-brand fs-3" href="/#">START BOOTSTRAP</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse w-100 justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active fs-4" aria-current="page" href="/#">Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active fs-4" href="#">About</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link  active fs-4" href="#">
                                        contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}
