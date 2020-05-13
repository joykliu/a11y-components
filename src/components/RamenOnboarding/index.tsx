import React from "react";
import { Form } from "informed";
import { History } from "history";

import MultiStepForm from "../MultiStepForm";
import NameStep from "../NameStep";
import NoodleStep from "../NoodleStep";
import ToppingStep from "../ToppingStep";
import SpiceStep from "../SpiceStep";

// import styles from "./index.module.css";

const steps = [
  {
    path: "/order/name",
    title: "Name"
  },
  {
    path: "/order/noodle",
    title: "Noodle"
  },
  {
    path: "/order/toppings",
    title: "Toppings"
  },
  {
    path: "/order/spice",
    title: "Spice Level"
  }
];

type PropsType = {
  history: History;
};

const RamenOnboarding = ({ history }: PropsType) => {
  const onSubmit = () => {
    history.push("/finish");
  };
  return (
    <Form onSubmit={onSubmit}>
      <MultiStepForm
        heading="Build Your Own Ramen"
        steps={steps}
        history={history}
      >
        <NameStep />
        <NoodleStep />
        <ToppingStep />
        <SpiceStep />
      </MultiStepForm>
    </Form>
  );
};

export default RamenOnboarding;
