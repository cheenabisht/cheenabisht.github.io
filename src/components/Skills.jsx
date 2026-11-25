import { BookOpen } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { skills } from '../data/content'

function SkillPill({ name, category }) {
  return (
    <div className="group flex items-center justify-between px-5 py-3.5 bg-surface border border-border rounded-lg hover:border-accent/40 hover:bg-surface/80 transition-all duration-200">
      <span className="text-text font-medium text-sm">{name}</span>
      <span className="text-[11px] font-medium text-muted/70 uppercase tracking-wider px-2 py-0.5 rounded bg-bg/60 border border-border/50">
        {category}
      </span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-surface/30" aria-label="Technical skills">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-accent font-display font-semibold text-sm tracking-widest uppercase">
              03
            </span>
            <div className="h-px flex-1 max-w-16 bg-border" />
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              {skills.heading}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Current Skills */}
          <AnimatedSection delay={0.1}>
            <div>
              <h3 className="font-display text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Working Knowledge
              </h3>
              <div className="space-y-3">
                {skills.current.map((skill) => (
                  <SkillPill key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Learning */}
          <AnimatedSection delay={0.15}>
            <div>
              <h3 className="font-display text-lg font-semibold mb-6 flex items-center gap-2">
                <BookOpen size={16} className="text-accent" />
                Currently Learning
              </h3>
              <div className="space-y-3">
                {skills.learning.map((skill) => (
                  <SkillPill key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
