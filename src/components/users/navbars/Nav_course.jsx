import React, { useState } from "react";

const Nav_course = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <side
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64  pt-20 transition-transform -translate-x-full bg-white  sm:translate-x-0  mt-20"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li>
              <a
                href="/main/course"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group"
              >
                <svg
                  class="w-5 h-5 text-gray-500 transition duration-75 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span class="ml-3 text-black">คอร์สเรียนทั้งหมด</span>
              </a>
            </li>
            <li>
              <a
                href="/main/course/data-design"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group"
              >
                <svg
                  class="w-5 h-5 text-gray-500 transition duration-75 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span class="ml-3 text-black">Data Design</span>
              </a>
            </li>
            <li>
              <a
                href="/main/course/ux-ui"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
              >
                <svg
                  class="w-5 h-5 text-gray-500 transition duration-75 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap text-black">
                  UX/UI
                </span>
              </a>
            </li>
            <li>
              <a
                href="/main/course/programing"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
              >
                <svg
                  class="w-5 h-5 text-gray-500 transition duration-75 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap text-black">
                  Programing
                </span>
              </a>
            </li>
            <li>
              <a
                href="/main/course/techology"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
              >
                <svg
                  class="w-5 h-5 text-gray-500 transition duration-75 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap text-black">
                  Techology
                </span>
              </a>
            </li>
            <li>
              <a
                href="/main/course/soft-skill"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group"
              >
                <svg
                  class="w-5 h-5 text-gray-500 transition duration-75 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap text-black">
                  Softskill
                </span>
              </a>
            </li>
            <li>
              <a
                href="/main/course/sa"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
              >
                <svg
                  class="w-5 h-5 text-gray-500 transition duration-75 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap text-black">
                  System Analysis
                </span>
              </a>
            </li>
          </ul>
        </div>
      </side>
    </>
  );
};

export default Nav_course;
