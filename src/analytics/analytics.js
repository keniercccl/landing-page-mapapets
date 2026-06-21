import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-2VNND4GPX6";

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const pageView = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};

export const trackEvent = (
  category,
  action,
  label = ""
) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};