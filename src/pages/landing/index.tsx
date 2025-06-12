import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingTier from "@/components/PricingTier";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Header />
      <main className="flex-grow">
        <section className="pt-32 pb-20 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
            Welcome to Ruyaa
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Cutting-edge AI signals and insights to upgrade your trading.
          </p>
          <div className="mt-8">
            <Button size="lg">Get Started</Button>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
            <PricingTier
              title="Starter"
              price="Free"
              description="Basic trading features to kickstart your journey."
              features={[
                "Access to basic signals",
                "Email support",
                "Community access",
              ]}
              ctaText="Join Free"
            />
            <PricingTier
              popular
              title="Pro"
              price="49"
              description="Advanced insights for active traders."
              features={[
                "Advanced signals",
                "Priority support",
                "Daily market briefs",
              ]}
              ctaText="Upgrade"
            />
            <PricingTier
              title="Elite"
              price="99"
              description="Full automation and premium analysis."
              features={[
                "Automated strategies",
                "Personal consultations",
                "Premium indicators",
              ]}
              ctaText="Go Elite"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
