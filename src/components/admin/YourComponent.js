import React, { useState } from 'react';

function YourComponent() {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <label htmlFor="message" className="block mb-2 text-sm font-medium ">
        คำอธิบายตัวตน
      </label>
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="เพิ่มคำอธิบาย..."
        value={message}
        onChange={handleMessageChange}
      ></textarea>
    </div>
  );
}

export default YourComponent;
