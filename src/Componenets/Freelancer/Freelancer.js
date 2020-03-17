import React, { useState } from 'react';
import fakeUser from '../../fakeData/fakeUsers';
import './Freelancer.css';
import Profile from '../Profile/Profile';
import Cost from '../Cost/Cost';

const Freelancer = () => {
    
    const first15 = fakeUser.slice(0,15);
    const [freelancers, setFreelancers] = useState(first15);

    const [cost, setCost] = useState([]);

    const handleHireFreelancer = (freelancer) => {
        //console.log("freelancer hired", freelancer);
        const newCost = [...cost, freelancer];
        setCost(newCost);
    }

    return (
        <div className="freelancer-container">

            <div className="profile-container">
                
               
                    {
                        freelancers.map(freelancer => <Profile 
                            handleHireFreelancer = {handleHireFreelancer}
                            freelancer={freelancer}
                            >

                            </Profile>)
                        

                    }
                    
                
            </div>

            <div className="">
                <Cost cost={cost}></Cost>
            </div>
            
        </div>
    );
};

export default Freelancer;