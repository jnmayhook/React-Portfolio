import React from 'react';

function Home() {
    return (
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
