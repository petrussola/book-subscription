import * as React from "react";
import { usePage } from "../components/helpers/hooks";
import PageWrapper from "../components/page-wrapper";
import AboutBody from "../components/pages-content/about.content";

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
