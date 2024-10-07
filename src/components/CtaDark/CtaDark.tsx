import Link from "next/link";
import Reveal from "../Reveal/Reveal";

export function CtaDark() {
    return (
        <div className="px-6 md:mt-36">
            <div className="max-w-screen-xl mx-auto px-4 py-6 border-transparent bg-radialBlack md:px-16 md:py-12 shadow-dark rounded-3xl">
                <div className="grid items-center md:grid-cols-2">
                    <div className="my-8">
                        <Reveal>
                            <h3 className="text-3xl font-bold">Ven a probar nuestros servicios</h3>
                        </Reveal>
                        <Reveal>
                            <p>Todo lo que Todo lo que necesitas para aceptar pagos con tarjeta y haga crecer su negocio en cualquier parte del planeta</p>
                        </Reveal>
                    </div>
                    <Link href="#" className="px-4 py-3 mx-auto rounded-md bg-blueRadial">
                    <Reveal>
                        Empieza Ahora
                    </Reveal>
                    </Link>
                </div>
            </div>
        </div>
    );
}
