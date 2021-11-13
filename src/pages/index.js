import * as React from "react";
import HomeBody from "../components/pages/home/home.content.tsx";
import { usePage } from "../components/helpers/hooks";

import PageWrapper from "../components/wrappers/page-wrapper";

const IndexPage = ({ location }) => {
  const page = usePage({ location });
  return (
    <PageWrapper page={page}>
      <HomeBody />
    </PageWrapper>
  );
};

export default IndexPage;
