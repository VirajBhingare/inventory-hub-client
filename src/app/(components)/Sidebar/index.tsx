"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  Archive,
  Icon,
  IndianRupee,
  Layout,
  LucideIcon,
  Menu,
  Package,
  ReceiptIndianRupee,
  Settings2,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  label: string;
  icon: LucideIcon;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-4" : "px-8 py-4"
        } hover:text-blue-500 hover:bg-blue-100 ${
          isActive ? "text-white bg-blue-200" : ""
        } gap-3 transition-colors`}
      >
        <Icon className="w-6 h-6 !text-gray-700" />
        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } font-medium text-gray-700`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col h-full overflow-hidden shadow-md z-10 ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } transition-all duration-300  bg-white`;

  return (
    <div className={sidebarClassNames}>
      {/* TOP LOGO */}
      <div
        className={`flex justify-center items-center gap-3 md:justify-normal pt-8 ${
          isSidebarCollapsed ? "px-5" : "px-8"
        }`}
      >
        <div className="logo">Logo</div>
        <h1
          className={`font-extrabold text-2xl ${
            isSidebarCollapsed ? "hidden" : "block"
          }`}
        >
          InventoryHub.
        </h1>

        <button
          onClick={toggleSidebar}
          className="md:hidden bg-gray-100 rounded-full hover:bg-blue-300 px-3 py-3"
        >
          <Menu className="w-4 h-4" size={24} />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-8">
        <SidebarLink
          href="/dashboard"
          label="Dashboard"
          icon={Layout}
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/inventory"
          label="Inventory"
          icon={Archive}
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/products"
          label="Products"
          icon={Package}
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/users"
          label="Users"
          icon={User}
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/settings"
          label="Settings"
          icon={Settings2}
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/expenses"
          label="Expenses"
          icon={ReceiptIndianRupee}
          isCollapsed={isSidebarCollapsed}
        />
      </div>

      {/* FOOTER */}
      <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-8`}>
        <p className="text-center text-xs text-gray-500">
          &copy; 2025 InventoryHub.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
