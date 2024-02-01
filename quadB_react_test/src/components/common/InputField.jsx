import React from "react";

const InputField = ({ label, type, name, value, onChange }) => {
  return (
    <div className="mb-2">
      <label className="block text-sm py-2 font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border rounded w-full p-2"
      />
    </div>
  );
};

export default InputField;
