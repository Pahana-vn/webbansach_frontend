import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">BookStore.vn</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Trang chủ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Thể loại sách</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-book"></i> Quy định và chính sách
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Quy định 1</a></li>
                                <li><a className="dropdown-item" href="#">Quy định 2</a></li>
                                <li><a className="dropdown-item" href="#">Quy định 3</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Tìm kiếm" aria-label="Search"/>
                        <button className="btn btn-outline-light" type="submit"><i className="fas fa-search"></i>
                        </button>
                    </form>

                    <div className="ms-3">
                        <a href="#" className="text-white me-3"><i className="fas fa-shopping-cart"></i></a>
                        <a href="#" className="text-white"><i className="fas fa-user"></i></a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;