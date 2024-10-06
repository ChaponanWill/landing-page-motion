"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiMenuLine } from "react-icons/ri";
import { dataHeader } from "./Header-data";
import { useState } from "react";
import {MotionTransition} from "../MotionTransition/MotionTransition";

function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    return (
        <MotionTransition>
            <nav className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 md:py-8 mx-auto">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/assets/logo.png"
                        alt="logo"
                        width={150}
                        height={40}
                    />
                </Link>
                <RiMenuLine
                    className="block text-3xl lg:hidden"
                    onClick={() => setOpenMobileMenu(!openMobileMenu)}
                />
                <div
                    className={`${
                        openMobileMenu ? "block" : "hidden"
                    } w-full lg:block lg:w-auto cursor-pointer`}
                >
                    <div className="flex flex-col p-4 mt-4 lg:p-0 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0">
                        {dataHeader.map(({ id, name, idLink }) => (
                            <div
                                key={id}
                                className="px-4 transition-all duration-500 ease-in-out"
                            >
                                <Link
                                    href={idLink}
                                    className="text-lg hover:text-secondary "
                                >
                                    {name}{" "}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </MotionTransition>
    );
}

export default Header;
