import { Stepper } from "react-form-stepper";
import React, { useState, useEffect, useRef } from "react";
import { OnBoardingServices } from "./steps/OnBoardingServices";
import { OnBoardingLanguages } from "./steps/OnBoardingLanguages";
import { OnBoardingCurrencies } from "./steps/OnBoardingCurrencies";
import { OnBoardingPaymentMethods } from "./steps/OnBoardingPaymentMethods";
import { OnBoardingSpecializations } from "./steps/OnBoardingSpecializations";
import { OnBoardingCalculationUnits } from "./steps/OnBoardingCalculationUnits";

export const OnBoardingSetup: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const stepperRef = useRef<HTMLDivElement>(null);

    const steps = [
        { label: "Services", onClick: () => setActiveStep(0) },
        { label: "Languages", onClick: () => setActiveStep(1) },
        { label: "Calculation Units", onClick: () => setActiveStep(2) },
        { label: "Specializations", onClick: () => setActiveStep(3) },
        { label: "Currencies", onClick: () => setActiveStep(4) },
        { label: "Payment Methods", onClick: () => setActiveStep(5) },
    ];

    useEffect(() => {
        const stepper = stepperRef.current;

        if (stepper) {
            const activeElement = stepper.querySelector(".custom-step-class.active");

            if (activeElement) {
                const activeElementRect = activeElement.getBoundingClientRect();
                const stepperRect = stepper.getBoundingClientRect();
                const scrollLeft =
                    activeElementRect.left + stepper.scrollLeft - stepperRect.width / 2 + activeElementRect.width / 2;
                stepper.scrollTo({ left: scrollLeft, behavior: "smooth" });
            }
        }
    }, [activeStep]);

    function getSectionComponent() {
        switch (activeStep) {
            case 0:
                return <OnBoardingServices />;
            case 1:
                return <OnBoardingLanguages />;
            case 2:
                return <OnBoardingCalculationUnits />;
            case 3:
                return <OnBoardingSpecializations />;
            case 4:
                return <OnBoardingCurrencies />;
            case 5:
                return <OnBoardingPaymentMethods />;
            default:
                return null;
        }
    }

    return (
        <>
            <div className="container">
                <div className=" panel  max-w-screen-2xl">
                    <div className="w-full overflow-auto whitespace-nowrap" ref={stepperRef}>
                        <Stepper
                            steps={steps}
                            activeStep={activeStep}
                            className="custom-stepper-class"
                            stepClassName="custom-step-class"
                            styleConfig={{
                                className: "custom-connector-class",
                                activeBgColor: "#8B5CF6",
                                activeTextColor: "#FFFFFF",
                                completedBgColor: "#6B21A8",
                                completedTextColor: "#FFFFFF",
                                inactiveBgColor: "#E9D5FF",
                                inactiveTextColor: "#4C1D95",
                                size: "25px",
                                circleFontSize: "13px",
                                labelFontSize: "15px",
                                borderRadius: "50%",
                                fontWeight: "",
                            }}
                            connectorStyleConfig={{
                                disabledColor: "#CCCCCC",
                                activeColor: "#8B5CF6",
                                completedColor: "#6B21A8",
                                size: "2px",
                                style: "solid",
                            }}
                        />
                    </div>

                    {/* Button Section */}
                    <div className="p-4 sm:p-6 md:p-8">
                        <div className={`mt-4 flex ${activeStep === 0 ? "justify-end" : "justify-around"} md:mt-8`}>
                            {activeStep !== 0 && (
                                <button
                                    className="rounded bg-gray-200 px-4 py-2 font-bold text-black transition-colors duration-200 hover:bg-gray-300"
                                    onClick={() => setActiveStep(activeStep - 1)}
                                >
                                    Previous
                                </button>
                            )}
                            {activeStep < steps.length - 1 && (
                                <button
                                    className="rounded bg-purple-500 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-purple-700"
                                    onClick={() => setActiveStep(activeStep + 1)}
                                >
                                    Next
                                </button>
                            )}
                            {activeStep === steps.length - 1 && (
                                <button
                                    className="rounded bg-purple-500 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-purple-700"
                                    onClick={() => console.log("Finishing setup...")}
                                >
                                    Finish
                                </button>
                            )}
                        </div>
                    </div>
                    {/* End Button Section */}
                </div>
            </div>
            <div className="container">
                <div className="mb-5 max-w-screen-2xl">{getSectionComponent()}</div>
            </div>
        </>
    );
};
