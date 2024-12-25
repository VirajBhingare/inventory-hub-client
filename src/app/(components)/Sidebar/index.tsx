"use client";

import { Menu } from "lucide-react";

const Sidebar = () => {
  return (
    <div>
      {/* TOP LOGO */}
      <div className="flex justify-center gap-3 md:justify-normal pt-8">
        <div className="logo">Logo</div>
        <h1 className="font-extrabold text-2xl">InventoryHub.</h1>

        <button
          onClick={() => {}}
          className="md:hidden bg-gray-100 rounded-full hover:bg-orange-300 px-3 py-3"
        >
          <Menu className="w-4 h-4" size={24} />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-8">Links</div>

      {/* FOOTER */}
      <div>
        <p className="text-center text-xs text-gray-500">
          &copy; 2025 InventoryHub.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
