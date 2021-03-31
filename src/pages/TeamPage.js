import React, { Component } from 'react'

import Header from 'parts/Header'
import HeroTeam from 'parts/HeroTeam'
import AllTeam from 'parts/AllTeam'
import Footer from 'parts/Footer'

import Data from 'json/landingPage.json'

export default class TeamPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    };
    
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <HeroTeam  {...this.props}></HeroTeam>
                <AllTeam data={Data.team}></AllTeam>
                <Footer></Footer>
            </>
        )
    }
}
