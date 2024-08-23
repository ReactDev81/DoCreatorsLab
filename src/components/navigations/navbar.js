'use client'
import { CgMenuRight } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);

  return (
    <nav className="px-5 pt-5 sm:pt-9 lg:pt-12">
      <div className="relative mx-auto flex max-w-[1400px] items-center">
        <div className="logo-col flex-1">
          <img
            className="hidden max-w-[200px] dark:block md:max-w-[275px] lg:max-w-[333px]"
            src="/white-logo.png"
            alt="DoCreatorsLab"
          />
          <img
            className="block max-w-[200px] dark:hidden md:max-w-[275px] lg:max-w-[333px]"
            src="/logo.png"
            alt="DoCreatorsLab"
          />
        </div>

        <div className="nav-link-col flex-1 text-right">
          <button className="mr-[15px] hidden rounded-[5px] border border-solid border-[#d4d6d8] bg-[#f3f4f6] py-3.5 px-5 text-xl font-medium leading-6 text-[#1D2939] dark:border-[#FFFFFF26] dark:bg-[#FFFFFF14] dark:text-white md:inline-block lg:p-5">
            Login
          </button>
          <button
            className="relative hidden rounded-[5px] py-3.5 px-5 text-xl font-medium leading-6 text-white md:inline-block lg:p-5"
            style={{
              background: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            <span
              className="absolute inset-0 rounded-[5px]"
              style={{
                background:
                  'linear-gradient(90deg, #D6715B 0%, #CA6C69 47.5%, #AD608A 75.5%)',
                WebkitMask:
                  'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: '1px',
              }}
            ></span>
            <span
              style={{
                background:
                  'linear-gradient(90deg, #D6715B 0%, #CA6C69 47.5%, #AD608A 75.5%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Find a DoCreators
            </span>
          </button>
          <div className="md:hidden">
            <button
              className={`open-menu ${navMenu ? 'hidden' : ''}`}
              onClick={() => setNavMenu(true)}
            >
              <CgMenuRight size={42} />
            </button>
            <button
              className={`close-menu ${navMenu ? '' : 'hidden'}`}
              onClick={() => setNavMenu(false)}
            >
              <IoClose size={42} />
            </button>
          </div>
        </div>

        {/* mob-menu */}
        <div
          className={`absolute top-16 left-0 z-30 h-fit w-full flex-col gap-y-2.5 rounded-lg p-5 ${
            navMenu ? 'flex' : 'hidden'
          }`}
          style={{
            background:
              'linear-gradient(90deg, #D6715B 0%, #CA6C69 47.5%, #AD608A 75.5%)',
          }}
        >
          <button className="rounded-[5px] bg-[#FFFFFF14] p-5 text-xl font-medium leading-6 text-white">
            Login
          </button>
          <button className="rounded-[5px] bg-[#FFFFFF14] p-5 text-xl font-medium leading-6 text-white">
            Find a CoFounder
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
