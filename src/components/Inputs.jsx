/* eslint-disable react/prop-types */
import { memo, useRef, useState } from "react";
import { usePlan } from "../context/PlanContext";

const Inputs = ({ type, name, placeholder, title }) => {
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const { getSlection } = usePlan();
  const validation = () => {
    const val = inputRef.current.value.trim();
    if (val === "") setError("This field is required");
  };
  const firstSelection = getSlection(0);
  const defaultVal = firstSelection ? firstSelection[name] : "";
  return (
    <>
      <fieldset className="flex flex-col gap-1 md:gap-3 ">
        <label
          htmlFor="name"
          className="capitalize text-marineBlue flex justify-between"
        >
          {title}
          {error && (
            <span className="text-strawberryRed font-Bold normal-case ">
              {error}
            </span>
          )}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className={`border   px-4 py-2 rounded-lg focus-within:outline-none focus-within:border-marineBlue transition  text-marineBlue shadow-sm ${
            error ? "border-strawberryRed" : "border-coolGray"
          }`}
          ref={inputRef}
          onChange={() => {
            error && setError("");
          }}
          onBlur={validation}
          defaultValue={defaultVal}
        />
      </fieldset>
    </>
  );
};

export default memo(Inputs);
