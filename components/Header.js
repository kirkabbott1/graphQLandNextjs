import Link from "next/link";
import { Transition } from "@headlessui/react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between px-6 pt-6">
      <div className="flex-shrink-0">
        <div>
          <Link href="/">
            <a className="text-2xl md:text-3xl">
              <div className="inline-flex text-center align-middle text-medteal md:text-2xl overflow-hidden">
                <span className="font-bold tracking-widest">KA</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex lg:pr-2">
        <ul className="flex">
          <li className="ml-4">
            <Link href="/about">
              <a className="text-medteal hover:text-lightteal cursor-auto">About</a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/contact">
              <a className="text-medteal hover:text-lightteal cursor-auto">Contact</a>
            </Link>
          </li>
          {/* <li className="ml-4">
            <Link href="/portfolio">
              <a className="text-medteal hover:text-lightteal">Playground</a>
            </Link>
          </li> */}
          {/* <li className="ml-4">
            <Link href="/blog">
              <a className="text-medteal hover:text-lightteal cursor-auto">Articles</a>
            </Link>
          </li> */}
        </ul>
      </div>

      <Transition
        className=""
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        {(menuRef) => {
          console.log("menuRef:", menuRef);
          return (
            <div id="mobile-menu">
              {/* <div ref={menuRef} className="px-2 pt-2 pb-3 space-y-1 sm:px-3"> */}
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <ul className="flex-col  mt-4 sm:mt-0">
                  <li className="ml-4">
                    <Link href="/about">
                      <a className="text-medteal hover:text-lightteal">About</a>
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link href="/contact">
                      <a className="text-medteal hover:text-lightteal">Contact</a>
                    </Link>
                  </li>
                  {/* <li className="ml-4">
                    <Link href="/portfolio">
                      <a className="text-teal-300 hover:text-lightteal">Playground</a>
                    </Link>
                  </li> */}
                  <li className="ml-4">
                    <Link href="/blog">
                      <a className="text-medteal hover:text-lightteal">Articles</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          );
        }}
      </Transition>

      <div className="flex justify-center md:hidden">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          type="button"
          className=" h-5 w-5 rounded-md text-medteal hover:text-lightteal"
          aria-controls="mobile-menu"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          {!isOpen ? (
            <svg
              className="flex h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="flex h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
