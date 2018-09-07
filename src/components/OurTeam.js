import React from 'react';
import Markdown from 'react-markdown';
const test = `**same text**`;
const test2 = {
    synopsis: `**same text**
    this gets rendered correctly

    this does not
    `
}

const members = [
    {
        image: '/images/MeetKelly.webp',
        synopsis: `**Meet Kelly!**
        Kelly is a Fort Lewis Alum with a background in business 
        development, account management and sales. She works remotely 
        at home for a company based in San Francisco, California. 
        Kelly is a Board Member and acting in an advisory role to the 
        Cafe along with volunteering her time to help Liza launch the 
        space.`
    },
    {
        image: '/images/MeetLiza.webp',
        synopsis: `**Meet Liza!**
        Liza, MSW, is a local Parent/Youth Coach and Play 
        Therapist. Liza was previously the Director at the Family 
        Centers Coalition of Durango where many parents were 
        involved as peer leaders for play groups, parenting classes 
        and other activities.
        Liza has over 30 years of experience in health and human 
        services and is responsible for developing the Durango Cafe 
        au Play space and group calendar. Liza will offer training 
        to volunteer parents interested in leading groups and 
        coordinates cafe activities.
        In addition, Liza coordinates a peer mentor project for 
        youth living with challenging health conditions 
        (epilepsy, diabetes, autism, TBI, depression, etc). 
        Liza leads peer support groups for their parents as well 
        as coordinating teens and young adults that mentor others. 
        Her passion is peer support, and she hopes the Cafe au Play 
        space will be an incubator for all these activities. 
        Currently Liza leads youth activities through her home 
        office, and is developing play groups at our partner 
        location (UUFD) and at the cafe`
    }
];

const OurTeam = (props) => (
<div>
    <h2 className="center-title">Meet our Team</h2>
        <div className="member-list">
        { members.map((item, index) => (
        <div className="team-member" key={index}>
            <img className="portrait" src={item.image} />
            <div className="synopsis">
                <Markdown source={item.synopsis} />
            </div>
        </div>))
        }
        </div> 
</div>
);

export default OurTeam;