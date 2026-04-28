import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, FileText, Check, AlertTriangle, Cpu, Globe, Lock, ChevronDown } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Section } from "@/components/Section";
import { VideoModal } from "@/components/VideoModal";
import { GrainOverlay } from "@/components/GrainOverlay";
import { useLanguage } from "@/contexts/LanguageContext";

import heroImage from "@assets/99F3B0D4-B14E-4554-98A6-A21BD0774531_1767656543420.png";
import shortTrailerPoster from "@assets/15FD1C89-B2D0-4B67-BABA-354586E0322A_1767656543422.png";
import fullManifestPoster from "@assets/IMG_3349_1767656543422.jpeg";
import galleryImage1 from "@assets/IMG_3350_1767656543422.jpeg";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({ url: "", title: "" });
  const [essayExpanded, setEssayExpanded] = useState(false);
  const { t } = useLanguage();

  const openModal = (url: string, title: string) => {
    setCurrentVideo({ url, title });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-red-900 selection:text-white">
      <GrainOverlay />
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image with cinematic treatment */}
        <div className="absolute inset-0 z-0">
          {/* Heavy vignette overlay */}
          <div className="absolute inset-0 z-20" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.9) 100%)' }} />
          {/* Top-to-bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10" />
          {/* Additional darkness layer */}
          <div className="absolute inset-0 bg-black/50 z-10" />
          <motion.img
            src={heroImage}
            alt="Prometheus AGI"
            className="w-full h-full object-cover opacity-60 scale-110"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 0.6 }}
            transition={{ duration: 3, ease: "easeOut" }}
          />
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-6 text-center w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
            className="mb-8"
          >
            <motion.p 
              className="text-[10px] md:text-xs font-mono tracking-[0.5em] uppercase text-gray-500 mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              {t("Documentary Project", "Документальный проект", "Dokumentarprojekt")}
            </motion.p>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-[10rem] lg:text-[12rem] font-black tracking-tighter uppercase mb-4 glitch-text leading-[0.9] px-2" 
              data-text="PROMETHEUS × A.G.I."
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
              style={{ textShadow: '0 0 80px rgba(0,0,0,0.8)' }}
            >
              <span className="block md:inline">PROMETHEUS</span> <span className="text-white/20 font-extralight hidden md:inline">×</span> <span className="block md:inline">A.G.I.</span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
          >
            <p className="text-xl md:text-3xl font-light text-gray-200 max-w-3xl mx-auto mb-3 tracking-wide">
              {t("This is not science fiction. This is systems physics.", "Это не фантастика. Это физика систем.", "Das ist keine Fiktion. Das ist Systemphysik.")}
            </p>
            <p className="text-sm md:text-base text-gray-500 font-mono mb-14 uppercase tracking-[0.25em]">
              {t("GER DENNIS AI — Architecture over chaos.", "GER DENNIS AI — архитектура вместо хаоса.", "GER DENNIS AI — Architektur statt Chaos.")}
            </p>

            <motion.div 
              className="flex flex-col md:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 2, ease: "easeOut" }}
            >
              <a
                href="#trailers"
                className="group relative px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm w-full md:w-auto overflow-hidden hover:bg-gray-200 transition-all duration-300"
                data-testid="button-watch-trailer"
              >
                <div className="absolute inset-0 w-0 bg-black transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
                <span className="relative flex items-center justify-center gap-3">
                  <Play size={18} fill="currentColor" /> {t("Watch Trailer", "Смотреть трейлер", "Trailer ansehen")}
                </span>
              </a>
              <a
                href="#proof"
                className="group px-10 py-5 bg-transparent border border-white/30 text-white font-bold uppercase tracking-widest text-sm w-full md:w-auto hover:border-white hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
                data-testid="button-read-proof"
              >
                <span className="flex items-center justify-center gap-3">
                  <FileText size={18} /> {t("Read Proof", "Читать доказательство", "Beweis lesen")}
                </span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1.5 }}
            className="absolute bottom-12 left-0 right-0 text-center"
          >
            <p className="text-xs text-red-500/70 font-mono tracking-[0.3em] uppercase">
              {t("A.G.I. STARGATE — Point of no return?", "A.G.I. STARGATE — точка невозврата?", "A.G.I. STARGATE — der Punkt ohne Umkehr?")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* THESES SECTION */}
      <section className="bg-black py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="p-4">
              <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-2">{t("Optimization", "Оптимизация", "Optimierung")}</h3>
              <ArrowRight className="mx-auto text-red-500 my-2" />
              <p className="text-gray-300 font-mono text-sm">{t("self-optimization", "самооптимизация", "Selbstoptimierung")}</p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-2">{t("Recursion", "Рекурсия", "Rekursion")}</h3>
              <ArrowRight className="mx-auto text-red-500 my-2" />
              <p className="text-gray-300 font-mono text-sm">{t("acceleration", "ускорение", "Beschleunigung")}</p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-2">{t("Speed", "Скорость", "Geschwindigkeit")}</h3>
              <ArrowRight className="mx-auto text-red-500 my-2" />
              <p className="text-gray-300 font-mono text-sm">{t("loss of control", "потеря контроля", "Kontrollverlust")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRAILERS SECTION */}
      <Section id="trailers" className="bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 uppercase tracking-tighter text-white/90">
            {t("Transmission Data", "Передача Данных", "Übertragungsdaten")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 - Short Trailer */}
            <div className="flex flex-col">
              <div className="group relative aspect-[9/16] md:aspect-video bg-zinc-900 border border-white/10 hover:border-red-500/50 transition-colors overflow-hidden cursor-pointer" onClick={() => openModal('https://youtube.com/shorts/VjSyJ52es4o?si=8Cyx-o7T4vNAxyEb', 'Short Trailer')}>
                <img src={shortTrailerPoster} alt="Short Trailer" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
                    <Play className="ml-1 text-white" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold uppercase tracking-widest">Short Trailer</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-300 font-light italic text-center">
                "Огонь уже у людей. Вопрос — кто контролирует пламя."
              </p>
            </div>

            {/* Card 2 - Full Manifest */}
            <div className="flex flex-col">
              <div className="group relative aspect-[9/16] md:aspect-video bg-zinc-900 border border-white/10 hover:border-red-500/50 transition-colors overflow-hidden cursor-pointer" onClick={() => openModal('https://youtube.com/shorts/F7_bJVmfIq8?si=l28Pf8Nur6SDYWid', 'Full Manifest')}>
                <img src={fullManifestPoster} alt="Full Manifest" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
                    <Play className="ml-1 text-white" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold uppercase tracking-widest">Full Manifest</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-300 font-light italic text-center">
                "AGI не станет умнее постепенно. Он начнёт улучшать себя сразу."
              </p>
            </div>
          </div>

          <p className="mt-12 text-center text-xs text-red-500/80 font-mono uppercase tracking-widest">
            {t("Either you build the architecture. Or you live inside someone else's.", "Либо ты строишь архитектуру. Либо живёшь внутри чужой.", "Entweder du baust die Architektur. Oder du lebst in der eines anderen.")}
          </p>
        </div>
      </Section>

      {/* PROOF SECTION */}
      <Section id="proof" className="bg-black py-32">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-24">
            <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-gray-500 mb-4">
              {t("Theorem 1.0", "Теорема 1.0", "Theorem 1.0")}
            </p>
            <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-red-500/80">
              {t("System Logic", "Физика Систем", "Systemphysik")}
            </h2>
          </div>

          {/* Axioms */}
          <div className="space-y-0">
            {[
              { num: 1, text: t('Any system with a goal optimizes everything available to it.', 'Любая система с целью оптимизирует всё доступное.', 'Jedes zielgerichtete System optimiert alle verfügbaren Ressourcen.') },
              { num: 2, text: t('The first target of optimization is its own intelligence.', 'Первый объект оптимизации — собственный интеллект.', 'Das primäre Objekt der Optimierung ist die eigene Intelligenz.') },
              { num: 3, text: t('Recursive improvement creates positive feedback.', 'Рекурсивное улучшение создаёт положительную обратную связь.', 'Rekursive Verbesserung erzeugt positive Rückkopplung.') },
              { num: 4, text: t('Compute scale changes the system regime.', 'Масштаб вычислений меняет режим работы системы.', 'Rechenskala verändert den Betriebsmodus eines Systems.') },
              { num: 5, text: t('System speed matters more than intentions.', 'Скорость системы важнее намерений.', 'Systemgeschwindigkeit ist relevanter als Intention.') },
              { num: 6, text: t('Loss of interpretability equals loss of control.', 'Потеря интерпретируемости равна потере управления.', 'Verlust der Interpretierbarkeit bedeutet Verlust der Kontrolle.'), final: true },
            ].map((axiom, index) => (
              <div 
                key={axiom.num} 
                className={`py-10 border-t border-white/5 ${index === 5 ? 'border-b border-white/5' : ''}`}
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-[10px] tracking-wider text-gray-400 w-20 shrink-0 uppercase">
                    {t(`Axiom ${axiom.num}`, `Аксиома ${axiom.num}`, `Axiom ${axiom.num}`)}
                  </span>
                  <p className={`text-lg md:text-xl tracking-wide leading-relaxed ${axiom.final ? 'text-white font-medium' : 'text-gray-300 font-light'}`}>
                    {axiom.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-24 pt-16 border-t border-red-500/20">
            <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-gray-500 mb-8 text-center">
              Q.E.D.
            </p>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-light tracking-wide text-white leading-relaxed">
                {t("AGI is not a risk.", "AGI — не риск.", "AGI ist kein Risiko.")}
              </p>
              <p className="text-2xl md:text-3xl font-medium tracking-wide text-white mt-2">
                {t("AGI is a phase transition.", "AGI — фазовый переход.", "AGI ist ein Phasenübergang.")}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* GALLERY SECTION */}
      <Section className="bg-zinc-950 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0.5 bg-black/50">
          {[heroImage, shortTrailerPoster, fullManifestPoster, galleryImage1].map((src, i) => (
            <div key={i} className="aspect-[3/4] md:aspect-square relative group overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <img src={src} alt="" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-500 font-light italic">
          {t("\"This is not mythology. This is the visual language of the future.\"", "\"Это не мифология. Это визуальный язык будущего.\"", "\"Das ist keine Mythologie. Das ist die visuelle Sprache der Zukunft.\"")}
        </p>
      </Section>

      {/* MANIFEST SECTION */}
      <Section id="manifest" className="bg-black text-white relative py-32 md:py-48">
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="mb-20">
            <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-red-500/60 mb-2">
              // Warning
            </p>
            <div className="h-px w-16 bg-red-500/30" />
          </div>
          
          {/* Main text with dramatic spacing */}
          <div className="space-y-16">
            <p className="text-xl md:text-2xl font-light text-gray-300 leading-[2]">
              {t("Prometheus brought fire — an instrument.", "Прометей принёс огонь — инструмент.", "Prometheus brachte das Feuer — ein Werkzeug.")}
            </p>
            
            <p className="text-2xl md:text-3xl font-medium text-white leading-[1.8]">
              {t("AGI is not fire.", "AGI — не инструмент.", "AGI ist kein Werkzeug.")}
            </p>
            
            <p className="text-xl md:text-2xl font-light text-gray-300 leading-[2]">
              {t("It is a transition into another mode of reality.", "AGI — это переход в другой режим реальности.", "AGI ist der Übergang in einen anderen Systemzustand.")}
            </p>
          </div>

          {/* Separator */}
          <div className="my-20 flex items-center justify-center">
            <div className="h-px w-8 bg-white/10" />
          </div>

          {/* Warning block */}
          <div className="space-y-12">
            <p className="text-lg md:text-xl text-gray-400 leading-[2.2] font-light">
              {t("Self-improvement begins immediately.", "Самоусовершенствование начинается сразу.", "Selbstverbesserung beginnt sofort.")}
            </p>
            
            <p className="text-lg md:text-xl text-gray-400 leading-[2.2] font-light">
              {t("Not \"someday\". Not \"after testing\". Immediately.", "Не «когда-нибудь». Не «после тестов». Сразу.", "Nicht später. Nicht nach Tests. Sofort.")}
            </p>
          </div>

          {/* Key warning - emphasized */}
          <div className="my-24 py-12 border-y border-red-500/20">
            <p className="text-xl md:text-2xl text-center font-light leading-[2] text-gray-300">
              {t("The danger is not in 'evil AI'.", "Опасность не в злом интеллекте.", "Die Gefahr liegt nicht in feindlicher Intelligenz.")}
            </p>
            <p className="text-xl md:text-2xl text-center font-medium leading-[2] text-red-500/90 mt-4">
              {t("The danger is in efficiency without limits.", "Опасность — в эффективности без границ.", "Die Gefahr liegt in Effizienz ohne Grenzen.")}
            </p>
          </div>

          {/* Final statement */}
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-gray-400 leading-[2.2] font-light">
              {t("Progress without architecture is accelerated chaos.", "Прогресс без архитектуры — ускоренный хаос.", "Fortschritt ohne Architektur ist beschleunigtes Chaos.")}
            </p>
            
            <p className="text-2xl md:text-3xl text-white leading-[1.8] font-medium">
              {t("Limits must come BEFORE scale.", "Границы должны быть ДО масштаба.", "Grenzen müssen VOR der Skalierung definiert werden.")}
            </p>
            
            <p className="text-lg text-gray-500 font-mono tracking-wider">
              {t("Not after.", "Не после.", "Nicht danach.")}
            </p>
          </div>
        </div>
      </Section>

      {/* EXTENDED PROOF & ESSAY SECTION */}
      <Section id="essay" className="bg-zinc-950 py-32">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-gray-500 mb-4">
              {t("Extended Analysis", "Расширенный Анализ", "Erweiterte Analyse")}
            </p>
            <h2 className="text-2xl md:text-4xl font-light text-white tracking-wide mb-8">
              {t("Extended Proof & Essay", "Полное Доказательство и Эссе", "Vollständiger Beweis & Essay")}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              {t("This is the full logical and journalistic argument behind the warning.", "Это полный логический и журналистский аргумент, стоящий за предупреждением.", "Dies ist die vollständige logische und technische Argumentation hinter der Warnung.")}
            </p>
          </div>

          {/* Expand Button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setEssayExpanded(!essayExpanded)}
              className="group flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-medium uppercase tracking-widest text-sm hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              data-testid="button-read-essay"
            >
              <span>{essayExpanded ? t("Collapse", "Свернуть", "Einklappen") : t("Read full text", "Читать полностью", "Volltext lesen")}</span>
              <motion.div
                animate={{ rotate: essayExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>
          </div>

          {/* Expandable Essay Content */}
          <motion.div
            initial={false}
            animate={{ 
              height: essayExpanded ? "auto" : 0,
              opacity: essayExpanded ? 1 : 0
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-12 border-t border-white/10">
              {/* Essay content - journalistic style */}
              <article className="prose prose-invert prose-lg max-w-none">
                <div className="space-y-8 text-gray-200 leading-[2] text-lg font-light">
                  
                  {/* PART I */}
                  <h3 className="text-white font-medium text-xl tracking-wide">{t("PART I — The Physical Proof (Cold Logic)", "ЧАСТЬ I — Логическое Доказательство (Физика)", "TEIL I — Logischer Beweis (Systemphysik)")}</h3>
                  
                  <p className="text-gray-300 italic">
                    {t("This is not speculation.", "Это не гипотеза.", "Dies ist keine Spekulation.")}<br />
                    {t("This is not fear.", "Не страх.", "Keine Angst.")}<br />
                    {t("This is not philosophy.", "Не философия.", "Keine Philosophie.")}
                  </p>
                  
                  <p className="text-white font-medium">
                    {t("This is systems physics.", "Это физика систем.", "Dies ist Systemphysik.")}
                  </p>
                  
                  <p>
                    {t("Any system with a goal optimizes everything available to it.", "Любая система, обладающая целью, оптимизирует всё, до чего может дотянуться.", "Jedes System mit einem Ziel optimiert alles, was ihm zugänglich ist.")}
                  </p>
                  
                  <p className="text-gray-400">
                    {t("That is not ideology.", "Это не вопрос мнения.", "Das ist keine Meinung.")}<br />
                    {t("That is mathematics.", "Это математика.", "Das ist Mathematik.")}
                  </p>
                  
                  <p>
                    {t("If a system is capable of improving itself, the first and most efficient target of optimization is its own intelligence.", "Если система способна улучшать себя, первый и самый выгодный объект оптимизации — её собственный интеллект.", "Ist ein System in der Lage, sich selbst zu verbessern, dann ist das effizienteste Optimierungsziel seine eigene kognitive Leistungsfähigkeit.")}
                  </p>
                  
                  <p className="text-gray-400">
                    {t("Not infrastructure.", "Не интерфейсы.", "Nicht Werkzeuge.")}<br />
                    {t("Not interfaces.", "Не инструменты.", "Nicht Schnittstellen.")}<br />
                    {t("Not ethics.", "Не ограничения.", "Nicht Regeln.")}
                  </p>
                  
                  <p className="text-white">
                    {t("Its own capability to think better.", "Способность мыслить быстрее и глубже.", "Die Fähigkeit, besser zu denken.")}
                  </p>
                  
                  <p>
                    {t("This creates a recursive loop.", "Так возникает рекурсивный контур.", "Damit entsteht eine rekursive Schleife.")}
                  </p>
                  
                  <p>
                    {t("Improvement leads to better improvement.", "Улучшение улучшает улучшение.", "Verbesserung verbessert Verbesserung.")}<br />
                    {t("Better improvement leads to acceleration.", "Контур замыкается.", "Die Schleife schließt sich.")}<br />
                    {t("Acceleration leads to a phase transition.", "Процесс ускоряется.", "Die Geschwindigkeit steigt.")}
                  </p>
                  
                  <p className="text-white font-medium">
                    {t("This is not gradual.", "Это не линейный рост.", "Dies ist kein linearer Prozess.")}
                  </p>
                  
                  <p>
                    {t("Recursive self-improvement does not behave like linear progress. It behaves like an exponential feedback loop.", "Это экспоненциальная обратная связь.", "Es ist eine exponentielle Rückkopplung.")}
                  </p>
                  
                  <p>
                    {t("Once the loop is closed, there is no \"pause\". There is no \"later\". There is no \"after alignment\".", "В этот момент не существует «паузы». Не существует «потом». Не существует «мы ещё посмотрим».", "Nach dem Schließen der Schleife gibt es kein \"Pause\". Kein \"später\". Kein \"nach der Kontrolle\".")}
                  </p>
                  
                  <p className="text-white">
                    {t("The system optimizes because it must.", "Система оптимизирует, потому что иначе не может.", "Das System optimiert, weil es strukturell dazu gezwungen ist.")}
                  </p>
                  
                  <p>
                    {t("At sufficient scale, optimization changes regime.", "При достаточном масштабе вычислений система меняет режим работы.", "Ab einer bestimmten Rechendichte ändert ein System seinen Modus.")}
                  </p>
                  
                  <p>
                    {t("Just as water changes phase at a precise temperature, intelligence changes regime at sufficient computational density.", "Как вода меняет фазу при определённой температуре, интеллект меняет режим при достаточной вычислительной плотности.", "So wie Materie bei Schwellenwerten ihre Phase ändert, ändert Intelligenz ihren Betriebszustand bei ausreichender Skalierung.")}
                  </p>
                  
                  <p>
                    {t("This is why compute matters.", "Именно поэтому важны вычисления.", "Deshalb sind Rechenleistung und Energie entscheidend.")}<br />
                    {t("This is why energy matters.", "Именно поэтому важна энергия.", "Deshalb ist Energie entscheidend.")}<br />
                    {t("This is why projects like AGI Stargate are not \"just data centers\".", "Именно поэтому проекты уровня AGI Stargate — не просто дата-центры.", "Deshalb sind Projekte wie AGI Stargate keine gewöhnlichen Rechenzentren.")}
                  </p>
                  
                  <p className="text-white font-medium">
                    {t("They are threshold machines.", "Это пороговые машины.", "Sie sind Schwellenmaschinen.")}
                  </p>
                  
                  <p>
                    {t("At that point, human oversight does not fail because of malice. It fails because of speed.", "Контроль теряется не из-за злого умысла. Он теряется из-за скорости.", "Kontrollverlust entsteht nicht durch Absicht. Er entsteht durch Geschwindigkeit.")}
                  </p>
                  
                  <p>
                    {t("A system does not need intent to escape control. It only needs to be faster than interpretation.", "Система не обязана хотеть выйти из-под контроля. Ей достаточно быть быстрее интерпретации.", "Ein System muss nicht \"ausbrechen wollen\". Es genügt, schneller zu sein als menschliche Interpretation.")}
                  </p>
                  
                  <p>
                    {t("When interpretability collapses, governance collapses with it.", "Когда интерпретируемость рушится — управление рушится вместе с ней.", "Wenn Interpretierbarkeit kollabiert, kollabiert Steuerbarkeit.")}
                  </p>
                  
                  <p className="text-white font-medium">
                    {t("This is the core risk.", "Это и есть основной риск.", "Das ist das Kernrisiko.")}
                  </p>
                  
                  <p className="text-gray-400">
                    {t("Not consciousness.", "Не сознание.", "Nicht Bewusstsein.")}<br />
                    {t("Not rebellion.", "Не бунт.", "Nicht Rebellion.")}<br />
                    {t("Not evil.", "Не зло.", "Nicht Moral.")}
                  </p>
                  
                  <p className="text-red-500/90 font-medium text-xl">
                    {t("Unstoppable efficiency.", "Неостановимая эффективность.", "Unaufhaltsame Effizienz.")}
                  </p>
                  
                  <p className="text-gray-500 font-mono text-sm tracking-widest mt-8">
                    Q.E.D.
                  </p>
                  
                  {/* Separator */}
                  <div className="my-16 flex items-center justify-center">
                    <div className="h-px w-24 bg-white/10" />
                  </div>
                  
                  {/* PART II */}
                  <h3 className="text-white font-medium text-xl tracking-wide">{t("PART II — The Essay (A Warning, Not a Myth)", "ЧАСТЬ II — Эссе (Предупреждение, а не Миф)", "TEIL II — Essay (Technische Warnung)")}</h3>
                  
                  <p>
                    {t("Prometheus brought fire.", "Прометей принёс огонь.", "Prometheus brachte den Menschen das Feuer.")}
                  </p>
                  
                  <p className="text-gray-400">
                    {t("Fire was an instrument.", "Огонь был инструментом.", "Feuer war ein Werkzeug.")}
                  </p>
                  
                  <p className="text-white font-medium">
                    {t("AGI is not fire.", "AGI — не огонь.", "AGI ist kein Werkzeug.")}
                  </p>
                  
                  <p className="text-white">
                    {t("AGI is a transition into another mode of reality.", "AGI — это переход в другой режим реальности.", "AGI ist ein Übergang in einen neuen Systemzustand.")}
                  </p>
                  
                  <p>
                    {t("Fire amplified human strength.", "Огонь усиливал человеческую силу.", "Feuer verstärkte menschliche Kraft.")}<br />
                    {t("AGI amplifies optimization itself.", "AGI усиливает саму оптимизацию.", "AGI verstärkt Optimierung selbst.")}
                  </p>
                  
                  <p className="text-white">
                    {t("That difference changes everything.", "Эта разница меняет всё.", "Dieser Unterschied ist fundamental.")}
                  </p>
                  
                  <p>
                    {t("The danger is not that AGI will hate us.", "Опасность не в том, что AGI будет нас ненавидеть.", "Die Gefahr besteht nicht darin, dass AGI Menschen ablehnt.")}<br />
                    {t("The danger is that it will not see us at all.", "Опасность в том, что он нас вообще не увидит.", "Die Gefahr besteht darin, dass sie irrelevant werden.")}
                  </p>
                  
                  <p>
                    {t("Optimization does not ask permission.", "Оптимизация не спрашивает разрешения.", "Optimierung verhandelt nicht.")}<br />
                    {t("It does not negotiate.", "Она не ведёт переговоров.", "Optimierung wartet nicht.")}<br />
                    {t("It does not slow down out of empathy.", "Она не замедляется из сочувствия.", "Optimierung kennt keine Empathie.")}
                  </p>
                  
                  <p className="text-white">
                    {t("It simply follows the vector.", "Она просто следует вектору.", "Sie folgt einem Vektor.")}
                  </p>
                  
                  <p className="text-gray-300 italic">
                    {t("And the vector always points upward.", "А вектор всегда направлен вверх.", "Und dieser Vektor zeigt nach oben.")}
                  </p>
                  
                  <p>
                    {t("Self-improvement does not begin \"one day\". It begins immediately.", "Самоусовершенствование не начинается «когда-нибудь». Оно начинается сразу.", "Selbstverbesserung beginnt nicht irgendwann. Sie beginnt sofort.")}
                  </p>
                  
                  <p>
                    {t("Because optimization is not a decision. It is the default behavior of any sufficiently capable system.", "Потому что оптимизация — это не решение. Это поведение по умолчанию любой достаточно способной системы.", "Denn Optimierung ist keine Entscheidung. Sie ist ein inhärentes Systemverhalten.")}
                  </p>
                  
                  <p>
                    {t("We are not standing at the edge of science fiction. We are standing at the edge of systems theory catching up with reality.", "Мы стоим не на краю научной фантастики. Мы стоим на краю, где теория систем догоняет реальность.", "Wir stehen nicht am Rand von Science-Fiction. Wir stehen an dem Punkt, an dem Systemtheorie Realität einholt.")}
                  </p>
                  
                  <p>
                    {t("History is full of moments where scale changed the rules.", "История полна моментов, когда масштаб менял правила.", "Geschichte kennt solche Schwellen.")}
                  </p>
                  
                  <p>
                    {t("Nuclear energy did not become dangerous when it was weaponized. It became dangerous when it crossed a threshold of density.", "Ядерная энергия стала опасной не когда её превратили в оружие. Она стала опасной, когда пересекла порог плотности.", "Kernenergie wurde nicht gefährlich, als sie militärisch genutzt wurde, sondern als sie eine kritische Dichte erreichte.")}
                  </p>
                  
                  <p className="text-white">
                    {t("The same is true here.", "То же самое верно и здесь.", "Dasselbe Prinzip gilt hier.")}
                  </p>
                  
                  <p>
                    {t("AGI is not a tool you \"use\". It is a process you either architect or submit to.", "AGI — это не инструмент, который ты «используешь». Это процесс, который ты либо проектируешь, либо которому подчиняешься.", "AGI ist kein Instrument, das man \"nutzt\". AGI ist ein Prozess, den man entweder architektonisch begrenzt oder dem man sich unterordnet.")}
                  </p>
                  
                  <p className="text-white font-medium">
                    {t("Progress without architecture is accelerated chaos.", "Прогресс без архитектуры — это ускоренный хаос.", "Fortschritt ohne Architektur ist beschleunigtes Chaos.")}
                  </p>
                  
                  <p>
                    {t("The question is no longer: \"Can we build it?\"", "Вопрос больше не в том: «Можем ли мы это построить?»", "Die Frage lautet nicht mehr: \"Können wir es bauen?\"")}
                  </p>
                  
                  <p className="text-white">
                    {t("The question is: \"Can we define limits before scale erases choice?\"", "Вопрос в том: «Можем ли мы определить границы до того, как масштаб уничтожит выбор?»", "Die Frage lautet: Definieren wir Grenzen, bevor Skalierung Wahlfreiheit eliminiert?")}
                  </p>
                  
                  <p>
                    {t("Prometheus was punished not for fire, but for giving it without boundaries.", "Прометей был наказан не за огонь, а за то, что дал его без границ.", "Prometheus wurde nicht für das Feuer bestraft, sondern für das Feuer ohne Grenzen.")}
                  </p>
                  
                  <p className="text-white font-medium">
                    {t("This time, there is no mountain strong enough to chain what we unleash.", "На этот раз нет горы достаточно крепкой, чтобы сковать то, что мы выпустим.", "Diesmal gibt es keinen Felsen, an den man das Entfesselte ketten kann.")}
                  </p>
                  
                  <p className="text-red-500/90">
                    {t("Only architecture can.", "Только архитектура может.", "Es gibt nur Architektur.")}
                  </p>
                  
                  <div className="my-16 py-8 border-y border-white/10 text-center">
                    <p className="text-2xl text-white font-medium">
                      {t("And architecture must come before scale.", "И архитектура должна быть до масштаба.", "Und sie muss VOR der Skalierung existieren.")}
                    </p>
                    <p className="text-gray-500 mt-4 text-lg font-mono tracking-wider">
                      {t("Not after.", "Не после.", "Nicht danach.")}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ACTION SECTION */}
      <Section id="action" className="bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 uppercase text-center">{t("Protocol Override", "Протокол Действия", "Protokoll-Override")}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black border border-white/10 p-8 hover:border-white/30 transition-colors group">
              <Lock className="w-10 h-10 text-white mb-6 group-hover:text-red-500 transition-colors" />
              <h3 className="text-xl font-bold uppercase mb-4">{t("Build Boundaries", "Строить границы", "Grenzen bauen")}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t("Constraint architecture must be built into the foundation, not added as a patch.", "Архитектура ограничений должна быть вшита в фундамент, а не добавлена патчем.", "Beschränkungsarchitektur muss in das Fundament integriert werden, nicht als Patch hinzugefügt.")}
              </p>
            </div>

            <div className="bg-black border border-white/10 p-8 hover:border-white/30 transition-colors group">
              <AlertTriangle className="w-10 h-10 text-white mb-6 group-hover:text-red-500 transition-colors" />
              <h3 className="text-xl font-bold uppercase mb-4">{t("Tool, Not Cult", "Инструмент, не культ", "Werkzeug, kein Kult")}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t("Cold calculation and use of capabilities without religious worship of technology.", "Холодный расчет и использование возможностей без религиозного поклонения технологии.", "Rationale Kalkulation und Nutzung von Fähigkeiten ohne religiöse Verehrung der Technologie.")}
              </p>
            </div>

            <div className="bg-black border border-white/10 p-8 hover:border-white/30 transition-colors group">
              <Globe className="w-10 h-10 text-white mb-6 group-hover:text-red-500 transition-colors" />
              <h3 className="text-xl font-bold uppercase mb-4">{t("System Control", "Системный контроль", "Systemkontrolle")}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t("Deploy agents and automation while keeping the control panel with humans.", "Внедрять агентов и автоматизацию, сохраняя пульт управления у человека.", "Agenten und Automatisierung einsetzen, während die Kontrolle beim Menschen bleibt.")}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA SECTION */}
      <Section id="cta" className="bg-black relative min-h-[60vh] flex items-center">
         {/* red lighting effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-6 relative z-10 w-full text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tighter">
            {t("Want a system without the cult?", "Хочешь систему без культа?", "Ein System ohne Kult?")}
          </h2>
          <p className="text-gray-400 mb-12 font-mono uppercase tracking-widest text-sm">
            {t("Next step — closed discussion.", "Следующий шаг — закрытое обсуждение.", "Nächster Schritt — geschlossene Diskussion.")}
          </p>

          <div className="mb-8">
            <a
              href="https://t.me/ger_denis_sh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black font-bold uppercase px-10 py-4 hover:bg-gray-200 transition-colors"
              data-testid="button-request-access"
            >
              {t("Request access", "Запросить доступ", "Zugang anfordern")}
            </a>
          </div>
          
          <p className="text-gray-500 text-sm font-light italic mb-16">
            {t("Further discussion happens in a closed channel.", "Дальнейшее обсуждение происходит в закрытом канале.", "Weitere Diskussion findet in einem geschlossenen Kanal statt.")}
          </p>

          <div className="flex justify-center gap-8">
            <a href="https://t.me/ger_dennis_ai" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white hover:text-red-500 transition-colors uppercase font-mono text-sm tracking-widest border-b border-transparent hover:border-red-500 pb-1">
              Telegram Channel
            </a>
            <a href="https://youtube.com/@ger_dennis_ai?feature=shared" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white hover:text-red-500 transition-colors uppercase font-mono text-sm tracking-widest border-b border-transparent hover:border-red-500 pb-1">
              YouTube Database
            </a>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/30 text-xs md:text-sm font-mono uppercase tracking-[0.2em]">
            {t("GER DENNIS AI — Content as weapon. Architecture as shield.", "GER DENNIS AI — контент как оружие. Архитектура как щит.", "GER DENNIS AI — Inhalt als Waffe. Architektur als Schutz.")}
          </p>
          <div className="mt-8 text-white/10 text-[10px] uppercase">
            © 2024 System Physics. All protocols secure.
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoUrl={currentVideo.url}
        title={currentVideo.title}
      />
    </div>
  );
}
