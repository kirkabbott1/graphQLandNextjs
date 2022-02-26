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
            <a className="text-3xl sm:text-2xl font-semibold text-medteal hover:text-darkteal">
              KA
            </a>
          </Link>
        </div>
      </div>
      <div className="hidden md:block ">
        <ul className="flex mt-4 sm:mt-0">
          <li className="ml-4">
            <Link href="/about">
              <a className="text-medteal hover:text-darkteal">About</a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/portfolio">
              <a className="text-medteal hover:text-darkteal">Playground</a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/blog">
              <a className="text-medteal hover:text-darkteal">Notes</a>
            </Link>
          </li>
        </ul>
      </div>

      <Transition
        className="md:hidden"
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        {(ref) => (
          <div id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <ul className="flex-col  mt-4 sm:mt-0">
                <li className="ml-4">
                  <Link href="/about">
                    <a className="text-teal-300 hover:text-teal-700">About</a>
                  </Link>
                </li>
                <li className="ml-4">
                  <Link href="/portfolio">
                    <a className="text-teal-300 hover:text-teal-700">Playground</a>
                  </Link>
                </li>
                <li className="ml-4">
                  <Link href="/blog">
                    <a className="text-teal-300 hover:text-teal-700">Notes</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </Transition>

      <div className=" flex justify-center md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="bg-darkblue h-5 w-5 rounded-md text-teal-400 "
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
