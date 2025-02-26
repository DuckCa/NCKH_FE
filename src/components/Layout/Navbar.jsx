import React, { useEffect, useState } from "react";
import { useContext } from "react";
import BtnAccount from "./Nav/BtnAccount";
import BtnMenu from "./Nav/BtnMenu";
import BtnHome from "./Nav/BtnHome";
import BtnCreate from "./Nav/BtnCreate";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { AuthContext } from "@/context/AuthContext";
import { CheckRole } from "@/components/PrivateComponent";
import { Button, Dropdown } from "antd";
import { itemApi } from "@/service";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const itemsMenu = [
  {
    key: "sub1",
    label: "Navigation Two",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "5",
        label: "Option 5",
      },
      {
        key: "6",
        label: "Option 6",
      },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          {
            key: "7",
            label: "Option 7",
          },
          {
            key: "8",
            label: "Option 8",
          },
        ],
      },
    ],
  },
];

const Navbar = ({ cateData }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (Array.isArray(cateData)) {
      try {
        // Sắp xếp cateData theo thứ tự bảng chữ cái dựa trên Name
        const sortedCategories = [...cateData].sort((a, b) =>
          a.Name.localeCompare(b.Name)
        );
  
        // Chuyển đổi cateData thành định dạng items
        const formattedItems = sortedCategories.map((category, index) => ({
          key: String(index + 1),
          label: <Link to={`/category/${category._id}`}>{category.Name}</Link>,
        }));
  
        console.log(">>>>>>>>>>>>>CHECK category .map", formattedItems);
        setItems(formattedItems);
      } catch (error) {
        console.error(">>>>>>>>>>>>>CHECK error", error);
      }
    }
  }, [cateData]);
  

  const checkcontext = useContext(AuthContext);

  console.log(">>>>>>>>>>>>>CHECK CONTEXT AT HOME:", checkcontext);
  console.log(">>>>>>>>>>>>>CHECK dataCateory:", items);
  return (
    <div className="sticky top-0 z-50">
      <nav className="flex items-center justify-between bg-gray-100 p-3  shadow-md ">
        <div className=" flex flex-row">
          <Link to="/">
            <Logo />
          </Link>
          <div className="flex items-center space-x-4 px-5">
            <BtnHome />

            <Dropdown
              className="flex flex-row px-4 py-2 bg-gray-300 rounded-full font-medium hover:bg-gray-400 h-10"
              menu={{ items }}
              placement="bottomRight"
              arrow
            >
              <Button className="ui-sans-serif flex flex-row px-4 py-2 bg-gray-300 rounded-full text-base font-medium hover:bg-gray-400 leading-6 ">
                Category
                <span className="ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </Button>
            </Dropdown>
            <CheckRole action="manage" subject="Item">
              <BtnCreate />
            </CheckRole>
            {/* can author */}
            <CheckRole action="purchase" subject="Item">
              <button className="flex flex-row px-4 py-2 bg-gray-300 rounded-full font-medium hover:bg-gray-400">
                Auction
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                    />
                  </svg>
                </span>
              </button>
            </CheckRole>
            <CheckRole action="manage" subject="all">
              <Link to="/Admin">
                <button className="flex flex-row px-4 py-2 bg-gray-300 rounded-full font-medium hover:bg-gray-400">
                  Admin
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </CheckRole>

            <CheckRole action="purchase" subject="Item">
              <Link to="/Cart">
                <button className="flex flex-row px-4 py-2 bg-gray-300 rounded-full font-medium hover:bg-gray-400">
                  Cart
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </CheckRole>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative w-80">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search"
              className="px-10 py-2 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <CheckRole action="purchase" subject="Item">
            <button className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                  />
                </svg>
              </span>
              <span className="sr-only">Tạo mới</span>
            </button>
            {/* can author */}
          </CheckRole>
          <BtnMenu />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
