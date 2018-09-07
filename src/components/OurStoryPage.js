import React from 'react';
import OurTeam from './OurTeam';

const OurStoryPage = (props) => (
    <div className="container">
        <h1>Our Story</h1>
        <p className="newspaper">
        Kelly Tregillus, one of the co-founders, 
        moved to Durango from San Francisco in 2016 
        and was disappointed to see the lack of support
        and space in Durango to take her, then, 9 month 
        old daughter to meet other moms or unwind in a 
        child friendly cafe. She also worked from home 
        and found the change to remote work a little 
        isolating at times, prompting her to work from 
        coffeeshops several days a week for a change of pace. 
        </p>
        <p className="newspaper">
        Not prepared to move to Durango, Kelly's daughter 
        was not on any childcare lists, therefore, she had 
        to patch together a nanny, mother in law and a 2 day 
        per week childcare center to continue working. 
        If any of those options weren't available, she had 
        to try to work (distracted!!) and attempt to poorly 
        supervise her daughter. That and the isolation from 
        other parents and families lead to the concept of 
        Durango Cafe au Play.
        </p>
        <p>
        Liza Tregillus, the other co-founder is a mother 
        of four, now adult, children. After moving to Durango 
        from Chicago with her two oldest boys, then 5 and 1 
        years old, she missed the family daycare co-op she 
        had led in the city. Liza quickly found her niche 
        at the Mother's Center of Durango (now called 
        The <a href="http://www.lpfcc.org/">
            Family Centers Coalition
        </a>) and experienced first hand 
        how a sense of community can enhance a family's 
        ability to thrive in Durango.
        </p>
        <h2 className="center-title">The Problem</h2>
        <p className="newspaper">
        New and expecting parents in La Plata county have 
        limited convenient local resources or spaces to take 
        classes, meet new friends and have assistance with 
        childcare. There is a lack of support for families 
        of young children and most cafes are not family 
        friendly, not to mention there is a shortage of 
        easily accessible, reliable, affordable, quality 
        childcare options.
        </p>
        <p className="newspaper">
            Our ideal space will provide not just an engaging 
            play space, but also a drop-in childcare option for 
            children while the parent remains onsite. We provide 
            desk space for parents or caregivers to work, check 
            emails, make calls, etc. in a separate area from 
            their children while they are supervised by a trained 
            and experienced staff member. Space is also allocated 
            for various meetups and classes, rental space for 
            classes/groups/parties, and an option for an 
            occasional date night.
        </p>
        <OurTeam />
    </div>
);

export default OurStoryPage;