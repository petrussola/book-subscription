import * as React from "react";
import { usePage } from "../components/helpers/hooks";
import PageWrapper from "../components/wrappers/page-wrapper";
import AboutBody from "../components/pages/about/about.content";
import SEO from "../components/seo/seo";

const AboutPage = ({ location }) => {
  const page = usePage({ location });
  return (
    <PageWrapper page={page}>
      <SEO pathname="/about" />
      <AboutBody />
    </PageWrapper>
  );
};

export default AboutPage;
