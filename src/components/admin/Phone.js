import React from 'react';

function TextInputGroup({ name, id, placeholder, label }) {
  return (
    <div className="relative z-0 w-full mb-6 group">
      <input
        type="text"
        name={name}
        id={id}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder={placeholder}
        required
      />
      <label
        htmlFor={id}
        className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
}

function Phone() {
  return (
    <div className="grid md:grid-cols-2 md:gap-6">
      <TextInputGroup
        name="floating_first_name"
        id="floating_first_name"
        placeholder=" "
        label="เบอร์โทร"
      />
      <TextInputGroup
        name="floating_last_name"
        id="floating_last_name"
        placeholder=" "
        label="LineID"
      />
    </div>
  );
}

export default Phone;