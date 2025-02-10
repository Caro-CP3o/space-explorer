"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const nav = [
  { name: "Home", href: "/" },
  { name: "Apod", href: "/apod" },
  { name: "Rovers", href: "/rovers" },
  { name: "Timeline", href: "/timeline" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  // Récupère la route active
  const pathname = usePathname();
  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-indigo-950 to-fuchsia-800 text-zinc-50 uppercase fixed w-full"
    >
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-zinc-50 hover:text-purple-500 focus:outline-none">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="logo flex shrink-0 items-center">
            <img src="./nasa-logo.svg" alt="" className="h-16 w-auto" />
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {nav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    pathname === item.href
                      ? "text-indigo-500"
                      : "text-white hover:bg-purple-900 hover:text-white",
                    "rounded-md px-3 py-2 text-sm"
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {nav.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-indigo-800 text-white"
                  : "text-gray-300 hover:bg-purple-900 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
