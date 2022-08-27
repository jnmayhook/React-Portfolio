import React from 'react';

function Header({ currentPage, handlePageChange }) {
    return (
        <>
            <header className="navbar navbar-expand-md navbar-dark bd-navbar sticky-top">
                <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap" aria-label="Main navigation">
                    <div className="d-lg-none"></div>

                    <a className="navbar-brand p-0 me-0 me-lg-2" href="/React-Portfolio" aria-label="Nathan Mayhook">
                        Nathan Mayhook
                    </a>

                    <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-label="Toggle navigation">
                        <i className="bi bi-three-dots"></i>
                    </button>

                    <div className="offcanvas-lg offcanvas-end flex-grow-1" tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel" data-bs-scroll="true">
                        <div className="offcanvas-header px-4 pb-0">
                            <h5 className="offcanvas-title text-white" id="bdNavbarOffcanvasLabel">Menu</h5>
                            <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar"></button>
                        </div>

                        <div className="offcanvas-body p-4 pt-0 p-lg-0">
                            <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
                                <li className="sidebar-brand"><a href="#page-top"></a></li>
                                <li className="nav-item py-2 px-3">
                                    <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                                        About
                                    </a>
                                </li>
                                <li className="nav-item py-2 px-3">
                                    <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                                        Portfolio
                                    </a>
                                </li>
                                <li className="nav-item py-2 px-3">
                                    <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                                        Contact
                                    </a>
                                </li>
                                <hr>
                                </hr>
                                <ul className="nav-icons d-lg-none">
                                    <li><a href="tel:9079525304"><img src="/assets/img/icon_phone.png" alt="Phone Icon" /></a></li>
                                    <li><a href="mailto:jnmayhook@gmail.com"><img src="/assets/img/icon_email.png" alt="Email Icon" /></a>
                                    </li>
                                    <li><a href="https://github.com/jnmayhook"><img src="/assets/img/icon_git_hub.png"
                                        alt="Github Icon" /></a></li>
                                </ul>
                            </ul>

                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;