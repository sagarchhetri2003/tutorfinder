import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const TutorRoutes = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user || user.role !== 'tutor') {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user || user.role !== 'tutor') {
    return null;
  }

  return <Outlet />;
};

export default TutorRoutes;
