import Image from "next/image";
import Reveal from "../Reveal/Reveal";
import { footerData, footerSocialNetworks } from "./Footer-data";
import Link from "next/link";

export function Footer() {
  return (
    <div className="max-w-screen-xl mx-auto p-6 mt-10 md:-mt-40">
        <div className="justify-between md:flex">
            <div>
                <Image src="/assets/logo.png" alt="Logo Bank" width={200} height={40} />
                <Reveal>
                    <p className="mt-5 text-primaryDark max-w-[250px]">
                        Una nueva forma de hacer pagos de forma sencilla
                    </p>
                </Reveal>
            </div>
            {
                footerData.map(({id, title, links})=>(
                    <div key={id}>
                        <h4 className="mt-8 text-lg md:mt-0">
                            <Reveal>{title}</Reveal>
                        </h4>
                        {
                            links.map(({id, name, link})=>(
                                <Link key={id} href={link} className="block mt-4 text-primaryDark hover:text-white">
                                    <Reveal>{name}</Reveal>
                                </Link>
                            ))
                        }
                    </div>
                    
                ))
            }
        </div>
        <div className="border-[#3F3E45] border-[1px] my-7"></div>
        <div className="items-center justify-between md:flex">
            <div className="my-3">
                <Reveal>
                    2023 © Bank. Todos los derechos reservados
                </Reveal>
            </div>
            <div className="flex gap-5">
                {
                    footerSocialNetworks.map(({id, icon, link})=>(
                        <Link key={id} href={link} className="text-2xl">
                            {icon}
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

