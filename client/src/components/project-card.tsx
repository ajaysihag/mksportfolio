import { motion } from "framer-motion";
import { Github } from "lucide-react";

interface ProjectProps {
  title: string;
  desc: string;
  tags: string[];
  link?: string;
}

export function ProjectCard({ title, desc, tags, link }: ProjectProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative h-full flex flex-col rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 pl-7 shadow-md hover:shadow-xl hover:shadow-primary/10 hover:border-primary/25 transition-all duration-300 overflow-hidden"
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary to-primary/50 opacity-70 group-hover:opacity-100 transition-opacity rounded-l-2xl" />

      <div className="flex flex-1 flex-col relative">
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="font-display text-lg font-bold text-foreground leading-tight pr-2 group-hover:text-primary/90 transition-colors">
            {title}
          </h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="flex-shrink-0 p-2.5 rounded-xl text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
              aria-label={`View ${title} on GitHub`}
            >
              <Github size={20} />
            </a>
          )}
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold border border-primary/20 hover:bg-primary/15 hover:border-primary/30 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
