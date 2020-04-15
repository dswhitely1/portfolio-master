import React from 'react';
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Projects from "./Projects/Projects";

function App() {
    return (
        <div id="page-wrapper">
            <Header/>
            <Banner/>
            <Projects/>
            <Footer/>
        </div>
    )
}

export default App;
