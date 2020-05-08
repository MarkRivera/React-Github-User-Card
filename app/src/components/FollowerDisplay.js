import React from 'react';
import { 
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle } from 'reactstrap';
import './FollowerDisplay.css';


function FollowerDisplay ({ followers }) {
    console.log(followers)
    return(
        <>
            {
                followers.length < 0 ?
                    (
                        <p>
                            Looks like you have no followers to display.
                        </p>
                    ) :

                    (
                        
                        followers.map(follower => {
                            return (
                                <Col>
                                    <Card>
                                        <CardImg src={follower.avatar_url} />
                                        <CardBody>
                                            <CardTitle>
                                                <strong className="text-info">
                                                    {follower.login}
                                                </strong>
                                            </CardTitle>
                                            <CardSubtitle>
                                                <a href={follower.html_url}>
                                                    Proflie Link
                                                </a>
                                            </CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })
                        
                    )
                        
                    
            }
        </>
    )
}

export default FollowerDisplay;