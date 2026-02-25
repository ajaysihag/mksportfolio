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
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="group relative h-full flex flex-col rounded-xl border border-border bg-card/80 backdrop-blur-sm overflow-hidden shadow-sm hover:shadow-md hover:border-primary/25 transition-all duration-300"
    >
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
            {title}
          </h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="flex-shrink-0 p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-pointer"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          )}
        </div>
        <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-3">
          {desc}
        </p>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-medium text-primary/90 bg-primary/10 rounded border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
