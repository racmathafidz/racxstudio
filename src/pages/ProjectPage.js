import React, { Component } from 'react'

import Header from 'parts/Header'
import HeroPortfolio from 'parts/HeroPortfolio'
import Discuss from 'parts/Discuss'
import Footer from 'parts/Footer'
import AllPortfolio from 'parts/AllPortfolio'

import Data from 'json/landingPage.json'

export default class ProjectPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <>
                <Header {...this.props}></Header>   
                <HeroPortfolio {...this.props}></HeroPortfolio>
                <AllPortfolio data={Data.portfolio}></AllPortfolio>
                <Discuss {...this.props}></Discuss>
                <Footer></Footer>
            </>
        )
    }
}
