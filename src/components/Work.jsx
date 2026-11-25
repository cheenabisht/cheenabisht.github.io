import { ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import AnimatedSection from './AnimatedSection'
import { projects, projectRoadmap, siteConfig } from '../data/content'

function ProjectCard({ project, index }) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <article className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-300">
        {/* Project image placeholder */}
        <div className="h-48 md:h-56 bg-bg relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(45deg, rgba(233,166,107,0.3) 25%, transparent 25%, transparent 75%, rgba(233,166,107,0.3) 75%), linear-gradient(45deg, rgba(233,166,107,0.3) 25%, transparent 25%, transparent 75%, rgba(233,166,107,0.3) 75%)',
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 10px 10px',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-6xl font-bold text-border/50 group-hover:text-accent/20 transition-colors duration-300">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl font-semibold group-hover:text-accent transition-colors duration-200">
              {project.title}
            </h3>
            <ArrowUpRight
              size={18}
              className="text-muted group-hover:text-accent transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-1"
            />
          </div>

          <p className="text-muted text-sm leading-relaxed">{project.description}</p>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-bg border border-border rounded-md text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-3 border-t border-border">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
              >
                <GithubIcon size={14} />
                Source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
              >
                <ExternalLink size={14} />
                Demo
              </a>
            )}
          </div>
        </div>
      </article>
    </AnimatedSection>
  )
}

function RoadmapCard({ project, index }) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="group relative bg-surface border border-border rounded-xl p-6 md:p-8 hover:border-accent/20 transition-all duration-300">
        {/* Status badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/20 text-xs font-medium text-accent">
            <Sparkles size={12} />
            {project.status}
          </span>
          <span className="text-xs text-muted font-display">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-xs bg-bg border border-border rounded text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32" aria-label="Selected work and project roadmap">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-accent font-display font-semibold text-sm tracking-widest uppercase">
              02
            </span>
            <div className="h-px flex-1 max-w-16 bg-border" />
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Work
            </h2>
          </div>
        </AnimatedSection>

        {/* Completed Projects */}
        {projects.length > 0 ? (
          <>
            <AnimatedSection>
              <h3 className="font-display text-xl font-semibold mb-8">Selected Projects</h3>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
              {projects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </>
        ) : (
          <AnimatedSection>
            <div className="bg-surface border border-border rounded-xl p-8 md:p-12 mb-16 text-center">
              <p className="text-muted text-lg mb-4">
                Public repositories are on the way.
              </p>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
              >
                <GithubIcon size={18} />
                Follow on GitHub for updates
              </a>
            </div>
          </AnimatedSection>
        )}

        {/* Project Roadmap */}
        {projectRoadmap.length > 0 && (
          <>
            <AnimatedSection>
              <div className="mb-10">
                <h3 className="font-display text-xl font-semibold mb-2">
                  Project Roadmap
                </h3>
                <p className="text-muted text-sm">
                  Upcoming projects — currently in planning or early development.
                </p>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectRoadmap.map((project, i) => (
                <RoadmapCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
