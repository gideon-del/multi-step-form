import acrade from "./assets/images/icon-arcade.svg";
import advanced from "./assets/images/icon-advanced.svg";
import pro from "./assets/images/icon-pro.svg";
export const firstInputs = [
  {
    name: "name",
    title: "Name",
    placeholder: "e.g Stephen King",
    type: "text",
  },
  {
    name: "email",
    title: "Email Address",
    placeholder: "e.g stephenking@lorem.com",
    type: "email",
  },
  {
    name: "phone",
    title: "Phone Number",
    placeholder: "e.g +1 234 567 890",
    type: "text",
  },
];
export const steps = [
  {
    title: "your info",
    complete: false,
  },
  {
    title: "select plan",
    complete: false,
  },
  {
    title: "add-ons",
    complete: false,
  },
  {
    title: "summary",
    complete: false,
  },
];

export const plans = [
  {
    img: acrade,
    title: "Acrade",
    monthly: "$9/mo",
    yearly: "$90/yr",
  },
  {
    img: advanced,
    title: "Advanced",
    monthly: "$12/mo",
    yearly: "$120/yr",
  },
  {
    img: pro,
    title: "Pro",
    monthly: "$15/mo",
    yearly: "$150/yr",
  },
];
