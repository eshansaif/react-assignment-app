import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAd, faPlus, faTasks, faGenderless, faBriefcase, faEnvelope, faMobile, faPhone, faTransgenderAlt, faPersonBooth, faMale, faMarsDouble, faMoneyBill } from '@fortawesome/free-solid-svg-icons'

const Profile = (props) => {
    //console.log(props);
    const {image, first_name, last_name, email, phone, hire_rate, gender, skill} = props.freelancer;
    return (
        <div className="single-profile">
            <div>
                <img src={image} alt=""/>
            </div>
            <div className="description">
                <h3 className="heading"><a href="">{first_name} {last_name}</a></h3>
                <h5 className="heading">({skill})</h5>
                
                <div className="paragraph">
                    <p><FontAwesomeIcon icon={faEnvelope} /> {email}</p>
                    <p> <FontAwesomeIcon icon={faPhone} /> {phone}</p>
                    <p> <FontAwesomeIcon icon={faMarsDouble} /> {gender}</p>
                    <p> <FontAwesomeIcon icon={faMoneyBill} /> $ {hire_rate}</p>
                </div>
                <button onClick={() => props.handleHireFreelancer(props.freelancer)} className="freelancer-button"><FontAwesomeIcon icon={faPlus} /> hire me</button>
            </div>
        </div>
    );
};

export default Profile;