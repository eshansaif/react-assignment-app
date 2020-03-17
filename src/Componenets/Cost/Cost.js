import React from 'react';
import './Cost.css';

const Cost = (props) => {
    const cost = props.cost;
    //const hire_rate = parseFloat(cost.hire_rate);
    const total = cost.reduce((total, profile) => total + parseInt(profile.hire_rate), 0);

    
    return (
        <div className="cost-container">
            <h1>Cost Summary</h1>
            <h3>Total Hired freelance(s): <span>{cost.length}</span> </h3>
        

            <h3>Total Cost: <span>${(total).toFixed(2)}</span></h3>
        </div>
    );
};

export default Cost;