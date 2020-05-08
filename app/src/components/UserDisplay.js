import React from 'react';
import { Row, Col, Media } from 'reactstrap';
import './UserDisplay.css';

import FollowerDisplay from './FollowerDisplay';

function UserDisplay ({ userImg, userLocation, userFollowers, userBio, userRepos, userSite, followers }) {
    return (
        <Row className="justify-content-center user-card">
            <Col className="my-4">
                <Media>
                    <Media left middle className="mx-auto">
                        <Media object src={userImg} alt="User Photo" className="img-thumbnail rounded img-fluid" xs="12" sm="12" md="4" />
                    </Media>
                </Media>
            </Col>

            <Col xs="12" sm="12" md="6" className="text-center my-4 align-items-center">
                <section className="user-info">
                <p>
                    You're a Developer based in <strong className="text-info">{userLocation}</strong>
                </p>

                <p>
                    Currently you have <strong className="text-info">{userFollowers}</strong> followers! You're popular!
                </p>

                { userBio === null ? 
                    (
                        <p>
                            Not a person of many words are you?
                        </p>
                    ) : 
                    
                    (
                        <p>
                            Here is what you say about yourself:
                            {userBio}
                        </p>
                    ) 
                }

                <p>
                    You have <strong className="text-info">{userRepos}</strong> Repos.  
            
                    {userRepos <= 0 ? " Don't worry, we all start somewhere!" : " Nice!" }
                </p>

                <p>
                    Here's a link to your site:
                    <br/>
                    <a href={userSite}>Mark's Website</a>
                </p>
                </section>
            </Col>
            
            <div className="w-100"></div>
            
            <Col>
                <Row className="align-items-center justify-content-center" xs="1" sm="2" md="4">
                    <FollowerDisplay followers={followers} />
                </Row>
            </Col>
        </Row>
    );
}

export default UserDisplay