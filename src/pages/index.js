import * as React from "react";
import HomeBody from "../components/pages-content/home.content";
import { usePage } from "../components/helpers/hooks";
import PageWrapper from "../components/page-wrapper";
import SEO from "../components/seo/seo";

const IndexPage = ({ location }) => {
  const page = usePage({ location });
  return (
    <PageWrapper page={page}>
      <SEO pathname="/" />
      <HomeBody />
    </PageWrapper>
  );
};

export default IndexPage;
