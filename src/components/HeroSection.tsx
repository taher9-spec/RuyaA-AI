import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Check, Users, Shield } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => (
  <section className="relative pt-32 pb-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 via-transparent to-gold-500/10 blur-3xl" />
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center relative z-10"
    >
      <motion.h1
        className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-balance"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <span className="gradient-text">Premium Trading Signals</span>
        <br />
        <span className="text-white">Built for Syrian Traders</span>
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-10 text-slate-300 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Join 10,000+ successful traders using AI-powered signals with 85%+ accuracy.
        <br className="hidden md:block" />
        Local support, instant withdrawals, premium results.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-bold h-14 px-8 text-lg rounded-xl shadow-lg hover:shadow-gold-500/25 transition-all duration-300"
        >
          Start Premium Trading <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-2 border-slate-600 text-white hover:bg-slate-800 h-14 px-8 text-lg rounded-xl backdrop-blur-sm"
        >
          View Live Signals <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
      <motion.div
        className="flex flex-wrap gap-8 justify-center text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {[
          { icon: Check, text: '85%+ Signal Accuracy' },
          { icon: Users, text: '10,000+ Active Traders' },
          { icon: Shield, text: 'Secure & Licensed' },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-slate-300">
            <item.icon className="h-5 w-5 text-gold-400" />
            <span>{item.text}</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
