/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import HeroPortfolio from 'parts/HeroPortfolio';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import AllPortfolio from 'parts/AllPortfolio';

import { Portfolios } from 'json/landingPageData';

export default class ProjectPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <HeroPortfolio />
        <AllPortfolio data={Portfolios} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
