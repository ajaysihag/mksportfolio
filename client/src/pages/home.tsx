import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView, useMotionValueEvent } from "framer-motion";
import { Nav } from "@/components/nav";
import { ProjectCard } from "@/components/project-card";
import { 
  Terminal, Github, Mail, MapPin, Briefcase, Linkedin, Layers, Calendar, Building2,
  Code2, Cpu, Database, Server, Award, GraduationCap, Trophy, Sparkles
} from "lucide-react";

const projects = [
  { title: "Virtual Terminal", desc: "Safe experimentation with Linux commands, ensuring system stability and minimizing the risk of irreversible changes from incorrect command execution.", tags: ["Python", "Git", "Linux", "Bash", "CLI", "Subprocess"], link: "https://github.com/mukeshsihag" },
  { title: "AI Training Pipeline", desc: "End-to-end pipeline for training and evaluating ML models with automated Docker workflows and React dashboards.", tags: ["Python", "React", "Docker", "AI/ML", "TensorFlow", "Kubernetes", "Redis", "PostgreSQL", "FastAPI", "GitHub Actions"], link: "https://github.com/mukeshsihag" },
  { title: "Real-time Analytics Platform", desc: "Kafka-backed streaming platform for real-time metrics, dashboards, and alerting with sub-second latency.", tags: ["Kafka", "Python", "React", "PostgreSQL", "Redis", "Docker", "TypeScript", "Node.js", "Grafana", "Prometheus"], link: "https://github.com/mukeshsihag" },
  { title: "Kubernetes CI/CD Automation", desc: "GitOps-style deployment pipelines with K8s, Helm, and automated rollbacks for microservices.", tags: ["Kubernetes", "Helm", "GitHub Actions", "Go", "Docker", "Terraform", "ArgoCD", "Prometheus", "Grafana", "Linux"], link: "https://github.com/mukeshsihag" },
];

