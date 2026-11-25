import { GraduationCap, MapPin, Calendar } from 'lucide-react'
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

        <AnimatedSection delay={0.1}>
          <div className="bg-surface border border-border rounded-xl p-8 md:p-12 max-w-3xl">
            <div className="flex items-start gap-5">
              <div className="hidden sm:flex w-14 h-14 rounded-xl bg-accent/10 items-center justify-center shrink-0">
                <GraduationCap size={24} className="text-accent" />
              </div>

              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold">
                    {education.degree}
                  </h3>
                  <p className="text-accent font-medium mt-1">{education.field}</p>
                  <p className="text-muted text-sm mt-0.5">
                    Specialization: {education.specialization}
                  </p>
                </div>

                <div className="border-t border-border pt-4 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <GraduationCap size={14} className="text-accent/70 shrink-0" />
                    <span>{education.university}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <MapPin size={14} className="text-accent/70 shrink-0" />
                    <span>{education.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Calendar size={14} className="text-accent/70 shrink-0" />
                    <span>{education.duration} · {education.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
