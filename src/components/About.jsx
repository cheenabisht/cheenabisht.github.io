import AnimatedSection from './AnimatedSection'
import { about } from '../data/content'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32" aria-label="About Cheena Bisht">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-accent font-display font-semibold text-sm tracking-widest uppercase">
              01
            </span>
            <div className="h-px flex-1 max-w-16 bg-border" />
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              {about.heading}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Bio text */}
          <div className="lg:col-span-7 space-y-6">
            {about.paragraphs.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <p className="text-muted text-lg leading-relaxed">{p}</p>
              </AnimatedSection>
            ))}
          </div>

          {/* Details card */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.2} direction="right">
              <div className="bg-surface border border-border rounded-xl p-8 space-y-6">
                <h3 className="font-display font-semibold text-sm tracking-widest uppercase text-accent">
                  Quick Facts
                </h3>
                <dl className="space-y-5">
                  {about.details.map((detail) => (
                    <div key={detail.label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <dt className="text-xs text-muted uppercase tracking-wider mb-1">
                        {detail.label}
                      </dt>
                      <dd className="text-text font-medium">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
