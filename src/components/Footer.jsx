import { siteConfig, navLinks, footer } from '../data/content'
import { scrollToSection } from '../hooks/useInView'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 md:py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Monogram */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display font-bold text-2xl text-accent hover:opacity-80 transition-opacity"
            aria-label="Scroll to top"
          >
            {siteConfig.monogram}
            <span className="text-muted">.</span>
          </button>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href.slice(1))}
                className="text-sm text-muted hover:text-text transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-muted">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
