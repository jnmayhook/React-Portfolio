import React from 'react';

function Portfolio() {
    return (
        <>
            <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true"
                        aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="slide-one-bg" aria-hidden="true"></div>

                        <div className="container">
                            <div className="carousel-caption text-start">
                                <img className="collective-cup-logo" src="./assets/img/collective_cup_logo.svg"
                                    alt="Collective Cup logo" />
                                <p>A full stack application, Collective Cup is a forum application where users can create posts
                                    pertaining to their coding journeys. </p>
                                    <p><a class="btn btn-collective-cup" href="#project-two">View Project</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="slide-two-bg" aria-hidden="true"></div>

                        <div className="container">
                            <div className="carousel-caption text-start">
                                <img className="pawsome-logo" src="./assets/img/pawsome-petfinder-logo.png"
                                    alt="Pawseome Petfinder logo" />
                                <p>Searches for pet adoption organizations based on a user's input of a city, where they can
                                    find and adopt their next furry friend!</p>
                                    <p><a class="btn btn-pawsome" href="#project-one">View Project</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
            <span id="project-one"></span>
                <div className="text-secondary px-4 text-center">
                    <div className="py-4">
                        <h1 className="display-5 fw-bold">Work</h1>
                    </div>
                </div>
                <div className="row featurette py-4">
                    <div className="col-md-7 col-sm-12">
                    <h2 className="featurette-heading fw-normal lh-1">Pawseome Petfinder</h2>
                        <p className="lead">What does this application do and why?</p>
                        <ul>
                            <li>Searches for pet adoption organizations based on a user's input of a city</li>
                            <li>Autocompletes city searches for the user</li>
                            <li>Displays a list of organizations in or near the city entered by the user</li>
                            <li>Sorts said organizations by distance, closest to farthest away</li>
                            <li>Displays a map of the city the user inputs.</li>
                            <li>Gives the user a list of nearby organizations where they can adopt their next furry friend!
                            </li>
                        </ul>

                        <p className="lead">Step-by-Step on how to run the application</p>
                        <ul>
                            <li>Begin typing city into Search Bar</li>
                            <li>Choose from autocomplete dropdown list which city</li>
                            <li>When the Search Button is clicked, a list of organizations sorted by nearest to farthest is
                                shown</li>
                            <li>Click on an organization to find out more info on the shelter and its available pets</li>
                            <li>If you wish to search another city, click the Clear History button and start again!</li>
                        </ul>
                        <a href="https://echandlerdavis.github.io/Project-1-Group-7/">Click here for the deployed app at Github.</a>




                        
                    </div>
                    <div className="col-md-5 col-sm-12">
                    <img className="w-100" src="./assets/img/work_section_img-1.jpg" alt="" />
                        
                    </div>
                </div>

                <hr className="featurette-divider" id="project-two"></hr>

                <div className="row featurette py-4">
                    <div className="col-md-7 col-sm-12 order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1">Collective Cup <span className="text-muted">information
                            hub...</span></h2>
                        <p className="lead">A full stack application, Collective Cup is a forum application where users can
                            create posts pertaining to their coding journeys. Posts can be viewed on the front page, and
                            individual posts have their own pages where users can leave comments. In order to interact with
                            posts beyond simple viewing, a user must make an account and be signed in. Only after can they
                            make and delete their own posts as well as leave comments.</p>

                        <p>The app was built using the Model-View-Controllers structure. For the views, the Handlebars
                            template language was used to create the display for the front end, with the Foundation CSS
                            library used to generate the aesthetic of the site. Data creation on the front end is sent and
                            stored in the local database on the backend to be retrieved and displayed back onto the front
                            pages. MySQL is the database used to store data; Sequelize is the module that allows us to
                            utilize object-relational mapping to manipulate and interact with the database using Javascript
                            code.</p>

                        <p>Since MySQL is a service that requires a password, in order to keep this sensitive information
                            safe when displayed in a public repository, we use the Dotenv module to obscure that within the
                            code when called by Sequelize and MySQL2. Users of the app will also have their passwords
                            encrypted when they are stored within the database using the bcrypt module.
                        </p>
                        <a href="https://collective-cup.herokuapp.com/">Click here for the deployed app on Heroku.</a>
                        

                    </div>
                    <div className="col-md-5 col-sm-12 order-md-1">
                    <img className="w-100" src="./assets/img/work_section_img-2.jpg" alt="" />
                    </div>
                </div>

                <hr className="featurette-divider"></hr>

                <div className="row featurette py-4">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">Featured Project 3</h2>
                        <p className="lead">Consequat orci eu purus volutpat hendrerit eget quis quam. Maecenas fringilla erat
                            sapien, interdum
                            laoreet diam malesuada vel. Fusce bibendum volutpat leo, sed dapibus odio elementum a. Maecenas
                            pretium euismod ipsum vel imperdiet. Sed et enim a odio facilisis commodo.</p>
                    </div>
                    <div className="col-md-5">


                    </div>
                </div>
                <hr className="featurette-divider"></hr>

            </div>
        </>
    );
}

export default Portfolio;