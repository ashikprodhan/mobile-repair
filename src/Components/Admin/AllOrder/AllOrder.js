import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AllOrder = () => {
    const [orders, setOrders] = useState([])
    console.log(orders);
   useEffect(()=>{
       fetch('https://rocky-chamber-96168.herokuapp.com/allOrder')
       .then(res => res.json())
       .then(data =>setOrders(data) )
   },[])
    return (
       
        <div>
            <div className="row">
                <div className="col-md-4"><Sidebar></Sidebar></div>
                <div className="col-md-8"><table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Service Type</th>
            
            <th className="text-secondary" scope="col">Email</th>
            <th className="text-secondary" scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            {
              orders.map((order, index) => 
                    
                <tr>
                    <td>{index + 1}</td>
                    <td>{order.name}</td>
                    <td>{order.service?.name}</td>
                   
                    <td>{order.email}</td>
                    <td><select className="form-control" >
                <option disabled={true} value="Not set">Select option</option>
                <option value="Pending">Pending</option>
                <option value="Done">Done</option>
                <option value="Ongoing">Ongoing</option>
              </select></td>

                </tr>
                )
            }
        </tbody>
    </table></div>
            </div>
            
            
        </div>
    );
};

export default AllOrder;