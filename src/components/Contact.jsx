import { Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import AnimatedSection from './AnimatedSection'
import { siteConfig, contact } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-surface/30" aria-label="Contact">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-accent font-display font-semibold text-sm tracking-widest uppercase">
              05
            </span>
            <div className="h-px flex-1 max-w-16 bg-border" />
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              {contact.heading}
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-2xl space-y-10">
          <AnimatedSection delay={0.1}>
            <p className="text-muted text-lg md:text-xl leading-relaxed">
              {contact.message}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="space-y-4">
              {/* GitHub */}
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 bg-surface border border-border rounded-xl hover:border-accent/30 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <GithubIcon size={20} className="text-accent" />
                  <div>
                    <p className="font-medium text-text text-sm">GitHub</p>
                    <p className="text-muted text-xs">github.com/cheenabisht</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted group-hover:text-accent transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              {/* LinkedIn */}
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 bg-surface border border-border rounded-xl hover:border-accent/30 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <LinkedinIcon size={20} className="text-accent" />
                  <div>
                    <p className="font-medium text-text text-sm">LinkedIn</p>
                    <p className="text-muted text-xs">linkedin.com/in/cheena-bisht-2a6b9a414</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted group-hover:text-accent transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center justify-between p-5 bg-surface border border-border rounded-xl hover:border-accent/30 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <Mail size={20} className="text-accent" />
                  <div>
                    <p className="font-medium text-text text-sm">Email</p>
                    <p className="text-muted text-xs">{siteConfig.email}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted group-hover:text-accent transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