export default function Home() {

  const experiences = [
    {
      role: "Delivery Engineering Manager",
      company: "Turing",
      period: "June 2025 – Present",
      desc: "Leading a team of 20+ developers across multiple AI initiatives, driving execution, quality, and timely delivery. Led development of UI and Non-UI gyms replicating real-world platforms (HR, ERP, Social Media, Salesforce, ServiceNow, ADP) for AI model evaluation. Built and deployed MCP servers and AI-driven applications for 7 AI Labs. Designed Turing's internal LLM benchmarking platform and an internal Slack monitoring bot for client query tracking and stakeholder alerts.",
      skills: ["Python", "FastAPI", "Next.js", "MongoDB", "Agentic AI", "Postgres", "GCP"]
    },
    {
      role: "Senior Software Engineer",
      company: "Sarvam.ai",
      period: "Feb 2025 – June 2025",
      desc: "Contributed to India's Sovereign LLM Model, Sarvam-M. Designed and implemented Helm charts for microservices on Kubernetes. Built AI-driven retrieval systems with custom coder, retriever, and planner components. Processed large-scale datasets using vector databases, RAG techniques, and LLMs (GPT, DeepSeek, Claude).",
      skills: ["Python", "FastAPI", "Bazel", "Helm", "Kubernetes", "Postgres", "Agentic AI", "Azure", "AWS"]
    },
    {
      role: "Founding Software Engineer",
      company: "Eugenie.ai",
      period: "June 2021 – Jan 2025",
      desc: "Developed backend APIs with Django and improved existing APIs by 50–60% through query optimization and indexing. Built and deployed a data streaming pipeline using Kafka, MQTT, and HAProxy transferring lakhs of records daily. Implemented CI/CD with GitHub Actions and automated deployment on Kubernetes. Designed a FastAPI microservice for the ML pipeline, reducing processing time from ~1 minute to under a second. Configured and managed the ELK stack for logging and monitoring.",
      skills: ["Python", "Django", "Kafka", "MQTT", "Docker", "Azure", "GCP", "FastAPI", "AWS", "Kubernetes", "ReactJs", "Redis", "Celery"]
    }
  ];

  const skills = {
    "Languages": ["Python", "JavaScript", "C", "C++", "TypeScript", "SQL", "Agentic AI"],
    "Frameworks": ["ReactJs", "Django", "Flask", "ExpressJs", "NextJs", "NodeJs", "FastAPI"],
    "Infrastructure": ["Azure", "Docker", "Kubernetes", "AWS", "GCP", "ELK", "Git & GitHub", "Linux"],
    "Data": ["MongoDB", "PostgreSql", "Kafka", "MQTT", "Redis", "Celery", "RabbitMQ", "HTML", "Bootstrap", "CSS"]
  };

  const stackIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    Languages: Code2,
    Frameworks: Layers,
    Infrastructure: Server,
    Data: Database,
  };

  const stats = [
    { value: "9.62", label: "M.Tech CGPA (NIT Hamirpur)", icon: GraduationCap, isNumber: true },
    { value: "2nd", label: "IEEE Dataset Award", icon: Award, isNumber: false },
    { value: "Winner", label: "Hult Prize", icon: Trophy, isNumber: false },
    { value: "20+", label: "Team Lead at Turing", icon: Sparkles, isNumber: false },
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
      <section id="home" className="relative pt-48 pb-36 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/8 via-primary/3 to-transparent -z-10" />
        <div className="hero-glow bg-primary left-1/2 -translate-x-1/2 top-1/3" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.02] -z-10" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6 text-primary font-bold tracking-wider text-sm uppercase">
              <span className="w-10 h-[2px] bg-gradient-to-r from-primary to-primary/50 rounded-full" />
              Available for Innovation
            </div>

            <h1 className="font-display text-6xl md:text-8xl font-extrabold mb-6 tracking-tight text-gradient leading-[1.1] drop-shadow-sm">
              Mukesh <br /> Sihag
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/40 rounded-full mb-8" />

            <p className="text-xl text-muted-foreground font-light mb-10 leading-relaxed max-w-lg">
              Delivery Engineering Manager leading 20+ developers on AI initiatives. Building scalable systems with Python, React, Agentic AI, and LLMs. From founding engineer to delivery lead — transforming ideas into production.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href="/attached_assets/mukesh_resume.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Download Resume
              </motion.a>
              <div className="flex items-center gap-5 pl-2">
                <a href="https://www.linkedin.com/in/itismukesh/" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all cursor-pointer"><Linkedin size={22} /></a>
                <a href="https://github.com/mukeshsihag" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all cursor-pointer"><Github size={22} /></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative z-10 floating">
              <div className="rounded-[2.5rem] relative overflow-hidden border border-border/80 bg-card/70 backdrop-blur-xl p-8 shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/90" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/90" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400/90" />
                  </div>
                  <Terminal size={20} className="text-muted-foreground" />
                </div>
                <div className="space-y-4 font-mono text-sm text-foreground relative">
                  <div className="flex gap-4">
                    <span className="text-primary">const</span>
                    <span className="text-emerald-600 dark:text-emerald-400">engineer</span>
                    <span className="text-muted-foreground">=</span>
                    <span className="text-muted-foreground">{"{"}</span>
                  </div>
                  <div className="pl-6 space-y-2 text-foreground">
                    <div>name: <span className="text-amber-600 dark:text-amber-400">'Mukesh Sihag'</span>,</div>
                    <div>role: <span className="text-amber-600 dark:text-amber-400">'Delivery Engineering Manager'</span>,</div>
                    <div>location: <span className="text-amber-600 dark:text-amber-400">'Jaipur, India'</span>,</div>
                    <div>motto: <span className="text-amber-600 dark:text-amber-400">'Build. Scale. Automate.'</span></div>
                  </div>
                  <div><span className="text-muted-foreground">{"}"}</span></div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-primary/20 rounded-[2rem] -z-10 rotate-12 blur-2xl" />
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />
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

          <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-stretch">
            {/* Story column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
              className="relative pl-6 md:pl-8 pt-8 md:pt-12 border-l-2 border-primary/20 h-full flex flex-col min-h-0"
            >
              {[
                "I'm Mukesh Sihag — a Delivery Engineering Manager at Turing, leading 20+ developers across AI initiatives. I specialize in scalable systems with Python, React, Agentic AI, and LLMs, from MCP servers and UI/Non-UI gyms to internal benchmarking platforms.",
                "My background includes an M.Tech (CSE) from NIT Hamirpur with a 9.62 CGPA, industry recognition (IEEE Dataset Award 2nd prize, Hult Prize winner), and experience at Sarvam.ai (Sovereign LLM Sarvam-M) and Eugenie.ai as founding engineer. I've published on IoT-based posture detection and smart healthcare systems.",
                "I'm passionate about clean architecture, automation, and mentoring engineers. I'm always open to discussing new projects, startup ideas, or opportunities to collaborate.",
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
                      I'm Mukesh Sihag — a <span className="text-primary font-semibold">Delivery Engineering Manager</span> at Turing, leading <span className="text-primary font-semibold">20+ developers</span> across AI initiatives. I specialize in scalable systems with Python, React, Agentic AI, and LLMs.
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
              className="relative h-full min-h-0 flex flex-col"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-[1.75rem] blur-sm opacity-60" />
              <div className="relative glass-card p-8 md:p-10 rounded-[1.75rem] border border-border/80 shadow-xl shadow-primary/5 flex-1 flex flex-col min-h-0">
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
                <ul className="space-y-5 flex-1">
                  {[
                    "Based in India (Remote)",
                    "M.Tech (CSE) from NIT Hamirpur — 9.62 CGPA",
                    "Delivery Engineering Manager — leading 20+ developers at Turing",
                    "Senior Software Engineer at Sarvam.ai (Sovereign LLM Sarvam-M)",
                    "Founding Software Engineer at Eugenie.ai (June 2021 – Jan 2025)",
                    "IEEE Dataset Award (2nd), Hult Prize winner • Published author (IoT & Smart Healthcare)",
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

      <div className="section-divider max-w-4xl mx-auto" />
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

      <div className="section-divider max-w-4xl mx-auto" />
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
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
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
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
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="group relative flex flex-col h-full w-full rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-5 pl-6 shadow-md hover:shadow-xl hover:shadow-primary/10 hover:border-primary/25 transition-all duration-300 overflow-hidden"
                  >
                    {/* Left accent */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary to-primary/50 opacity-70 group-hover:opacity-100 transition-opacity rounded-l-2xl" />
                    <div className="absolute top-0 right-0 w-28 h-28 bg-primary/5 rounded-bl-full blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />
                    <div className="relative z-10 flex flex-col h-full min-h-[180px]">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/15 group-hover:scale-105 transition-all duration-300">
                          {Icon && <Icon size={20} />}
                        </span>
                        <h3 className="font-display font-bold text-base text-foreground group-hover:text-primary transition-colors">
                          {category}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2 content-start flex-1 min-h-[120px]">
                        {items.map((item) => (
                          <motion.span
                            key={item}
                            whileHover={{ scale: 1.04 }}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold border border-primary/20 hover:bg-primary/15 hover:border-primary/30 transition-colors cursor-default shrink-0"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
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

      <div className="section-divider max-w-4xl mx-auto" />
      {/* Stats / Awards Section */}
      <section
        ref={statsSectionRef}
        className="relative py-28 md:py-36 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-2xl h-40 bg-white/10 rounded-full blur-[80px] -z-0" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-white/90 font-semibold text-sm tracking-[0.25em] uppercase mb-3">
              Highlights
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
              Achievements & Milestones
            </h2>
            <div className="mx-auto w-16 h-0.5 bg-white/50 rounded-full mt-4" />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative"
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className="relative h-full rounded-2xl border border-white/25 bg-white/10 backdrop-blur-md p-6 md:p-8 text-center shadow-xl hover:bg-white/15 hover:border-white/40 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/15 transition-colors" />
                    <div className="relative z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 200, damping: 15 }}
                        className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white shadow-lg mb-5 group-hover:bg-white/25 group-hover:scale-105 transition-all duration-300"
                      >
                        <StatIcon size={28} />
                      </motion.div>
                      <div className="font-display text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-white mb-2 tabular-nums drop-shadow-sm">
                        {stat.isNumber ? cgpaDisplay : stat.value}
                      </div>
                      <div className="text-white/90 text-xs md:text-sm font-medium uppercase tracking-wider leading-snug px-1">
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
      <section id="contact" className="relative py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-[0.03]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/5 rounded-full blur-[80px] -z-10" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-16 text-center overflow-hidden border border-border bg-card/80 backdrop-blur-xl shadow-2xl shadow-primary/10 hover:shadow-primary/15 hover:border-primary/25 transition-all duration-500"
          >
            {/* Left accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary/40 via-primary to-primary/40 opacity-80 group-hover:opacity-100 transition-opacity rounded-l-[2.5rem] md:rounded-l-[3rem]" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-transparent to-primary/[0.05] pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/15 transition-colors" />

            <div className="relative">
              <span className="inline-block text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                Get in touch
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-4 text-foreground tracking-tight">
                Let's work <span className="text-primary">together</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full mx-auto mb-8" />
              <p className="text-muted-foreground mb-12 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center flex-wrap">
                <motion.a
                  href="mailto:sihagmukesh22@gmail.com"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all cursor-pointer"
                >
                  <Mail size={22} />
                  Say Hello
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl border-2 border-border bg-muted/40 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin size={22} />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Location</span>
                    <span className="font-semibold text-foreground text-base">Jaipur, India</span>
                  </div>
                </motion.div>
              </div>

              <div className="mt-12 pt-10 border-t border-border/80">
                <p className="text-xs text-muted-foreground uppercase font-semibold tracking-widest mb-4">Connect</p>
                <div className="flex items-center justify-center gap-4">
                  <a href="https://www.linkedin.com/in/itismukesh/" target="_blank" rel="noreferrer" className="p-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all cursor-pointer" aria-label="LinkedIn">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://github.com/mukeshsihag" target="_blank" rel="noreferrer" className="p-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all cursor-pointer" aria-label="GitHub">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />
      <footer className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-muted/20 to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px)] bg-[size:6rem_1px] opacity-[0.04]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold tracking-tighter shadow-lg shadow-primary/25 ring-2 ring-primary/20">
                MKS
              </div>
              <div className="flex flex-col">
                <span className="text-foreground font-semibold">Mukesh Sihag</span>
                <span className="text-muted-foreground text-sm">© 2026. All rights reserved.</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a href="https://www.linkedin.com/in/itismukesh/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all cursor-pointer" aria-label="LinkedIn">
                <Linkedin size={20} />
                <span className="text-sm font-medium hidden sm:inline">LinkedIn</span>
              </a>
              <a href="https://github.com/mukeshsihag" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all cursor-pointer" aria-label="GitHub">
                <Github size={20} />
                <span className="text-sm font-medium hidden sm:inline">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
