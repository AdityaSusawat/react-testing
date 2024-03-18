import "../stepForm.css";
import { useMultiStepForm } from "../components/useMultiStepForm";
import { UserForm } from "../components/stepForm/UserForm";
import { AddressForm } from "../components/stepForm/AddressForm";
import { AccountForm } from "../components/stepForm/AccountForm";
import { Navbar } from "../components/Navbar";
export function StepForm() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([<UserForm />, <AddressForm />, <AccountForm />]);

  const handleNext = (e) => {
    e.preventDefault();
    next();
  };

  return (
    <>
      <Navbar />

      <div className="stepFormPage" style={{ marginTop: "100px" }}>
        <form onSubmit={handleNext} style={{}}>
          <div className="stepCounter">
            {currentStepIndex + 1} / {steps.length}
          </div>
          <div className="step">{step}</div>
          <div className="buttons">
            {!isFirstStep && (
              <button type="button" onClick={back}>
                Back
              </button>
            )}
            {<button type="submit">{isLastStep ? "Finish" : "Next"}</button>}
          </div>
        </form>
      </div>
    </>
  );
}
