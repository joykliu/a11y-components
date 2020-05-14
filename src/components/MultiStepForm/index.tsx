import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useFormState, useFormApi } from "informed";
import { History } from "history";
import classNames from "classnames";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Helmet } from "react-helmet";

import Button from "../Button";
import styles from "./index.module.css";

type StepType = {
  path: string;
  title: string;
};

type PropsType = {
  heading: string;
  steps: StepType[];
  children: React.ReactElement[];
  history: History;
};

const MultiStepForm = ({ heading, steps, history, children }: PropsType) => {
  const [completePercentage, setCompletePercentage] = useState(
    `${(1 / steps.length) * 100}%`
  );
  const { step } = useFormState();
  const { next, back, setStep } = useFormApi();
  const stepEl = useRef<HTMLDivElement>(null);

  const isLastStep = step === steps.length - 1;

  const onBack = () => {
    if (children[step].props.onBack) {
      children[step].props.onBack(window.location.pathname, back);
    } else {
      back(undefined);
    }
  };

  const onNext = () => {
    if (children[step].props.onNext) {
      children[step].props.onNext(window.location.pathname, next);
    } else {
      next(undefined);
    }
  };

  const childSteps = React.Children.map(children, (child, i) => {
    const props = {
      ...child.props,
      step: i
    };
    return React.cloneElement(child, props);
  });

  useEffect(() => {
    const completedDecimal = (step + 1) / steps.length;
    setCompletePercentage(`${completedDecimal * 100}%`);
    history.push(steps[step].path);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  useLayoutEffect(() => {
    if (stepEl.current !== null) {
      stepEl.current.focus();
    }
  }, [step]);

  useEffect(() => {
    const currentStepIndex = steps
      .map((item) => item.path)
      .findIndex((stepPath: string) => stepPath === history.location.pathname);
    const currentStep = currentStepIndex === -1 ? 0 : currentStepIndex;
    setStep(currentStep);
  }, [history.location.pathname, setStep, steps]);

  return (
    <>
      <Helmet>
        <title>
          {` Step ${step + 1} of ${steps.length}: ${
            steps[step].title
          } - ${heading}`}
        </title>
      </Helmet>
      <div className={styles.multiStepFormStep}>
        <div className={styles.multiStepFormStepContainer}>
          <h1 className={styles.multiStepFormHeading}>{heading}</h1>
          <TransitionGroup className={styles.transitionGroup}>
            <CSSTransition
              key={history.location.key}
              timeout={{ enter: 300, exit: 300 }}
              unmountOnExit
              mountOnEnter
              classNames="stepTransition"
            >
              <div className={styles.routerSection}>
                <Switch>
                  <Route path={history.location.pathname}>
                    <div ref={stepEl} tabIndex={-1}>
                      {childSteps[step]}
                    </div>
                  </Route>
                </Switch>
              </div>
            </CSSTransition>
          </TransitionGroup>
          <div className={styles.multiStepFormNavigationContainer}>
            <div
              role="progressbar"
              aria-label={`progress bar, ${completePercentage} `}
              className={styles.progressBar}
              aria-valuemin={1}
              aria-valuemax={steps.length}
              aria-valuenow={step + 1}
              aria-valuetext={`step ${step + 1} out of ${steps.length}`}
              style={{ width: completePercentage }}
            />
            <Button
              secondary
              className={classNames(styles.multiStepFormNavigationButton, {
                [styles.multiStepFormNavigationButtonHidden]: step === 0
              })}
              onClick={onBack}
            >
              Back
            </Button>
            <h3
              className={styles.multiStepFormNavigationTitle}
              aria-live="polite"
            >
              {steps[step].title} (Step {step + 1} of {steps.length})
            </h3>
            <Button
              primary
              className={styles.multiStepFormNavigationButton}
              submit={isLastStep}
              onClick={onNext}
            >
              {isLastStep ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiStepForm;
