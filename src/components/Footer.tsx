import React from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  MessageCircle,
  AlertTriangle,
  ExternalLink,
} from "lucide-react";
import { Button } from "./ui/button";

interface FooterProps {
  language?: "en" | "ar";
  onLanguageChange?: (lang: "en" | "ar") => void;
}

const Footer = ({
  language = "en",
  onLanguageChange = () => {},
}: FooterProps) => {
  const handleLanguageToggle = () => {
    onLanguageChange(language === "en" ? "ar" : "en");
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Ruyaa</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>contact@ruyaa.com</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                <a
                  href="https://t.me/ruyaatrading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors"
                >
                  Telegram: @ruyaatrading
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Risk Notices */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Legal</h3>
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Trading involves significant risk. Past performance is not
                  indicative of future results. Only trade with capital you can
                  afford to lose.
                </span>
              </p>
              <div className="pt-2">
                <Link
                  to="/terms"
                  className="text-sm hover:text-gold-400 transition-colors"
                >
                  Terms of Service
                </Link>
                <span className="mx-2">•</span>
                <Link
                  to="/privacy"
                  className="text-sm hover:text-gold-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Language Toggle & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Preferences</h3>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-4 w-4" />
              <Button
                variant="outline"
                size="sm"
                onClick={handleLanguageToggle}
                className="text-sm"
              >
                {language === "en" ? "عربي" : "English"}
              </Button>
            </div>
            <p className="text-sm">
              Join our community for daily signals and market updates.
            </p>
            <div className="mt-2">
              <Button
                variant="default"
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-700"
                asChild
              >
                <a
                  href="https://t.me/ruyaatrading"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Telegram Channel
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Ruyaa Trading. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
