import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: "⚛️", color: "185 100% 50%" },
  { name: "TypeScript", icon: "🔷", color: "210 100% 50%" },
  { name: "JavaScript", icon: "💛", color: "45 100% 50%" },
  { name: "Next.js", icon: "▲", color: "0 0% 100%" },
  { name: "Vite", icon: "⚡", color: "270 100% 60%" },
  { name: "Tailwind", icon: "🌊", color: "185 100% 50%" },
  { name: "Framer", icon: "🎭", color: "320 100% 60%" },
  { name: "React Native", icon: "📱", color: "200 100% 50%" },
];

const TechStack = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            The tools I use daily to build exceptional user experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-6 rounded-xl bg-card border border-border transition-all hover:border-primary/50 hover:glow"
            >
              <div className="text-4xl mb-3">{tech.icon}</div>
              <h3 className="font-semibold text-foreground group-hover:text-gradient transition-all">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
