import React, { Component } from 'react'

import Header from 'parts/Header'
import PortfolioDetail from 'parts/PortfolioDetail'
import Footer from 'parts/Footer'

import Data from 'json/landingPage.json'

export default class ProjectDetailPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    };
    
    render() {

        const detailData = Data.portfolio.filter( item => {
            return item._id === `${this.props.match.params.id}`;
        })
        
        return (
            <>
                <Header {...this.props}></Header>
                <PortfolioDetail data={detailData.length == 1 ? [detailData[0]] : null}></PortfolioDetail>
                <Footer></Footer>
            </>
        )
    }
}
