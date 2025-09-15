"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Footer() {
     return (
          <footer className="bg-gray-50 dark:bg-gray-900">
               <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                         <a href="">
                              <div className="flex justify-center sm:justify-start">
                                   <img
                                        alt="Coderun Logo"
                                        src="./logo.png"
                                        className="h-16 w-auto"
                                   />
                              </div>
                         </a>
                         <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right dark:text-gray-400">
                              Copyright &copy; 2025. All rights reserved.
                         </p>
                    </div>
               </div>
          </footer>
     );
}
