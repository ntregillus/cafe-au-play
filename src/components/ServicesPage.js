import React from 'react';
import {Link} from 'react-router-dom';
import Markdown from 'react-markdown';

const classesList = `
* Parenting Classes
    - prenatal
    - lactation
    - potty training
    - child behavior
    - sleep problems
    - and more!
* Arts and crafts
* Story time
* Music
* Prenatal Yoga
`;


const ServicesPage = () => (
    <div className="container">
        <h1 className="center-title">Services</h1>
        <div className="two-col">
            <div>
                <h2 className="center-title">Play Groups</h2>
                <p  className="newspaper">
                We currently host Tuesday, Thursday and Saturday 
                baby and toddler playgroups. We will continue to 
                expand our playgroups as demand and space is 
                available. See our calendar for an updated schedule.
                Please let us know how we can support you and your 
                family!
                </p>
                <p>
                    Complimentary coffee, tea and water is provided. 
                    We ask for a modest suggested donation to assist 
                    with space and material costs.
                </p>
            </div>
            <div>
                <h2 className="center-title">Drop in Childcare</h2>
                <p className="newspaper">
                    Need to get work done? Pay bills? Take a 
                    class in Smiley? Make calls or catch up with a friend?
                </p>
                <p  className="newspaper">
                We provide childcare Monday through Friday mornings 
                from 9:30 am - 12:30 pm. Please 
                <Link to="/reservations"> register here </Link>
                to reserve your spot. 
                All childcare is on a first come, first serve 
                basis on the registration site, so sign up ASAP to 
                reserve a space!
                </p>
            </div>
        </div>
        <div className="two-col">
            <div>
                <h2 className="center-title">Development Support</h2>
                <p className="newspaper">
                At times, being a child or parent is hard! Part of 
                our mission is to support parents and children
                experiencing challenges.
                </p>
                <p className="newspaper">
                Children and youth living with challenging health 
                conditions or developmental delays may themselves 
                benefit from peer support in addition to their 
                parents.
                </p>
                <p className="newspaper">
                Contact us for special requests!
                </p>
            </div>
            <div>
                <h2 className="center-title">CLASSES</h2>
                <p className="newspaper">
                    We offer a variety of classes 
                    for children and parents including:
                </p>
                <Markdown source={classesList}/>
            </div>
        </div>
        <div>
            <h2 className="center-title">Co-working Space</h2>
            <p className="newspaper">
                We provide comfortable work space for parents 
                while their children play with our trained staff. 
            </p>
        </div>
    </div>
);

export default ServicesPage;