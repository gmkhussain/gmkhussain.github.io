import { motion } from "framer-motion";
import { Code2, Palette, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that teams love to work with",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating pixel-perfect interfaces with exceptional user experience",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and efficiency in every project",
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Sharing knowledge through tutorials and community content",
  },
];

const About = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Crafting Digital
              <br />
              <span className="text-gradient">Experiences</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              With over 8 years of experience in frontend development, I specialize 
              in building modern web and mobile applications using React.js ecosystem.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Beyond coding, I'm passionate about sharing knowledge. You can find my 
              tutorials on YouTube and daily JS/React tips on Instagram, helping 
              developers level up their skills.
            </p>

            {/* Feature cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-4 rounded-xl bg-card border border-border group hover:border-primary/50 transition-all"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse-glow" />
              <div className="absolute inset-8 rounded-full border border-primary/30" />
              <div className="absolute inset-16 rounded-full border border-primary/40" />
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 rounded-2xl bg-card border border-border">
                  <div className="text-6xl font-bold text-gradient mb-2">8+</div>
                  <div className="text-muted-foreground">Years Building</div>
                  <div className="text-foreground font-medium">Amazing UIs</div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0 }}
                className="absolute top-12 right-0 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium"
              >
                React.js
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                className="absolute bottom-24 left-0 px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium border border-border"
              >
                TypeScript
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 2 }}
                className="absolute bottom-12 right-8 px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium border border-border"
              >
                Mobile Apps
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
