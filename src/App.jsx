import { useState } from "react";

// components
import FormInputText from "./components/FormInputText";
import SelectCard from "./components/SelectCard";
import Step from "./components/Step";
import SelectSubscription from "./components/SelectSubscription";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1);
  const [formValidationError, setFormValidationError] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState("arcade");
  const [yearly, setYearly] = useState(false);
  const [online, setOnline] = useState(false);
  const [storage, setStorage] = useState(false);
  const [profile, setProfile] = useState(false);

  const [isConfirmed, setIsConfirmed] = useState(false);

  function handleInfoSubmit(e) {
    e.preventDefault();
    // if (!name) return setFormValidationError("name");
    // if (!email) return setFormValidationError("email");
    // if (!phone) return setFormValidationError("phone");

    setStep((step) => step + 1);
  }

  function handleFormConfirm() {
    setIsConfirmed(true);
  }

  function handleNextStep(e) {
    e.preventDefault();
    setStep((step) => step + 1);
  }

  function handlePrevStep(e) {
    e.preventDefault();
    setStep((step) => step - 1);
  }

  function handleGoToStep(step) {
    setStep(step);
  }

  function handleSelectPlan(plan) {
    setSelectedPlan(plan);
  }

  return (
    <div className="step-form">
      <FormSidebar>
        <Step step={1} title={`Your info`} isActive={step >= 1} />
        <Step step={2} title="Select plan" isActive={step >= 2} />
        <Step step={3} title="Add-ons" isActive={step >= 3} />
        <Step step={4} title="Summary" isActive={step >= 4} />
      </FormSidebar>

      {step === 1 && (
        <Box>
          <Header
            title="Personal info"
            description="Please provide your name, email address, and phone number."
          />

          <Form onSubmit={handleInfoSubmit}>
            <Inputs gap="3rem">
              <FormInputText
                title="Name"
                placeholder="e.g. Tyrus Berggren"
                value={name}
                setValue={setName}
                validationError={formValidationError}
                formType="name"
                // isRequired={true}
              />
              <FormInputText
                title="Email Address"
                placeholder="e.g. tyrus.webservices@gmail.com"
                value={email}
                setValue={setEmail}
                inputType="email"
                validationError={formValidationError}
                formType="email"
                // isRequired={true}
              />
              <FormInputText
                title="Phone Number"
                placeholder="e.g. (123)-456-7890"
                value={phone}
                setValue={setPhone}
                validationError={formValidationError}
                formType="phone"
                // isRequired={true}
              />
            </Inputs>

            <ButtonCta>Next Step</ButtonCta>
          </Form>
        </Box>
      )}

      {step === 2 && (
        <Box>
          <Header
            title="Select your plan"
            description="You have the option of monthly or yearly billing."
          />

          <Form onSubmit={handleNextStep}>
            <Inputs gap="3rem">
              <SelectBox>
                <SelectCard
                  onClick={handleSelectPlan}
                  isSelected={selectedPlan === "arcade"}
                  isYearly={yearly}
                  image="/assets/images/icon-arcade.svg"
                  plan="arcade"
                  price={9}
                />

                <SelectCard
                  onClick={handleSelectPlan}
                  isSelected={selectedPlan === "advanced"}
                  isYearly={yearly}
                  image="/assets/images/icon-advanced.svg"
                  plan="advanced"
                  price={12}
                />

                <SelectCard
                  onClick={handleSelectPlan}
                  isSelected={selectedPlan === "pro"}
                  isYearly={yearly}
                  image="/assets/images/icon-pro.svg"
                  plan="pro"
                  price={15}
                />
              </SelectBox>

              <SelectSubscription yearly={yearly} setYearly={setYearly} />
            </Inputs>

            <ButtonSecondary onClick={handlePrevStep}>Go Back</ButtonSecondary>
            <ButtonCta>Next Step</ButtonCta>
          </Form>
        </Box>
      )}

      {step === 3 && (
        <Box>
          <Header
            title="Pick add-ons"
            description="Add-ons help enhance your gaming experience."
          />

          <Form onSubmit={handleNextStep}>
            <Inputs gap="1.5rem">
              <Checkbox
                checked={online}
                setChecked={setOnline}
                price={1}
                isYearly={yearly}
                title="Online service"
                description="Get access to multiplayer games"
              />
              <Checkbox
                checked={storage}
                setChecked={setStorage}
                price={2}
                isYearly={yearly}
                title="Larger storage"
                description="Extra 1TB of cloud save"
              />
              <Checkbox
                checked={profile}
                setChecked={setProfile}
                price={2}
                isYearly={yearly}
                title="Customizable profile"
                description="Custom theme on your profile"
              />
            </Inputs>

            <ButtonSecondary onClick={handlePrevStep}>Go Back</ButtonSecondary>
            <ButtonCta>Next Step</ButtonCta>
          </Form>
        </Box>
      )}

      {step === 4 &&
        (!isConfirmed ? (
          <Box>
            <Header
              title="Finishing up"
              description="Double-check everything look OK before continuing."
            />

            <SelectionOverview
              plan={selectedPlan}
              isYearly={yearly}
              isOnline={online}
              isStorage={storage}
              isProfile={profile}
              onGoToStep={handleGoToStep}
            />

            <ButtonSecondary onClick={handlePrevStep}>Go Back</ButtonSecondary>
            <ButtonConfirm onClick={handleFormConfirm}>Confirm</ButtonConfirm>
          </Box>
        ) : (
          <Box>
            <SubmissionWindow />
          </Box>
        ))}
    </div>
  );
}

