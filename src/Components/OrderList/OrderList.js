import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Admin/Sidebar/Sidebar';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data));
    },[])
    console.log('order here',orders);
    return (
        <div>
           <div className="row">
               <div className="col-md-3"><Sidebar></Sidebar></div>
                <div className="col-md-8"> <h5> you have {orders.length} orders </h5></div>
           </div>
            {/* {
                orders.map(order => <pre> {order.product?.name}   <strong> price </strong>  ${order.product?.price} <strong> Date:{(new Date(order.date)).toDateString('dd/MM/yyyy')} </strong> </pre> )
            } */}
        </div>
    );
};

export default OrderList;