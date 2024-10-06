"use client";
import React from "react";
import BackgroundRadialRight from "../BackgroundRadialRight/BackgroundRadialRight";
import Link from "next/link";
import { MotionTransition } from "../MotionTransition";
import Image from "next/image";
import Reveal from "../Reveal/Reveal";

function FirstBlock() {
    return (
        <div className="relative p-4 md:py-40 ">
            <BackgroundRadialRight />
            <div className="grid md:grid-cols-2 max-w-screen-xl mx-auto ">
                <div>
                    <Reveal>
                        <h1 className="text-5xl font-semibold">
                            El Nuevo
                            <span className="block degradedBlue bg-blueLight">
                                Banco
                            </span>
                            para todos
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">
                            Nuestro equipo de expertos utiliza una metodología
                            para identificar las tarjetas de crédito que
                            probablemente se ajusten a sus necesidades.
                            Examinamos tasas porcentuales anuales, tarifas
                            anuales{" "}
                        </p>
                    </Reveal>
                    <Reveal>
                        <div className="my-8">
                            <Link
                                href="#clients"
                                className="px-4 py-3 rounded-md bg-blueRadial"
                            >
                                Empieza Ahora{" "}
                            </Link>
                        </div>
                    </Reveal>
                </div>
                <MotionTransition>
                    <Image
                        src="/assets/cards-block.png"
                        alt="card"
                        width={450}
                        height={450}
                    />
                </MotionTransition>
            </div>
        </div>
    );
}

export default FirstBlock;
