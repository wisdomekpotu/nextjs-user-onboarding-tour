import React from "react";
import JoyRide from "react-joyride";
const TOUR_STEPS = [
  {
    target: ".tour-logo",
    content: "This is the App logo",
    disableBeacon: true
  },
  {
    target: ".tour-login",
    content:
      "View the login button",
  },
  {
    target: ".tour-post",
    content: "here is the post card",
  },
  {
    target: ".tour-contact",
    content: "this is the contact form",
  },
  {
    target: ".tour-footer",
    content: "see our footer",
  },
];

const Tour = () => {
  return (
    <>
      <JoyRide
        steps={TOUR_STEPS}
        continuous={true}
        showSkipButton={true}
        showProgress={true}
        styles={{
          tooltipContainer: {
              textAlign: "left"
            },
          buttonNext: {
              backgroundColor: "green"
            },
          buttonBack: {
              marginRight: 10
            }
        }}
      />
    </>
  );
};


export default Tour;
