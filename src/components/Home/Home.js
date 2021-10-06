import React, { useEffect, useState } from 'react';
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