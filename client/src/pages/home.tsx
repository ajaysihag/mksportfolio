import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView, useMotionValueEvent } from "framer-motion";
import { Nav } from "@/components/nav";
import { ProjectCard } from "@/components/project-card";
import { 
  Terminal, Github, Mail, MapPin, Briefcase, Linkedin, ChevronDown, Layers, Calendar, Building2,
  Code2, Cpu, Database, Server, Award, GraduationCap, Trophy, Sparkles
} from "lucide-react";

const PROJECTS_VISIBLE_INITIAL = 6;

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    { title: "AI Training Pipeline", desc: "End-to-end pipeline for training and evaluating ML models with automated Docker workflows and React dashboards.", tags: ["Python", "React", "Docker", "AI/ML", "TensorFlow", "Kubernetes", "Redis", "PostgreSQL", "FastAPI", "GitHub Actions"], link: "https://github.com/mukeshsihag" },
    { title: "Real-time Analytics Platform", desc: "Kafka-backed streaming platform for real-time metrics, dashboards, and alerting with sub-second latency.", tags: ["Kafka", "Python", "React", "PostgreSQL", "Redis", "Docker", "TypeScript", "Node.js", "Grafana", "Prometheus"], link: "https://github.com/mukeshsihag" },
    { title: "Kubernetes CI/CD Automation", desc: "GitOps-style deployment pipelines with K8s, Helm, and automated rollbacks for microservices.", tags: ["Kubernetes", "Helm", "GitHub Actions", "Go", "Docker", "Terraform", "ArgoCD", "Prometheus", "Grafana", "Linux"], link: "https://github.com/mukeshsihag" },
    { title: "Django REST API Suite", desc: "High-performance REST APIs with Django REST Framework, Redis caching, and OpenAPI documentation.", tags: ["Django", "Redis", "PostgreSQL", "REST", "Celery", "Docker", "Nginx", "JWT", "Swagger", "pytest"], link: "https://github.com/mukeshsihag" },
    { title: "FastAPI Microservices", desc: "Async microservices for data processing with FastAPI, Celery, and message queues.", tags: ["FastAPI", "Celery", "RabbitMQ", "Docker", "PostgreSQL", "Redis", "Pydantic", "SQLAlchemy", "Kafka", "Prometheus"], link: "https://github.com/mukeshsihag" },
    { title: "Full-Stack Task Manager", desc: "React frontend with Node.js backend and real-time updates via WebSockets.", tags: ["React", "Node.js", "WebSocket", "MongoDB", "TypeScript", "Express", "Redis", "Docker", "JWT", "Tailwind"], link: "https://github.com/mukeshsihag" },
    { title: "ML Model Serving API", desc: "Scalable inference API for ML models with batching, monitoring, and A/B testing support.", tags: ["Python", "FastAPI", "TensorFlow", "Docker", "Kubernetes", "Redis", "Prometheus", "gRPC", "ONNX", "Celery"], link: "https://github.com/mukeshsihag" },
    { title: "Data Pipeline Orchestrator", desc: "Airflow DAGs for ETL, data quality checks, and warehouse sync with Slack alerts.", tags: ["Airflow", "Python", "BigQuery", "dbt", "PostgreSQL", "Docker", "Slack", "Great Expectations", "Snowflake", "Fivetran"], link: "https://github.com/mukeshsihag" },
    { title: "Serverless Event Processor", desc: "AWS Lambda-based event processing with DynamoDB and Step Functions.", tags: ["AWS", "Lambda", "DynamoDB", "Terraform", "Step Functions", "SQS", "SNS", "Python", "CloudWatch", "IAM"], link: "https://github.com/mukeshsihag" },
    { title: "Elasticsearch Search Service", desc: "Full-text search and analytics service with Elasticsearch and Kibana dashboards.", tags: ["Elasticsearch", "Python", "Kibana", "Docker", "Logstash", "Redis", "FastAPI", "Kibana", "Beats", "AWS"], link: "https://github.com/mukeshsihag" },
    { title: "React Design System", desc: "Reusable component library with Storybook, theming, and accessibility built-in.", tags: ["React", "TypeScript", "Storybook", "Tailwind", "Jest", "Vite", "ESLint", "Prettier", "RTL", "Chromatic"], link: "https://github.com/mukeshsihag" },
    { title: "Distributed Task Queue", desc: "Custom task queue with priority, retries, and dead-letter handling for background jobs.", tags: ["Go", "Redis", "PostgreSQL", "Docker", "Kafka", "gRPC", "Prometheus", "Kubernetes", "Terraform", "Grafana"], link: "https://github.com/mukeshsihag" },
  ];

  const experiences = [
    {
      role: "Python Developer | Team Lead",
      company: "Turing",
      period: "July 2023 – Present",
      desc: "Leading a team of 5-6 engineers training models for complex task execution. Automated Docker workflows and built ReactJS applications to enhance model training environments.",
      skills: ["Python", "ReactJs", "Docker", "AI/ML"]
    },
    {
      role: "Software Engineer",
      company: "Sarvam AI",
      period: "2023",
      desc: "Building and scaling AI/ML systems for voice and language models. Worked on infrastructure and tooling to support model training and deployment.",
      skills: ["Python", "AI/ML", "Docker", "PyTorch"]
    },
    {
      role: "Software Engineer",
      company: "Eugenie.ai",
      period: "June 2021 – July 2023",
      desc: "Founding engineer, scaling product to acquisition. Optimized backend APIs by 60%, deployed Kafka streaming pipelines, and automated CI/CD with K8s.",
      skills: ["Django", "FastAPI", "Kafka", "Kubernetes"]
    }
  ];

  const skills = {
    "Languages": ["Python", "JavaScript", "TypeScript", "Go", "C/C++", "SQL", "Java", "Rust", "Bash"],
    "Frameworks": ["ReactJs", "Django", "FastAPI", "Flask", "NodeJs", "Express", "Next.js", "Vue", "Celery"],
    "Infrastructure": ["Docker", "Kubernetes", "AWS", "Azure", "GCP", "Terraform", "Linux", "Nginx", "GitHub Actions", "Jenkins"],
    "Data": ["PostgreSql", "Mongodb", "Redis", "Kafka", "Elasticsearch", "MySQL", "RabbitMQ", "BigQuery", "Airflow", "dbt"]
  };

  const stackIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    Languages: Code2,
    Frameworks: Layers,
    Infrastructure: Server,
    Data: Database,
  };

  const stats = [
    { value: "9.62", label: "M.Tech CGPA", icon: GraduationCap, isNumber: true },
    { value: "2nd", label: "IEEE Dataset Award", icon: Award, isNumber: false },
    { value: "Winner", label: "Hult Prize", icon: Trophy, isNumber: false },
    { value: "Lead", label: "Founding Engineer", icon: Sparkles, isNumber: false },
  ];

  const statsSectionRef = useRef<HTMLElement>(null);
  const statsInView = useInView(statsSectionRef, { once: true, margin: "-80px" });
  const countMotion = useMotionValue(0);
  const countDisplay = useTransform(countMotion, (v) => v.toFixed(2));
  const [cgpaDisplay, setCgpaDisplay] = useState("0.00");
  useMotionValueEvent(countDisplay, "change", setCgpaDisplay);
  useEffect(() => {
    if (statsInView) {
      const controls = animate(countMotion, 9.62, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
      return () => controls.stop();
    }
  }, [statsInView]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10">
      <Nav />
      
      {/* Hero Section */}
      <section id="home" className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6 text-primary font-bold tracking-wider text-sm uppercase">
              <span className="w-8 h-[2px] bg-primary" />
              Available for Innovation
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl font-extrabold mb-8 tracking-tight text-gradient leading-[1.1]">
              Mukesh <br /> Sihag
            </h1>
            
            <p className="text-xl text-muted-foreground font-light mb-10 leading-relaxed max-w-lg">
              Founding Engineer & Team Lead crafting scalable systems with Python, React, and AI. Transforming complex ideas into elegant digital realities.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="/attached_assets/mukesh_updated_resume_1770657270887.pdf" download className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:translate-y-[-2px] transition-all cursor-pointer">
                Download Resume
              </a>
              <div className="flex items-center gap-6 px-4">
                <a href="https://linkedin.com/in/mukeshsihag" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"><Linkedin size={22} /></a>
                <a href="https://github.com/mukeshsihag" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"><Github size={22} /></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 floating">
              <div className="glass-card p-8 rounded-[2.5rem] relative overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <Terminal size={20} className="text-muted-foreground" />
                </div>
                <div className="space-y-4 font-mono text-sm text-foreground">
                  <div className="flex gap-4">
                    <span className="text-blue-500">const</span>
                    <span className="text-emerald-500">engineer</span>
                    <span className="text-muted-foreground">=</span>
                    <span className="text-muted-foreground">{"{"}</span>
                  </div>
                  <div className="pl-6 space-y-2 text-foreground">
                    <div>name: <span className="text-amber-500">'Mukesh Sihag'</span>,</div>
                    <div>role: <span className="text-amber-500">'Team Lead'</span>,</div>
                    <div>location: <span className="text-amber-500">'Jaipur, India'</span>,</div>
                    <div>motto: <span className="text-amber-500">'Build. Scale. Automate.'</span></div>
                  </div>
                  <div><span className="text-muted-foreground">{"}"}</span></div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent rounded-[3rem] -z-10 rotate-12" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/20" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/[0.07] rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]" />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block text-primary font-semibold text-sm tracking-[0.3em] uppercase mb-4"
            >
              Who I am
            </motion.span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-foreground tracking-tight">
              About Me
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto w-24 h-0.5 bg-primary origin-center rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-muted-foreground text-lg max-w-xl mx-auto mt-6 font-light"
            >
              Engineer, team lead, and builder focused on scale and impact.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-start">
            {/* Story column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
              className="relative pl-6 md:pl-8 border-l-2 border-primary/20"
            >
              {[
                "I'm Mukesh Sihag — a founding engineer and team lead based in Jaipur, India. I specialize in building scalable systems with Python, React, and AI/ML, and I've led teams that ship products from zero to production.",
                "My background includes an M.Tech with a 9.62 CGPA, industry recognition (IEEE Dataset Award, Hult Prize), and hands-on experience at Turing and Eugenie.ai — where I helped scale the product to acquisition. I'm passionate about clean architecture, automation, and mentoring engineers.",
                "When I'm not coding, I enjoy exploring new technologies, contributing to open source, and staying active in the developer community. I'm always open to discussing new projects, startup ideas, or opportunities to collaborate.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="text-muted-foreground leading-relaxed mb-6 last:mb-0"
                >
                  {i === 0 ? (
                    <>
                      I'm Mukesh Sihag — a <span className="text-primary font-semibold">founding engineer</span> and <span className="text-primary font-semibold">team lead</span> based in Jaipur, India. I specialize in building scalable systems with Python, React, and AI/ML, and I've led teams that ship products from zero to production.
                    </>
                  ) : (
                    text
                  )}
                </motion.p>
              ))}
            </motion.div>

            {/* Quick facts card */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-[1.75rem] blur-sm opacity-60" />
              <div className="relative glass-card p-8 md:p-10 rounded-[1.75rem] border border-border/80 shadow-xl shadow-primary/5">
                <motion.h3
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="font-display font-bold text-xl mb-8 text-foreground flex items-center gap-3"
                >
                  <span className="w-1 h-8 bg-primary rounded-full shadow-[0_0_12px_var(--color-primary)]" />
                  Quick facts
                </motion.h3>
                <ul className="space-y-5">
                  {[
                    "Based in Jaipur, India",
                    "M.Tech (9.62 CGPA), strong CS fundamentals",
                    "5+ years building backends, APIs, and data pipelines",
                    "Led teams of 5–6 engineers at Turing",
                    "Founding engineer at Eugenie.ai (scaled to acquisition)",
                    "IEEE Dataset Award (2nd), Hult Prize winner",
                  ].map((fact, i) => (
                    <motion.li
                      key={fact}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-center gap-4 text-muted-foreground group/item"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.08, type: "spring", stiffness: 200, damping: 15 }}
                        className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/10"
                      />
                      <span className="group-hover/item:text-foreground transition-colors duration-300">{fact}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
        <div className="absolute top-1/4 -left-40 w-72 h-72 bg-primary/[0.05] rounded-full blur-[100px]" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-4"
            >
              <Briefcase size={14} />
              Career
            </motion.span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">Work Experience</h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="mx-auto w-20 h-0.5 bg-primary rounded-full mb-6 origin-center"
            />
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              My professional journey as an engineer and leader.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-primary/40" />

            <div className="space-y-0">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex gap-8 md:gap-12 pl-14 md:pl-20 pb-16 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-4 top-6 w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-sm" />

                  <div className="flex-1 min-w-0">
                    <div className="group rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 md:p-8 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                        <div>
                          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1.5">
                            {exp.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                            <span className="inline-flex items-center gap-1.5 text-primary font-semibold">
                              <Building2 size={16} />
                              {exp.company}
                            </span>
                            <span className="text-border">·</span>
                            <span className="inline-flex items-center gap-1.5 text-sm">
                              <Calendar size={14} />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6 text-[15px]">
                        {exp.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            whileHover={{ scale: 1.02 }}
                            className="px-3.5 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold border border-primary/20"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/15 to-background" />
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-primary/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-48 w-80 h-80 bg-primary/[0.05] rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.02]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14 md:mb-16"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-4"
            >
              <Layers size={14} />
              Featured work
            </motion.span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
              Projects
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto w-20 h-0.5 bg-primary rounded-full mb-6 origin-center"
            />
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A selection of systems and products I've built or led.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <AnimatePresence mode="popLayout">
              {(showAllProjects ? projects : projects.slice(0, PROJECTS_VISIBLE_INITIAL)).map((proj, i) => (
                <motion.div
                  key={proj.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{
                    delay: Math.min(i * 0.07, 0.3),
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  layout
                  className="h-full"
                >
                  <ProjectCard
                    title={proj.title}
                    desc={proj.desc}
                    tags={proj.tags}
                    link={proj.link}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {projects.length > PROJECTS_VISIBLE_INITIAL && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mt-10 md:mt-12"
            >
              <button
                type="button"
                onClick={() => setShowAllProjects((v) => !v)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border-2 border-primary/25 bg-card/50 text-primary font-semibold hover:bg-primary/10 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
              >
                {showAllProjects ? (
                  "Show less"
                ) : (
                  <>
                    View more projects
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stack / Skills Section */}
      <section id="stack" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-primary/[0.06] rounded-full blur-[100px]" />
        <div className="absolute top-1/3 -left-40 w-72 h-72 bg-primary/[0.05] rounded-full blur-[90px]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 md:mb-16"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-4"
            >
              <Cpu size={14} />
              Tech stack
            </motion.span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
              Stack
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto w-20 h-0.5 bg-primary rounded-full mb-6 origin-center"
            />
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Languages, frameworks, and tools I work with.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Object.entries(skills).map(([category, items], i) => {
              const Icon = stackIcons[category];
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full flex"
                >
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ visible: { transition: { staggerChildren: 0.03, delayChildren: 0.05 } } }}
                    className="group relative flex flex-col h-full w-full rounded-xl border border-border bg-card/80 backdrop-blur-sm p-4 shadow-sm hover:shadow-lg hover:border-primary/25 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                    <div className="relative z-10 flex flex-col h-full min-h-[180px]">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          {Icon && <Icon size={16} />}
                        </span>
                        <h3 className="font-display font-bold text-sm text-foreground">
                          {category}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-1.5 content-start flex-1 min-h-[120px]">
                        {items.map((item) => (
                          <motion.span
                            key={item}
                            variants={{
                              hidden: { opacity: 0, y: 6 },
                              visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ scale: 1.03 }}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-muted/80 border border-border text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-default shrink-0"
                          >
                            <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats / Awards Section */}
      <section
        ref={statsSectionRef}
        className="relative py-24 md:py-28 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary opacity-40" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => {
              const StatIcon = stat.icon;
              return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="group relative"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.1, duration: 0.5 }}
                  className="relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 md:p-8 text-center shadow-lg hover:bg-white/15 hover:border-white/30 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 + 0.2, type: "spring", stiffness: 200, damping: 15 }}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-primary-foreground mb-4"
                    >
                      <StatIcon size={24} />
                    </motion.div>
                    <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2 tabular-nums">
                      {stat.isNumber ? cgpaDisplay : stat.value}
                    </div>
                    <div className="text-primary-foreground/85 text-xs md:text-sm font-medium uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-background">
        <div className="max-w-3xl mx-auto glass-card p-12 rounded-[3rem] text-center border-border">
          <h2 className="font-display text-4xl font-bold mb-6 text-foreground">Let's work together</h2>
          <p className="text-muted-foreground mb-10 text-lg">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="mailto:sihagmukesh22@gmail.com" className="flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all cursor-pointer">
              <Mail size={20} />
              Say Hello
            </a>
            <div className="flex items-center gap-4 justify-center md:px-6">
              <div className="flex flex-col items-start text-left">
                <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Location</span>
                <span className="font-semibold flex items-center gap-1 text-foreground"><MapPin size={14} /> Jaipur, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border bg-muted/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-primary-foreground text-[10px] font-bold tracking-tighter">MKS</div>
            <span className="text-foreground/80">© 2026 Mukesh Sihag. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/in/mukeshsihag" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://www.linkedin.com/in/itismukesh/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
