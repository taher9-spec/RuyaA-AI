import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  BarChart3,
  Wallet,
  HeadphonesIcon,
  Bot,
  Star,
  Quote,
  Award
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Header from "./Header";
import Footer from "./Footer";
import FeatureCard from "./FeatureCard";
import PricingTier from "./PricingTier";
import ChartVisualization from "./ChartVisualization";
import HeroSection from "./HeroSection";

// TODO: further split this component into additional sections
// for easier maintenance and readability.

const HomePage = () => {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      location: "Damascus",
      text: "Ruyaa's premium signals helped me achieve 300% returns in just 3 months. The AI predictions are incredibly accurate.",
      rating: 5,
      profit: "+$12,500",
    },
    {
      name: "Fatima Hassan",
      location: "Aleppo",
      text: "Finally, a platform that understands Syrian traders. Local support and payments make everything seamless.",
      rating: 5,
      profit: "+$8,200",
    },
    {
      name: "Omar Khalil",
      location: "Homs",
      text: "The automated trading feature is a game-changer. I can trade while focusing on my business.",
      rating: 5,
      profit: "+$15,800",
    },
  ];

  const faqs = [
    {
      question: "How accurate are your trading signals?",
      answer:
        "Our AI-powered signals maintain an 85%+ accuracy rate, backed by advanced machine learning algorithms and real-time market analysis.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We support local Syrian payment methods, international wire transfers, and major cryptocurrencies for maximum flexibility.",
    },
    {
      question: "Is there a minimum deposit requirement?",
      answer:
        "Our Pro plan starts at $1,000, while Elite Arbitrage requires $5,000. We also offer a free starter plan to get you started.",
    },
    {
      question: "Do you provide customer support in Arabic?",
      answer:
        "Yes, our dedicated support team provides full assistance in both Arabic and English, with local market expertise.",
    },
    {
      question: "How quickly can I withdraw my profits?",
      answer:
        "Withdrawals are processed within 24-48 hours through your preferred method - cash, crypto, or bank transfer.",
    },
  ];

  const teamMembers = [
    {
      name: "Dr. Khalid Al-Mansouri",
      role: "Chief Trading Officer",
      experience: "15+ years in forex markets",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=khalid",
    },
    {
      name: "Sarah Abdel-Rahman",
      role: "AI Research Director",
      experience: "PhD in Financial Engineering",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      name: "Hassan Al-Zahra",
      role: "Regional Operations Manager",
      experience: "Local market specialist",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=hassan",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Header currentLanguage={language} onLanguageChange={setLanguage} />

      {/* Hero Section */}
      <HeroSection />

      {/* Chart Visualization Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Live Market Analysis</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real-time gold and forex signals powered by advanced AI algorithms
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ChartVisualization
              title="Gold Price Signals"
              type="gold"
              data={[
                { time: "09:00", price: 1980 },
                { time: "10:00", price: 1985 },
                { time: "11:00", price: 1978 },
                { time: "12:00", price: 1995 },
                { time: "13:00", price: 2003 },
                { time: "14:00", price: 2010 },
              ]}
            />
            <ChartVisualization
              title="EUR/USD Forex Signals"
              type="forex"
              data={[
                { time: "09:00", price: 1.071 },
                { time: "10:00", price: 1.0725 },
                { time: "11:00", price: 1.0705 },
                { time: "12:00", price: 1.074 },
                { time: "13:00", price: 1.078 },
                { time: "14:00", price: 1.0795 },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Premium Trading <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Advanced tools and AI-powered insights for professional traders
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="h-12 w-12 text-gold-400" />}
              title="AI Trade Assistant"
              description="Advanced machine learning algorithms analyze market patterns and provide real-time trading recommendations with 85%+ accuracy."
              gradient
            />
            <FeatureCard
              icon={<Bot className="h-12 w-12 text-blue-400" />}
              title="Automated Trading"
              description="Set your strategy and let our system execute trades automatically. Perfect for busy professionals and consistent profits."
            />
            <FeatureCard
              icon={<BarChart3 className="h-12 w-12 text-emerald-400" />}
              title="Advanced Analytics"
              description="Comprehensive profit tracking, risk analysis, and performance metrics to optimize your trading strategy."
            />
            <FeatureCard
              icon={<Wallet className="h-12 w-12 text-purple-400" />}
              title="Instant Withdrawals"
              description="Withdraw profits in cash, crypto, or bank transfer within 24-48 hours. Multiple local payment options available."
            />
            <FeatureCard
              icon={<HeadphonesIcon className="h-12 w-12 text-orange-400" />}
              title="Premium Support"
              description="Dedicated Arabic-speaking support team with local market expertise available 24/7 for premium members."
            />
            <FeatureCard
              icon={<Award className="h-12 w-12 text-gold-400" />}
              title="VIP Community"
              description="Exclusive access to premium Telegram channels, market insights, and direct communication with expert traders."
              gradient
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Trusted by <span className="gradient-text">Syrian Traders</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real results from real traders across Syria
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="hover-lift"
              >
                <Card className="h-full bg-slate-900/90 border-slate-700/30 rounded-2xl overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-gold-400 text-gold-400"
                        />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-gold-400 mb-4" />
                  </CardHeader>
                  <CardContent className="pb-6">
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-slate-400">{testimonial.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-emerald-400 font-bold text-lg">
                          {testimonial.profit}
                        </p>
                        <p className="text-slate-400 text-sm">Profit</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Choose Your <span className="gradient-text">Premium Plan</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Unlock professional trading tools and premium signals
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingTier
              title="Pro Trader"
              price="1,000"
              currency="$"
              period="minimum"
              description="Professional trading with premium AI signals and priority support"
              features={[
                "Premium AI signals (85%+ accuracy)",
                "Real-time market analysis",
                "Priority customer support",
                "Advanced trading dashboard",
                "VIP Telegram access",
                "Weekly market reports",
              ]}
              ctaText="Start Pro Trading"
              popular={true}
            />
            <PricingTier
              title="Elite Arbitrage"
              price="5,000"
              currency="$"
              period="minimum"
              description="Our most comprehensive package for serious professional traders"
              features={[
                "Arbitrage detection engine",
                "Automated trading system",
                "1-on-1 expert coaching",
                "Custom trading strategies",
                "Priority signal delivery",
                "Dedicated account manager",
              ]}
              ctaText="Get Elite Access"
            />
            <PricingTier
              title="VIP Exclusive"
              price="Custom"
              description="Tailored solutions for institutional and high-volume traders"
              features={[
                "Custom signal algorithms",
                "Dedicated trading server",
                "24/7 personal support",
                "Custom risk management",
                "Institutional-grade tools",
                "Direct market access",
              ]}
              ctaText="Contact Sales"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-slate-300">
              Everything you need to know about premium trading with Ruyaa
            </p>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-slate-900/90 border border-slate-700/30 rounded-xl px-6 data-[state=open]:bg-slate-800/50"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-gold-400 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* About Us/Team Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Meet Our <span className="gradient-text">Expert Team</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Industry veterans with decades of combined experience in Syrian
              and international markets
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="hover-lift"
              >
                <Card className="bg-slate-900/90 border-slate-700/30 rounded-2xl overflow-hidden text-center">
                  <CardHeader className="pb-4">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-slate-800">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-gold-400 font-semibold">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">{member.experience}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Ready to <span className="gradient-text">Transform</span> Your
              Trading?
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Join thousands of successful Syrian traders using our premium
              AI-powered signals.
              <br className="hidden md:block" />
              Start with professional tools, expert support, and proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-bold h-16 px-10 text-xl rounded-xl shadow-2xl hover:shadow-gold-500/25 transition-all duration-300"
              >
                Start Premium Trading <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-600 text-white hover:bg-slate-800 h-16 px-10 text-xl rounded-xl backdrop-blur-sm"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer language={language} onLanguageChange={setLanguage} />
    </div>
  );
};

export default HomePage;