function Box({ children }) {
  return <div className="step-form__box">{children}</div>;
}

function Header({ title, description }) {
  return (
    <header className="header">
      <h2 className="header__title">{title}</h2>
      <p className="header__description">{description}</p>
    </header>
  );
}

function ButtonSecondary({ children, onClick, className = "" }) {
  return (
    <button className={`btn btn--secondary ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

function ButtonCta({ children, onClick, className = "" }) {
  return (
    <button className={`btn btn--cta ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

function ButtonConfirm({ children, onClick, className = "" }) {
  return (
    <button className={`btn btn--confirm ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

function ButtonUnderline({ children, onClick, className = "" }) {
  return (
    <button className={`btn btn--underline ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

function FormSidebar({ children }) {
  return <div className="step-form__sidebar">{children}</div>;
}

function Inputs({ gap, children }) {
  const styles = {
    display: "flex",
    flexDirection: "column",
    gap: gap,
  };

  return (
    <div style={styles} className="inputs">
      {children}
    </div>
  );
}

function Form({ children, onSubmit }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

function SelectBox({ children }) {
  return <div className="select">{children}</div>;
}

function Checkbox({
  checked,
  setChecked,
  title,
  description,
  price,
  isYearly = false,
}) {
  return (
    <div
      className={`input--checkbox ${checked ? "checked" : ""}`}
      onClick={() => setChecked((checked) => !checked)}
    >
      <input type="checkbox" />

      <label className="input--checkbox__text">
        <span className="input--checkbox__check">
          <img src="assets/images/icon-checkmark.svg" alt="" />
        </span>

        <p className="input--checkbox__title">{title}</p>
        <p className="input--checkbox__description">{description}</p>
      </label>

      <p className="input--checkbox__price">
        +${isYearly ? price * 10 : price}/{isYearly ? "yr" : "mo"}
      </p>
    </div>
  );
}

const availablePlanPrices = {
  arcade: 9,
  advanced: 12,
  pro: 15,
};

function SelectionOverview({
  plan,
  isYearly,
  isOnline,
  isStorage,
  isProfile,
  onGoToStep,
}) {
  const planPrice = availablePlanPrices[plan];
  let total = 0;

  if (isOnline) total += isYearly ? 10 : 1;
  if (isStorage) total += isYearly ? 20 : 2;
  if (isProfile) total += isYearly ? 20 : 2;
  total += isYearly ? planPrice * 10 : planPrice;

  return (
    <div className="overview">
      <div className="overview__selected-services">
        <div className="overview__plan">
          <div>
            <p className="overview__plan-name">
              {plan[0].toUpperCase().concat(plan.slice(1))}{" "}
              {isYearly ? "(Yearly)" : "(Monthly)"}
            </p>

            <ButtonUnderline
              className="overview__plan-btn"
              onClick={() => onGoToStep(2)}
            >
              Change
            </ButtonUnderline>
          </div>

          <div className="overview__plan-price">
            ${isYearly ? planPrice * 10 : planPrice}/{isYearly ? "yr" : "mo"}
          </div>
        </div>

        {isOnline && (
          <OverviewAddon isYearly={isYearly} price={1} name="Online services" />
        )}

        {isStorage && (
          <OverviewAddon isYearly={isYearly} price={2} name="Larger storage" />
        )}

        {isProfile && (
          <OverviewAddon
            isYearly={isYearly}
            price={2}
            name="Profile customization"
          />
        )}
      </div>

      <div className="overview__total">
        <span className="overview__total-per">
          Total ({isYearly ? "per year" : "per month"})
        </span>
        <span className="overview__total-price">
          ${total}/{isYearly ? "yr" : "mo"}
        </span>
      </div>
    </div>
  );
}

function OverviewAddon({ isYearly, price, name }) {
  return (
    <div className="overview__addon">
      <span className="overview__addon-name">{name}</span>
      <span className="overview__addon-price">
        +${isYearly ? price * 10 : price}/{isYearly ? "yr" : "mo"}
      </span>
    </div>
  );
}

function SubmissionWindow() {
  return (
    <div className="form__submission">
      <img src="assets/images/icon-thank-you.svg" alt="Checkmark" />
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
}
