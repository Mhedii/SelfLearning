import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Homedata from './Homedata';

const Home = () => {

    const [homepages, setHomepage] = useState([]);

    useEffect(() =>
        fetch('./learning.JSON')
            .then(res => res.json())
            .then(data => setHomepage(data))
        , [])

    return (
        <div className="">
            <section>
                <div className="mt-5 d-flex bg-success justify-content-center">
                    <div><h3>Find The Most Exiting </h3>
                        <h3>Online Courses</h3>

                    </div>
                    <div><img src="./pic.jpg" alt="" /></div>
                </div>

            </section>
            <div>
                <Carousel >
                    <Carousel.Item className="text-primary">
                        <img
                            className="d-block w-100"
                            src="https://www.atriainnovation.com/wp-content/uploads/2021/02/portada-1080x675.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className="text-warning">
                            <h3>Machine Learning</h3>
                            <p>Very cheap cost you will learn better</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://img.etimg.com/thumb/msid-77198656,width-640,resizemode-4,imgsize-678126/first-what-is-the-big-fuss-really.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption className="text-warning">
                            <h3>Artificial Intelligence</h3>
                            <p>Today our world is tech related so this will be great </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200203200336/13-Things-You-Should-Know-Before-You-Enter-In-Web-Development.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption className="text-warning">
                            <h3>Web Development</h3>
                            <p>We will guide you to fullfill your dream</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
            <div className="d-flex m-5 services-Container">



                {

                    homepages.map(homepage => <Homedata
                        key={homepage.key}
                        mainpage={homepage}
                    ></Homedata>)
                }

            </div>

        </div >
    );

};


export default Home;