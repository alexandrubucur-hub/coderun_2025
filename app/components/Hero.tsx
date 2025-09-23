"use client";
import CountdownTimer from "../components/CountdownTimer";
import styles from "./page.module.css";
import { isDateInPast } from "@/helper";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Link from "next/link";

const countdownDate = new Date("2025-10-20T23:18:07");

export default function Hero() {
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

     return (
          <div className="w-full">
               <div className="relative isolate px-6 lg:px-8">
                    <div className="pt-20">
                         <div className="flex items-center justify-between px-0 sm:px-6 lg:px-8">
                              <a
                                   href="https://bestcj.ro/"
                                   target="_blank"
                                   rel="noopener noreferrer"
                              >
                                   <img
                                        src="/best.png"
                                        alt="bestcj Logo"
                                        // Dimensiuni responsive: mic pe mobil, mai mare pe desktop
                                        className="h-24 sm:h-40 w-auto object-contain"
                                   />
                              </a>
                              <a
                                   href="https://www.utcluj.ro/"
                                   target="_blank"
                                   rel="noopener noreferrer"
                              >
                                   <img
                                        src="/ut.png"
                                        alt="UTCN Logo"
                                        // Dimensiuni responsive: mic pe mobil, mai mare pe desktop
                                        className="h-20 sm:h-36 w-auto object-contain"
                                   />
                              </a>
                         </div>
                    </div>

                    <div
                         aria-hidden="true"
                         className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                         <div
                              style={{
                                   clipPath:
                                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                              }}
                              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
                         />
                    </div>
                    <div>
                         <div className="mx-auto max-w-4xl pt-8 pb-0 sm:pt-12 sm:pb-0 lg:pt-16 lg:pb-0">
                              <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                                   <img
                                        alt="Coderun Logo"
                                        src="./logo.png"
                                        className="w-auto mx-auto"
                                   />
                              </h1>
                         </div>

                         <div className="flex flex-wrap items-center justify-center gap-8 max-w-8xl mx-auto px-8 pb-8 lg:flex-nowrap lg:justify-between">
                              {/* Coming */}
                              {/* MODIFICARE: w-2/5 pe mobil, lg:w-auto pe desktop */}
                              <img
                                   src="/coming.png"
                                   alt="coming"
                                   className="w-5/12 order-1 lg:w-auto lg:order-1"
                              />

                              {/* Countdown */}
                              <div className="w-full order-3 lg:w-auto lg:order-2">
                                   <CountdownTimer
                                        deadline={countdownDate}
                                        title="Start in:"
                                   />
                              </div>

                              {/* Soon */}
                              {/* MODIFICARE: w-2/5 pe mobil, lg:w-auto pe desktop */}
                              <img
                                   src="/soon.png"
                                   alt="soon"
                                   className="w-5/12 order-2 lg:w-auto lg:order-3"
                              />
                         </div>
                    </div>
                    <div
                         aria-hidden="true"
                         className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    >
                         <div
                              style={{
                                   clipPath:
                                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                              }}
                              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
                         />
                    </div>
               </div>
          </div>
     );
}
