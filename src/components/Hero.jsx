import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { hero, siteConfig } from '../data/content'
import { scrollToSection } from '../hooks/useInView'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(245,245,244,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,244,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Greeting tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-xs font-medium text-muted tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {hero.greeting}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="font-display font-bold text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight"
            >
              {hero.headline.split('\n').map((line, i) => (
                <span key={i} className="block">
                  {line}
                  {i === hero.headline.split('\n').length - 1 && (
                    <span className="text-accent">.</span>
                  )}
                </span>
              ))}
            </motion.h1>

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="text-muted text-lg md:text-xl leading-relaxed max-w-xl"
            >
              {hero.intro}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={hero.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-accent text-bg font-display font-semibold text-sm rounded-lg hover:bg-accent/90 transition-all duration-200 hover:translate-y-[-1px]"
              >
                <GithubIcon size={18} />
                {hero.cta.label}
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-text font-display font-medium text-sm rounded-lg hover:border-muted hover:bg-surface transition-all duration-200"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>

            {/* Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div className="w-72 h-88 md:w-80 md:h-[420px] rounded-2xl bg-surface border border-border overflow-hidden relative shadow-2xl">
                {/* Decorative accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/60 via-accent to-accent/60 z-10" />

                <img
                  src="/portrait.jpg"
                  alt="Cheena Bisht"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-[50%_20%] transition-transform duration-700 hover:scale-[1.03]"
                />

                {/* Subtle editorial vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-bg/10 pointer-events-none" />
              </div>

              {/* Decorative floating element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent/20 rounded-xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-border rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => scrollToSection('about')}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted hover:text-accent transition-colors cursor-pointer"
        aria-label="Scroll to about section"
      >
        <span className="text-[11px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )
}
