import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Heropage from '../../Components/Heropage/Heropage'
import Aboutus from '../../Components/Aboutus/Aboutus'

function Home() {
    return (
        <>
           <Navbar/>
           <Heropage/>
           <Aboutus />
        </>
    )
}

export default Home
