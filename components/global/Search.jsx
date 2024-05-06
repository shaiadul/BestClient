"use client";
import Image from "next/image";
import bestLogo from "@/public/images/bestElectronicsLogo.svg";
import userIcon from "@/public/images/userIcon.svg";
import cartIcon from "@/public/images/cartIcon.svg";
import CloseIcon from '@mui/icons-material/Close';
import EmptyCart from "@/public/images/emptyCart.png";
import Link from "next/link";
import { Box, Drawer } from "@mui/material";
import { useState } from "react";

export default function Search() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <main className="px-5 md:px-44 lg:px-28 grid grid-cols-4 justify-center items-center gap-5 my-5">
      <div className="col-span-2 md:col-span-1">
        <Image
          src={bestLogo}
          className="w-full md:w-fit"
          alt="Best Electronics Icon"
        />
      </div>

      <div className="w-full mx-auto col-span-2 hidden md:block">
        <div className="relative flex items-center w-full h-14 rounded-lg bg-[#F3F4F7] overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-[#F3F4F7]"
            type="text"
            id="search"
            placeholder="Search for products.."
          />
        </div>
      </div>

      <div className="flex justify-end items-center gap-5 col-span-2 md:col-span-1">
        <div className="w-[42px] h-[42px] rounded-full border hover:border-[#FFF1EE] p-2 hover:bg-[#FFF1EE] duration-700 hidden md:block">
          <Link href="/">
            <Image
              src={userIcon}
              alt="User Icon"
              className="flex justify-center mx-auto w-full h-full ml-[2px]"
            />
          </Link>
        </div>
        <div className="text-md font-bold ">
          <h3>৳ 50000</h3>
        </div>
        <div className="w-[42px] h-[42px] rounded-full border border-[#FFF1EE] bg-[#FFF1EE] p-2 relative ">
          <button 
          className="flex justify-center mx-auto w-full h-full"
           onClick={toggleDrawer(true)}>
            <Image
              src={cartIcon}
              alt="User Icon"
              className="flex justify-center mx-auto w-full h-full"
            />
          </button>
          <div>
            <span className="absolute top-0 -right-2 bg-[#F16521] text-white rounded-full text-xs px-1">
              2
            </span>
          </div>
        </div>
      </div>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 350 }}
          role="presentation"
          className=""
        >
        <div className="flex justify-between items-center border-b-2 p-3">
          <h3 className="text-xl">Shopping Cart</h3>
          <button className="inline-block" onClick={toggleDrawer(false)}>
            <CloseIcon />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <Image 
          className="w-40 h-40"
          src={EmptyCart} 
          alt="Empty Cart" />

          <span>No products in the cart</span>
        </div>
        </Box>
      </Drawer>
    </main>
  );
}
