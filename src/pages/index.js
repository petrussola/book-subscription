import * as React from "react";
import HomeBody from "../components/pages/home/home.content.tsx";
import { usePage } from "../components/helpers/hooks";

import PageWrapper from "../components/wrappers/page-wrapper";
import Steps from "../components/pages/home/steps/steps";

const IndexPage = ({ location }) => {
  const page = usePage({ location });
  return (
    <PageWrapper page={page}>
      <HomeBody />
      <Steps />
    </PageWrapper>
  );
};

export default IndexPage;
