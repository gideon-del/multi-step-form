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
    pattern:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
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
    monthly: {
      price: 9,
      suffix: "mo",
    },
    yearly: {
      price: 90,
      suffix: "yr",
    },
  },
  {
    img: advanced,
    title: "Advanced",
    monthly: {
      price: 12,
      suffix: "mo",
    },
    yearly: {
      price: 120,
      suffix: "yr",
    },
  },
  {
    img: pro,
    title: "Pro",
    monthly: {
      price: 15,
      suffix: "mo",
    },
    yearly: {
      price: 150,
      suffix: "yr",
    },
  },
];
export const addons = [
  {
    id: "add1",
    title: "Online service",
    desc: "Access to multiplayer games",
    monthly: {
      price: 1,
      suffix: "mo",
    },
    yearly: {
      price: 10,
      suffix: "yr",
    },
  },
  {
    id: "add2",
    title: "Larger Storage",
    desc: "extra 1TB of cloud save",
    monthly: {
      price: 2,
      suffix: "mo",
    },
    yearly: {
      price: 20,
      suffix: "yr",
    },
  },
  {
    id: "add3",
    title: "Customizable Profile",
    desc: "custom theme on your profile",
    monthly: {
      price: 2,
      suffix: "mo",
    },
    yearly: {
      price: 20,
      suffix: "yr",
    },
  },
];
