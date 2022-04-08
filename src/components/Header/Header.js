// import React, {Component} from 'react';
// import {Route, Navigate, HashRouter, Routes} from "react-router-dom";
// import Nav from '../Nav';
// import About from '../About';
// import Portfolio from '../Portfolio';
// import Contact from '../Contact';
// import Resume from '../Resume';

// class Header extends Component {
//     render() {
//         return (
//             <HashRouter>
//                 <div className='row Header' id='header'>
//                     <a href='https://github.com/Alopez844/React-Portfolio'><img src="https://img.icons8.com/ios/50/000000/laptop--v2.png" alt='logo' class='icon' id='logo'/></a>    
//                     <Nav/>
//                 </div>

//                 <div className='content'>
//                     <Routes>
//                     <Route exact path='/' render={() => (<Navigate to="/portfolio"/>)}/>
//                     <Route path='/portfolio' component={Portfolio}/>
//                     <Route path='/about' component={About}/>
//                     <Route path='/contact' component={Contact}/>
//                     <Route path='/resume' component={Resume}/>
//                     </Routes>
//                 </div>

//             </HashRouter>
//         )
//     }
// }

// export default Header;