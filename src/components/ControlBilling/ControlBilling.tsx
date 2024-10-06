"use client"
import Image from "next/image";
import { MotionTransition } from "../MotionTransition";
import Reveal from "../Reveal/Reveal";

export function ControlBilling(){
    return(
        <div className="p-4 py-20 md:py-64">
            <div className="flex flex-col-reverse max-w-screen-xl mx-auto md:flex-row place-content-evenly">
                <MotionTransition >
                    <Image src="/assets/control-business.png" alt="Control Business" width={500} height={411}></Image>
                </MotionTransition>
                <div className="flex-1 p-6 md:p-8">
                    <Reveal>
                        <h2 className="text-5xl font-semibold">Controla fácilmente <br />
                        tu facturación</h2>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Con la tarjeta de crédito adecuado, puede mejorar su vida financiera generando crédito, obteniendo recompensas y ahorrando dinero. Pero con cientos de tarjetas de crédito en el mercado</p>
                    </Reveal>
                </div>

            </div>
        </div>
    )
}