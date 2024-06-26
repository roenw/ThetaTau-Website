"use client"; // ref: https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Socials from "./Socials.js";

const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Theta Tau - ASU
              </span>
            </Link>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Contacts
            </h2>
            <ul className="text-gray-600 space-y-2">
              <li>Regent - Trevor Hunter</li>
              <li>Vice Regent - Paridhy Mann</li>
              <li>Rush Chair - Nicholas Horn</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Links{" "}
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li>
                <Link href="/brotherhood" className="hover:underline ">
                  Brotherhood
                </Link>
              </li>
              <li>
                <Link href="/professionalism" className="hover:underline">
                  Professionalism
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:underline">
                  Service
                </Link>
              </li>
              <li>
                <Link href="/rush" className="hover:underline">
                  Rush
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
