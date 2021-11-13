import * as React from "react";
import { StyledStep, StyledStepsContainer } from "./steps.styles";
import { icons } from "../../../helpers/icons";

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

const StepsDescription = () => {
  return <h2>How does it work?</h2>;
};

const Steps = () => {
  return (
    <StyledStepsContainer>
      <StepsDescription />
      <div>
        {steps.map((step) => (
          <Step step={step} key={step.id} />
        ))}
      </div>
    </StyledStepsContainer>
  );
};

export default Steps;
