import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Banner from "./Banner";
import Client from "./Client";
import CTAOne from "./CTAOne";
import CTAThree from "./CTAThree";
import OurExperts from "./OurExperts";
import OurServices from "./OurServices";
import Value from "./Value";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import RequestAQuote from "./RequestAQuote";
import HireCompanyCTA from "./HireCompanyCTA";
import EnhancedVisibility from "./EnhancedVisibility";
import StreamlinedPublishing from "./StreamlinedPublishing";
import ComprehensiveMarketing from "./ComprehensiveMarketing";
import GotFeatured from "./GotFeatured";
import BookPublishingJourney from "./BookPublishingJourney";

const Main = () => {
  return (
    <>
      <Header />
      <Banner />
      <RequestAQuote />
      <GotFeatured />
      <CTAThree />
      <OurExperts />
      <OurServices />
      <BookPublishingJourney />
      <HireCompanyCTA />
      <WhyChooseUs />
      <EnhancedVisibility />
      <StreamlinedPublishing />
      <ComprehensiveMarketing />
      <Value />
      <Testimonials />
      <Client />
      <CTAOne />
      <Footer />
    </>
  );
};

export default Main;
