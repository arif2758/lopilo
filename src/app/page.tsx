import AuthorsIdentity from "@/components/AuthorsIdentity";
import FastPaced from "@/components/FastPaced";
import FulfillmentofLife from "@/components/FulfillmentofLife";
import HighLights from "@/components/HighLights";
import InsideTheBook from "@/components/InsideTheBook";
import IWillOrder from "@/components/IWillOrder";
import OfferBanner from "@/components/OfferBanner";
import OfferTime from "@/components/OfferTime";
import OnceLifeTimeOffer from "@/components/OnceLifeTimeOffer";
import OrderForm from "@/components/OrderForm";
import ResetButtonPress from "@/components/ResetButtonPress";
import Reviews from "@/components/Reviews";
import SatisfictionGuaranteed from "@/components/SatisfictionGuaranteed";
import WantToChangeMakeButton from "@/components/WantToChangeMakeButton";
import WhateverYouLearn from "@/components/WhateverYouLearn";
import WhereChallenge from "@/components/WhereChallenge";
import WhyRestartYourSelf from "@/components/WhyRestartYourSelf";
import WhyTrust from "@/components/WhyTrust";
import YourQueries from "@/components/YourQueries";
import WholeCountryDelivery from "@/components/WholeCountryDelivery";
import Guidebook from "@/components/Guidebook";

export default function Home() {
  return (
    <main className="relative mt-1 mx-1">
      <FulfillmentofLife />
      <FastPaced />
      <ResetButtonPress />
      <WhereChallenge />
      <WhyRestartYourSelf />
      <Guidebook />
      <WholeCountryDelivery />
      <WhateverYouLearn />
      <HighLights />
      <OfferBanner />
      <InsideTheBook />
      <OnceLifeTimeOffer />
      <OfferTime />
      <Reviews />
      <AuthorsIdentity />
      <WantToChangeMakeButton />
      <WhyTrust />
      <SatisfictionGuaranteed />
      <YourQueries />
      <OrderForm />

      <div className="z-10 sticky bottom-0 hidden  md:block">
        {" "}
        <IWillOrder />
      </div>
    </main>
  );
}
