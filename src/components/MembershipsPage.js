import React from 'react';
import Markdown from 'react-markdown';
const membershipPerks = `
**What do you get as a member?**
* Drop-in Access to the Play Space during "business hours," 9:30am - 4pm Monday-Friday (non-member rate is $5)*
* Meet-ups and Classes (non-member rate is $5)
* Discounted and Priority Access to childcare @ $8/hr and 20% discount for siblings (non-member rate is $10/hr)
* Desk Space in the loft with free WiFi
* Complimentary Coffee, Tea and Water
`;
const discounts = `
**Pre-Pay and Save!**
* 1 Year - $200 (2 months free, best value!)
* 6 months - $105 (3 weeks free)
* 3 Months - $55 (1 week free)
* Month to Month - $20/Month

Sign-up online or stop by the cafe to 
fillout a membership form today!
`;
const MembershipsPage = () => (
    <div className="container">
        <h1 className="center-title">
            Memberships
        </h1>
        <p className="newspaper">
            As a non-profit, our biggest expense is 
            rent of the space, help us keep our pinwheels 
            spinning by becoming a Cafe au Play member! 
            Your membership is tax deductible, what a 
            win-win!
        </p>
        <Markdown source={membershipPerks} />
        <Markdown source={discounts} />
        <a href="https://goo.gl/forms/2Ckcn2l0D6sHQNfR2">
            Become a Member Today! Click Here!
        </a>
    </div>
);

export default MembershipsPage;