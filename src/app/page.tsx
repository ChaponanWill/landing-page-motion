import { BestBusiness } from "@/components/BestBusiness";
import { ChooseYourCards } from "@/components/ChooseYourCards";
import { ControlBilling } from "@/components/ControlBilling";
import { CounterData } from "@/components/CounterData";
import FirstBlock from "@/components/FirstBlock/FirstBlock";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header/Header";
import PaymentsMethods from "@/components/PaymentsMethods/PaymentsMethods";

import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <FirstBlock />
      <CounterData />
      <BestBusiness />
      <ChooseYourCards />
      <ControlBilling />
      <Testimonials />
      <PaymentsMethods />
      <Footer />
    </div>
  )
}
