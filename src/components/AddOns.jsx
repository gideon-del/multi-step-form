/* eslint-disable react/prop-types */
import { memo, useState } from "react";

const AddOns = ({ title, desc, price, id }) => {
  const [checked, setChecked] = useState(false);
  const toggle = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div
      className={`flex justify-between items-center border ${
        checked ? "border-marineBlue bg-alabaster" : "border-coolGray"
      } md:px-7 rounded-xl py-4 px-3`}
    >
      <div className="flex gap-6 items-center">
        <input
          type="checkbox"
          name={id}
          id={id}
          defaultChecked={checked}
          onInput={toggle}
          defaultValue={title}
          className="accent-purplishBlue md:scale-150 scale-110"
        />
        <label
          htmlFor={id}
          className="flex flex-col text-marineBlue text-sm md:text-lg capitalize"
        >
          {title}
          <span className="text-coolGray font-Regular capitalize">{desc}</span>
        </label>
      </div>
      <p className="text-base text-purplishBlue">{price}</p>
    </div>
  );
};

export default memo(AddOns);
