import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9"></div>
            </div>
        </div>
    );
};

export default Admin;