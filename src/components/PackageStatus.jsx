import React from 'react'


function PackagesStatus({item}) {
    const {status, eta}=item;
    return (
        <li className="task-item">
            <input type="color" id="eta" name="on-the-way" value="#e66465"/>
            <span>{status}</span>
        </li>
    );
}

export default PackagesStatus
