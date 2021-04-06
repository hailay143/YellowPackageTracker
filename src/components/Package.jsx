import React from 'react'

import PackagesStatus from './PackagesStatus';

function Packages({parcels}) {
    const TasksArray = parcels.map((item)=>(
    <PackagesStatus key={item.id} item={item} />
    ));

    return (
        <div>
            <h1>Packages list</h1>
            {parcels.length>0 ? <ul>{TasksArray} </ul>: <p>"No pending package to be delivered!!"</p>};
        </div>
    );
}

export default Packages
