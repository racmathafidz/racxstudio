/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

import Header from 'parts/Header';
import { useParams } from 'react-router-dom';
import PortfolioDetail from 'parts/PortfolioDetail';
import Footer from 'parts/Footer';

import { Portfolios } from 'json/landingPageData';

export const ProjectDetailPage = () => {
  const { id } = useParams();
  const detailData = Portfolios.filter((item) => item.id === id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <PortfolioDetail data={detailData.length === 1 ? [detailData[0]] : null} />
      <Footer />
    </>
  );
};
