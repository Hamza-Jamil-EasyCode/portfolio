import React from 'react'
import PropTypes from 'prop-types'
import TopNav from '../components/TopNav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const HomepageLayout = props => {
    return (
        <div className='homepage_layout'>
            <TopNav />
            <div className="container">
                <Outlet />  
            </div>
            <Footer title='© 2022 Easy Code. All Rights Reserved | Terms and Conditions' />
        </div>
    )
}

HomepageLayout.propTypes = {

}

export default HomepageLayout
