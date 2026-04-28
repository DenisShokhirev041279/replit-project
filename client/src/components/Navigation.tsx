import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, cycleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#trailers", label: t("Trailers", "Трейлеры", "Trailer") },
    { href: "#proof", label: t("Proof", "Доказательство", "Beweis") },
    { href: "#manifest", label: t("Manifest", "Манифест", "Manifest") },
    { href: "#action", label: t("Action", "Действие", "Protokoll") },
    { href: "#cta", label: t("Access", "Доступ", "Zugang") },
  ];

  const getNextLang = () => {
    if (language === "en") return "RU";
    if (language === "ru") return "DE";
    return "EN";
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent ${
          isScrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tighter uppercase font-display hover:text-white/80 transition-colors">
            PROMETHEUS <span className="text-red-600">×</span> AGI
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-600 transition-all group-hover:w-full" />
              </a>
            ))}
            <button
              onClick={cycleLanguage}
              className="text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors border border-white/20 px-3 py-1 hover:border-white/40"
              data-testid="button-language-toggle"
            >
              {getNextLang()}
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col space-y-8 text-center">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl uppercase tracking-widest font-bold text-white hover:text-red-500 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { cycleLanguage(); setMobileMenuOpen(false); }}
                className="text-xl uppercase tracking-widest font-bold text-white/60 hover:text-white transition-colors border border-white/30 px-6 py-2 mt-4"
                data-testid="button-language-toggle-mobile"
              >
                {getNextLang()}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
