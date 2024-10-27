import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from "./Component/Header"
import Banner from './Component/Banner';
import FooterNav from './Component/FooterNav/FooterNav';
import Subscription from './Component/Subscription/Subscription';


function App() {

  return (
    <>
    <Header/>
    <Banner/>
    <Subscription/>
    <FooterNav/>
    </>
  )
}

export default App



// import React from 'react';
// import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
// import Header from './Component/Header';


// const Layout = () => {
//   return (
//     <>
//       <Header />
//       <Outlet/>
//       {/* <Footer /> */}
//       <FooterNav/>
//     </>
//   );
// };

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />, 
//     children: [
//       { path: '/', element: <Banner /> }, 

//     ],
//   },
// ]);

// function App() {
//   return (
//     <RouterProvider router={router} />  
//   );
// }

// export default App;