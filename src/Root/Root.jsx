import React, { useEffect, useState } from 'react';
import Navbar from '../components/Header/Navbar';
import { Outlet, useNavigation, useLocation } from 'react-router';
import Footer from '../components/Footer/Footer';
import Loading from '../Pages/Loading';

const Root = () => {
  const navigation = useNavigation();
  const location = useLocation(); 
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

   useEffect(() => {
     window.scrollTo(0, 0);

   }, [location.pathname]);

  if (initialLoading || navigation.state === 'loading') {
    return <Loading />;
  }

  return (
    <div className="max-w-[1500px] mx-auto bg-base-200">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
