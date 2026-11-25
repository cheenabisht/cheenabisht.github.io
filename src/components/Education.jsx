import { GraduationCap, BookOpen, MapPin, Calendar } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { education } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32" aria-label="Education">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-accent font-display font-semibold text-sm tracking-widest uppercase">
              04
            </span>
            <div className="h-px flex-1 max-w-16 bg-border" />
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Education
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-6 max-w-3xl">
          {education.map((item, i) => (
            <AnimatedSection key={item.degree} delay={i * 0.08}>
              <div className="bg-surface border border-border rounded-xl p-6 md:p-8 hover:border-accent/25 transition-colors duration-200">
                <div className="flex items-start gap-5">
                  <div
                    className={`hidden sm:flex w-12 h-12 rounded-xl items-center justify-center shrink-0 ${
                      item.current ? 'bg-accent/15' : 'bg-bg border border-border'
                    }`}
                  >
                    {item.current ? (
                      <GraduationCap size={22} className="text-accent" />
                    ) : (
                      <BookOpen size={20} className="text-muted" />
                    )}
                  </div>

                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display text-xl font-semibold">
                          {item.degree}
                        </h3>
                        <p className="text-accent font-medium text-sm mt-0.5">
                          {item.field}
                        </p>
                        {item.specialization && (
                          <p className="text-muted text-sm mt-0.5">
                            Specialization: {item.specialization}
                          </p>
                        )}
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted bg-bg border border-border px-3 py-1 rounded-full shrink-0">
                        <Calendar size={12} className="text-accent/80" />
                        {item.duration}
                      </span>
                    </div>

                    <div className="border-t border-border pt-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-muted">
                      <span className="font-medium text-text/90">
                        {item.institution}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm">
                        <MapPin size={13} className="text-accent/70 shrink-0" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
