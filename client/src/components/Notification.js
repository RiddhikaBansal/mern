// Notification.js
import React from 'react';
import './Notification.css'; // Add styles for notification

const Notification = ({ message }) => {
    return (
        <div className="notification">
            {message}
        </div>
    );
};

export default Notification;
