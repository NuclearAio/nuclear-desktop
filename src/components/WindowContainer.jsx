import React, { useState, useContext } from "react";
import TitleContext from "../context/page-title/TitleContext";
import { NavLink } from "react-router-dom";
import Logo from "../assets/icons/desktop-icon.png";

const WindowContainer = ({ children }) => {
  const { title } = useContext(TitleContext);

  const menuItems = [
    {
      title: "Dashboard",
      path: "dashboard",
      iconClass: "ri-dashboard-line",
    },
    {
      title: "Reports",
      path: "reports",
      iconClass: "ri-folder-3-line",
    },
    {
      title: "Inventory",
      path: "inventory",
      iconClass: "ri-organization-chart",
    },
    {
      title: "Bot",
      path: "bot",
      iconClass: "ri-robot-line",
    },
    {
      title: "Proxies",
      path: "proxies",
      iconClass: "ri-route-fill",
    },
    {
      title: "Profiles",
      path: "profiles",
      iconClass: "ri-profile-line",
    },
    {
      title: "Cards",
      path: "cards",
      iconClass: "ri-bank-card-2-line",
    },
    {
      title: "Settings",
      path: "settings",
      iconClass: "ri-list-settings-line",
    },
  ];
  return (
    <>
      <div className="bg-base h-screen relative">
        <section className="h-screen  ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between  bg-primary transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
          <div>
            <div className="mt-2 -ml-8 px-6 py-4 flex">
              <a href="#" title="sidebar">
                <img src={Logo} className="w-24" alt="nuclear logo" />
              </a>
              <h1 className="justify-end mt-7  font-light text-3xl">nuclear</h1>
            </div>

            <ul className="space-y-2 tracking-wide mt-8">
              {menuItems.map((menu, key) => (
                <li key={key}>
                  <NavLink
                    to={`${menu.path}`}
                    className={`relative px-4 py-3 mb-2 flex items-center space-x-4 rounded-xl  delay-100 transition ease-in hover:text-green-600 active:text-white focus:text-white`}
                  >
                    <i className={`${menu.iconClass} ri-lg `}></i>
                    <span className="-mr-1 ">{menu.title}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-6 -mx-6 pt-0.5 flex justify-between items-center border-t border-gray-700">
            <button className="px-4 py-3 flex items-center space-x-4  group hover:bg-hover transition delay-100 ease-in w-full mt-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span className="">Logout</span>
            </button>
          </div>
        </section>
        <div className=" ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
          <div className="sticky z-50 top-0 h-16 bg-base lg:py-2.5">
            <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
              <h5
                hidden
                className="text-5xl font-bold  lg:block tracking-tighter"
              >
                {title}
              </h5>
              <button className="w-12 h-16 -mr-2 border-r lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 my-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div className="flex space-x-4 bg-base">
                <button
                  aria-label="chat"
                  className="w-10 h-10 rounded-xl bg-primary hover:bg-gray-700 hover:-translate-y-1 transition delay-100 ease-in focus:bg-gray-700 focus:translate-y-0 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 m-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </button>
                <button
                  aria-label="notification"
                  className="w-10 h-10 rounded-xl  bg-primary  hover:bg-gray-700 hover:-translate-y-1 transition delay-100 ease-in focus:bg-gray-700 focus:translate-y-0 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 m-auto"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="px-6 pt-6 2xl:container bg-base">{children}</div>
        </div>
      </div>
    </>
  );
};

export default WindowContainer;
