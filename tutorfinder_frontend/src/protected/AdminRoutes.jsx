import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const AdminRoutes = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (user === null || !user.role === 'admin') {
            navigate('/login');
        }
    }, [user, navigate]);

    if (user === null || !user.role === 'admin') {
        return null;
    }

    return <Outlet />;
};

export default AdminRoutes;
