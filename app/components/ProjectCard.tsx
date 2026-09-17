'use client';

import Slideshow from './Slideshow';
import { ExternalLink, FolderGit2, Sparkles } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';

export type ProjectItem = {
  title: string;
  category: 'FinTech & Quant' | 'Web & Mobile' | 'Systems & Games';
  description: string;
  url: string;
  githubUrl?: string;
  imageUrl?: string;
  imageUrls?: string[];
  tags: string[];
  featured?: boolean;
};

export default function ProjectCard({ project }: { project: ProjectItem }) {
  const isGithub = project.url.includes('github.com') || Boolean(project.githubUrl);
  const primaryUrl = project.url;

  return (
    <div className="group relative flex flex-col justify-between glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10">
      {/* Top Media / Thumbnail */}
      <div>
        <div className="relative mb-5 overflow-hidden rounded-xl border border-white/10 bg-slate-900/60">
          {project.imageUrls && project.imageUrls.length > 0 ? (
            <Slideshow images={project.imageUrls} aspectClass="h-44 sm:h-48" />
          ) : project.imageUrl ? (
            <div className="relative w-full h-44 sm:h-48 flex items-center justify-center bg-slate-900/90 overflow-hidden group/thumb">
              <img
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                loading="lazy"
                className="max-h-full max-w-full object-contain p-3 transition-transform duration-500 group-hover/thumb:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b11]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ) : (
            <div className="w-full h-44 sm:h-48 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-500 p-4 text-center">
              <FolderGit2 className="w-12 h-12 text-cyan-500/40 mb-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Algorithm & Repository
              </span>
            </div>
          )}

          {/* Category Tag Overlay */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-full bg-[#080b11]/80 backdrop-blur-md border border-white/10 text-cyan-300">
              {project.category}
            </span>
          </div>

          {project.featured && (
            <div className="absolute top-3 right-3 flex items-center space-x-1 px-2.5 py-1 text-[11px] font-medium rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-300">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Featured</span>
            </div>
          )}
        </div>

        {/* Header & Title */}
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          {project.description}
        </p>
      </div>

      {/* Footer: Tags & Action Link */}
      <div className="pt-4 border-t border-white/5 mt-2">
        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300 group-hover:border-slate-600 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link Button */}
        <div className="flex items-center space-x-3">
          <a
            href={primaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-semibold px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-200 group/btn"
          >
            {isGithub ? <GithubIcon className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
            <span>{isGithub ? 'View Source on GitHub' : 'View Live Demo'}</span>
            <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
