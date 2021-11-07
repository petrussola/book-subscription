import * as React from "react";
import HomeBody from "../components/pages-content/home.content";
import { usePage } from "../components/helpers/hooks";

import PageWrapper from "../components/page-wrapper";

const IndexPage = ({ location }) => {
  const page = usePage({ location });
  return (
    <PageWrapper page={page}>
      <HomeBody />
    </PageWrapper>
  );
};

export default IndexPage;
