import React from 'react';
import Markdown from 'react-markdown';
const HomePage = () => (
    <div className="container">
        <Markdown 
        source="
        # What is Cafe au Play?

For many parents, extended family is far away. The vision of Cafe au Play is 
community, friendship and peer support. Our mission is to provide a safe space 
for parents and youth to gather, share ideas, find friends and nurture healthy 
relationships. 

Cafe au Play services include: 
*  Child-friendly playspace and lounge
*  Co-working space for parents with onsite childcare
*  Classes, playgroups and support for parents of young children
*  Evening cafe events for youth gatherings and ''parent night out''
*  Prenatal Yoga, Breastfeeding Support and Parenting Skills


Cafe au Play is a non-profit organization with fiscal sponsorship through the 
Community Foundation serving SW Colorado. The Durango Cafe au Play has moved 
into our own space in the Smiley Building, Room 201. The Unitarian Universalist 
Fellowship of Durango is still hosting our free baby meet-up on Thursday mornings. 
" />

    </div>
);

export default HomePage;