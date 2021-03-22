import React, { Component } from 'react'

import Header from 'parts/Header'
import Hero from 'parts/Hero'
import Service from 'parts/Service'
import Portfolio from 'parts/Portfolio'

import Data from 'json/landingPage.json'

export default class LandingPage extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <Hero></Hero>
                <Service data={Data.service}></Service>
                <Portfolio data={Data.portfolio}></Portfolio>
            </>
        )
    }
}
