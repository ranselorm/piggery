import { footer } from "../data";
import { Link } from "react-router-dom";
import {
  AiFillCaretRight,
  AiTwotonePhone,
  AiOutlineInstagram,
} from "react-icons/ai";
import { ImLocation } from "react-icons/im";
const { logo } = footer;

const Footer = () => {
  return (
    <footer className="bg-neutral-500">
      <div className="container mx-auto flex flex-col gap-y-10 lg:gap-y-0 md:flex-row justify-between px-6 lg:px-0 items-start md:items-start h-full py-[50px]">
        <div className="flex-1 flex flex-col gap-x-4">
          <Link to="/">
            <h3 className="text-white text-xl mb-5">SG AFRIKA FARMS</h3>
          </Link>
          <p className="text-white text-[14px]">
            With a focus on animal welfare and top-notch facilities, our piggery
            is dedicated to producing premium-quality pork products. Come
            explore our farm and witness our dedication to raising happy and
            healthy pigs
          </p>
        </div>
        <div className="flex flex-col items-center flex-1">
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-white text-xl mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-y-4">
              <li className="text-white">
                <a href="#" className="flex items-center gap-x-2">
                  <AiFillCaretRight className="text-primary-200" />
                  Home
                </a>
              </li>
              <li className="text-white">
                <a href="#" className="flex items-center gap-x-2">
                  <AiFillCaretRight className="text-primary-200" />
                  About
                </a>
              </li>
              <li className="text-white">
                <a href="#" className="flex items-center gap-x-2">
                  <AiFillCaretRight className="text-primary-200" />
                  Pictures
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-center flex-1">
          <div className="flex flex-col items-start justify-start">
            <h4 className="text-white text-xl mb-5">Contact us</h4>
            <ul className="flex flex-col gap-y-4">
              <li className="text-white">
                <p className="flex items-center gap-x-2">
                  <AiTwotonePhone className="text-primary-200" />
                  020 246 9191
                </p>
              </li>
              <li className="text-white">
                <p className="flex items-center gap-x-2">
                  <ImLocation className="text-primary-200" />
                  Pokrom, Eastern Region
                </p>
              </li>
              <li className="text-white">
                <p className="flex items-center gap-x-2">
                  <AiOutlineInstagram className="text-primary-200 -pl-[50px]" />
                  @sgafrikafarms
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-primary-200 mt-[20px] opacity-25"></div>
      <div className="mt-4 text-center text-sm pb-4">
        <p className="text-white">
          © Copyright 2023
          <span className="text-primary-200 ml-2">SG AFRIKA FARMS</span> All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
