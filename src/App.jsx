import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from "./Component/Header"
import Banner from './Component/Banner';
import FooterNav from './Component/FooterNav/FooterNav';


function App() {

  return (
    <>
    <Header/>
    <Banner/>
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