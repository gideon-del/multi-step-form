import acrade from "./assets/images/icon-arcade.svg";
import advanced from "./assets/images/icon-advanced.svg";
import pro from "./assets/images/icon-pro.svg";
export const firstInputs = [
  {
    name: "fullName",
    title: "Name",
    placeholder: "e.g Stephen King",
    type: "text",
    minLength: 5,
  },
  {
    name: "email",
    title: "Email Address",
    placeholder: "e.g stephenking@lorem.com",
    type: "email",
  },
  {
    name: "phoneNum",
    title: "Phone Number",
    placeholder: "e.g +1 234 567 890",
    type: "text",
    minLength: 9,
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
export const addons = [
  {
    id: "add1",
    title: "Online service",
    desc: "Access to multiplayer games",
    price: "+$1/mo",
  },
  {
    id: "add2",
    title: "larger storage",
    desc: "extra 1TB of cloud save",
    price: "+$2/mo",
  },
  {
    id: "add3",
    title: "customizable profile",
    desc: "custom theme on your profile",
    price: "+$2/mo",
  },
];
