import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Container } from 'react-bootstrap';

const ServiceList = (props) => {
    // const Serve = props.serve || [];
    // const { name, cost, star, starCount, img } = Serve;
    const MoreServe = props.moreserve || [];
    const { name, cost, star, starCount, img } = MoreServe;



    return (
        // <div className="">
        //     <Container className="d-flex justify-content-around">  <Card style={{ width: '18rem', display: 'flex' }} className="m-5">
        //         <Card.Img variant="top" src={img} />
        //         <Card.Body>

        //             <Card.Text>
        //                 <h5>Course Name:{name}</h5>
        //                 <h5>Price:{cost}</h5>
        //                 <h5>Rating:{star}</h5>
        //                 <h5>Total student:{starCount}</h5>
        //             </Card.Text>
        //             <Button variant="primary">Enroll</Button>
        //         </Card.Body>
        //     </Card></Container>
        <div className="">

            <Container >
                <div className="d-flex justify-content-around">
                    <Card style={{ width: '18rem' }} className="m-5">
                        <Card.Img variant="top" src={img} />
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

        </div >


    );
};

export default ServiceList;