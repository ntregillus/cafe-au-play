import React from 'react';
import Markdown from 'react-markdown';
import { Parallax, Background } from 'react-parallax';
import ServicesPage from './ServicesPage';
import MembershipsPage from './MembershipsPage';
import OurStoryPage from './OurStoryPage';
const servicesList = `

Cafe au Play services include: 
*  Child-friendly playspace and lounge
*  Co-working space for parents with onsite childcare
*  Classes, playgroups and support for parents of young children
*  Evening cafe events for youth gatherings and ''parent night out''
*  Prenatal Yoga, Breastfeeding Support and Parenting Skills
`;

const HomePage = () => (
    <div>
    <div className="container">
        <h1 className="center-title">What is Cafe au Play?</h1>
        <p className="newspaper">
            For many parents, extended family is far away. The vision of Cafe au Play is 
            community, friendship and peer support. Our mission is to provide a safe space 
            for parents and youth to gather, share ideas, find friends and nurture healthy 
            relationships. 
        </p>
        <p className="newspaper">
            For many parents, extended family is far away. The vision of Cafe au Play is 
            community, friendship and peer support. Our mission is to provide a safe space 
            for parents and youth to gather, share ideas, find friends and nurture healthy 
            relationships.
        </p>
        <Markdown source={servicesList} />
        <p className="newspaper">
        Cafe au Play is a non-profit organization with fiscal sponsorship through the 
        Community Foundation serving SW Colorado. The Durango Cafe au Play has moved 
        into our own space in the Smiley Building, Room 201. The Unitarian Universalist 
        Fellowship of Durango is still hosting our free baby meet-up on Thursday mornings. 
        </p>
    </div>
    <Parallax
        bgImage="images/boy-in-chair.webp"
        bgImageAlt="boy in chair image"
        strength={600}
    >
        <div style={{height: '100vh'}}></div>
    </Parallax>
    <ServicesPage />
    <Parallax
        bgImage="images/boy-in-chair.webp"
        bgImageAlt="boy in chair image"
        strength={600}
    >
        <div style={{height: '100vh'}}></div>
    </Parallax>
    <MembershipsPage />
    <Parallax
        bgImage="images/boy-in-chair.webp"
        bgImageAlt="boy in chair image"
        strength={600}
    >
        <div style={{height: '100vh'}}></div>
    </Parallax>
    <OurStoryPage />
    </div>
);

export default HomePage;