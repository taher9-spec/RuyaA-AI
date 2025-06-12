import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  gradient?: boolean;
}

const FeatureCard = ({
  icon,
  title,
  description,
  className = "",
  gradient = false,
}: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`h-full ${className}`}
    >
      <Card
        className={`h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-2xl group ${
          gradient
            ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50"
            : "bg-slate-900/90 backdrop-blur-sm border border-slate-700/30"
        }`}
      >
        <CardHeader className="pb-4 pt-8">
          <motion.div
            className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          <CardTitle className="text-2xl font-bold text-white group-hover:text-gold-400 transition-colors duration-300">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-8">
          <CardDescription className="text-slate-300 text-lg leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
