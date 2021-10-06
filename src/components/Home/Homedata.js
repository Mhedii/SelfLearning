import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Homedata = (props) => {
    const Mainpage = props.mainpage || [];
    const { name, cost, star, starCount, img } = Mainpage;




    return (

        <div className="">



            <Container>
                <div className="d-flex">
                    <Card style={{ width: '18rem', height: "450px" }} className="ms-5">
                        <Card.Img variant="top" style={{ height: "250px" }} src={img} />
                        <Card.Body>

                            <Card.Text>
                                <h5>Course Name:{name}</h5>
                                <h5>Price:{cost}</h5>
                                <h5>Rating:{star}</h5>
                                <h5>Total student:{starCount}</h5>
                            </Card.Text>
                            <Button variant="primary">Enroll</Button>
                        </Card.Body>
                    </Card>
                </div>

            </Container>





        </div>

    );
};

export default Homedata;