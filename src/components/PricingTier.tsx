import React from "react";
import { Check, Star } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
  ctaAction?: () => void;
  currency?: string;
  period?: string;
}

const PricingTier = ({
  title = "Starter",
  price = "Free",
  description = "Get started with basic trading features",
  features = [
    "Basic gold signals",
    "Standard forex alerts",
    "Local payment methods",
    "Email support",
  ],
  popular = false,
  ctaText = "Get Started",
  ctaAction = () => {},
  currency = "$",
  period = "/month",
}: PricingTierProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative h-full"
    >
      <Card
        className={`w-full h-full border-0 shadow-2xl transition-all duration-500 overflow-hidden rounded-3xl relative ${
          popular
            ? "bg-gradient-to-br from-gold-500/10 via-slate-900 to-slate-900 ring-2 ring-gold-500/50"
            : "bg-slate-900/90 backdrop-blur-sm border border-slate-700/30"
        }`}
      >
        {popular && (
          <div className="absolute -top-4 left-0 right-0 mx-auto w-fit z-10">
            <Badge className="bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold px-4 py-2 text-sm flex items-center gap-1">
              <Star className="h-4 w-4 fill-current" />
              Most Popular
            </Badge>
          </div>
        )}

        <CardHeader className="text-center pt-12 pb-8">
          <CardTitle className="text-3xl font-bold text-white mb-2">
            {title}
          </CardTitle>
          <div className="mt-6 flex items-baseline justify-center">
            {price === "Free" ? (
              <span className="text-5xl font-extrabold tracking-tight text-gold-400">
                {price}
              </span>
            ) : (
              <>
                <span className="text-2xl font-medium text-slate-400">
                  {currency}
                </span>
                <span className="text-5xl font-extrabold tracking-tight text-white">
                  {price}
                </span>
                {period && (
                  <span className="ml-2 text-lg font-medium text-slate-400">
                    {period}
                  </span>
                )}
              </>
            )}
          </div>
          <CardDescription className="mt-4 text-slate-300 text-lg leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="px-8">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Check className="mr-3 h-6 w-6 flex-shrink-0 text-gold-400 mt-0.5" />
                <span className="text-slate-200 text-base leading-relaxed">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="pt-8 pb-10 px-8">
          <Button
            onClick={ctaAction}
            className={`w-full h-14 text-lg font-semibold rounded-xl transition-all duration-300 ${
              popular
                ? "bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black shadow-lg hover:shadow-gold-500/25"
                : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 hover:border-slate-500"
            }`}
            size="lg"
          >
            {ctaText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PricingTier;
