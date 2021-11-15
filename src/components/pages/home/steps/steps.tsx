import * as React from "react";
import {
  StyledStep,
  StyledStepGroup,
  StyledStepsContainer,
  StyledStepsTitle,
} from "./steps.styles";
import { icons } from "../../../helpers/icons";
import MainButton, { MainButtonTypes } from "../../../lib/button-action-item";

const steps = [
  {
    id: 1,
    icon: icons.order,
    text: "Subscribe to the book award you are interested in.",
  },
  {
    id: 2,
    icon: icons.delivery,
    text: "The first weekend of the month, we ship you the book",
  },
  {
    id: 3,
    icon: icons.book,
    text: "You receive the book... happy reading!",
  },
  {
    id: 4,
    icon: icons.payment,
    text: "Secure monthly payment. Cancel anytime.",
  },
];

interface StepProps {
  id: number;
  icon: string;
  text: string;
}

const Step = ({ step }: { step: StepProps }) => {
  return (
    <StyledStep>
      <div className="icon-container">
        <img src={step.icon} alt="Icon" />
      </div>
      <h3>{step.text}</h3>
    </StyledStep>
  );
};

const StepsTitle = () => {
  return <StyledStepsTitle>How does it work?</StyledStepsTitle>;
};

const Steps = () => {
  return (
    <StyledStepsContainer>
      <StepsTitle />
      <StyledStepGroup>
        {steps.map((step) => (
          <Step step={step} key={step.id} />
        ))}
      </StyledStepGroup>
      <MainButton type={MainButtonTypes.WAIT_LIST} external width={40} />
    </StyledStepsContainer>
  );
};

export default Steps;
