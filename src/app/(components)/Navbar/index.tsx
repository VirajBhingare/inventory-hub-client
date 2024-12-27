"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { Menu, Moon, Search, Settings, Sun } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };
  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* LEFT SIDE */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 rounded-full bg-gray-100 hover:bg-orange-300"
          onClick={toggleSidebar}
        >
          <Menu className="h-4 w-4" />
        </button>
        <div className="search-box relative">
          <input
            type="search"
            placeholder="Search Products"
            className="py-2 pl-10 w-44 lg:w-full border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-orange-300"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="text-gray-500" size={16} />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-between items-center gap-5">
        {/* VISIBLE ON MEDIUM SCREEN */}
        <div className="hidden md:flex justify-between items-center gap-5">
          <button onClick={toggleDarkMode}>
            {isDarkMode ? (
              <Sun className="text-gray-500 cursor-pointer" size={24} />
            ) : (
              <Moon className="text-gray-500 cursor-pointer" size={24} />
            )}
          </button>
          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />

          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9">Image</div>
            <span className="font-semibold">Viraj Bhingare</span>
          </div>
        </div>
        <Link href="/settings">
          <Settings className="cursor-pointer text-gray-500" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
