import BackgroundRadialLeft from "../BackgroundRadialLeft/BackgroundRadialLeft";
import Reveal from "../Reveal/Reveal";
import { Slide } from "./Slide";

export function Testimonials() {
    return (
        <div className="relative p-8 md:py-64 " id="testimonios">
            <BackgroundRadialLeft />
            <div className="grid max-w-screen-xl mx-auto gap-8 my-6 md:grid-cols-2">
                <Reveal>
                    <h2 className="text-5xl mb-5 font-semibold">
                        Qué dicen los clientes de nosotros
                    </h2>
                </Reveal>
                <Reveal>
                    <div className="self-center">
                        <p className="text-primaryDark">
                            Todo lo que necesitas para aceptar pagos con tarjeta
                            y hacer crecer tu negocio en cualquier parte del
                            planeta
                        </p>
                    </div>
                </Reveal>
            </div>
            <Slide />
        </div>
    );
}
