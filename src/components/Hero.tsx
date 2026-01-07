import { motion } from "framer-motion";
import { Youtube, Instagram, Github, ExternalLink } from "lucide-react";

const reelItems = [
  { id: 1, title: "React Hooks Deep Dive", color: "from-violet-500 to-purple-600", link: "https://youtube.com" },
  { id: 2, title: "CSS Grid Mastery", color: "from-pink-500 to-rose-600", link: "https://instagram.com" },
  { id: 3, title: "TypeScript Tips", color: "from-cyan-500 to-blue-600", link: "https://youtube.com" },
  { id: 4, title: "Framer Motion", color: "from-orange-500 to-red-600", link: "https://instagram.com" },
  { id: 5, title: "Tailwind Tricks", color: "from-emerald-500 to-teal-600", link: "https://youtube.com" },
  { id: 6, title: "Next.js 14", color: "from-indigo-500 to-violet-600", link: "https://instagram.com" },
  { id: 7, title: "State Management", color: "from-amber-500 to-orange-600", link: "https://youtube.com" },
  { id: 8, title: "API Integration", color: "from-rose-500 to-pink-600", link: "https://instagram.com" },
];

const ScrollColumn = ({ items, speed, offset = 0 }: { items: typeof reelItems; speed: number; offset?: number }) => {
  const duplicatedItems = [...items, ...items, ...items];
  
  return (
    <motion.div
      className="flex flex-col gap-4"
      animate={{ y: [offset, offset - (items.length * 220)] }}
      transition={{
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      }}
    >
      {duplicatedItems.map((item, index) => (
        <a
          key={`${item.id}-${index}`}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-32 h-52 rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 transition-transform hover:scale-105"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90`} />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
            <span className="text-white text-xs font-medium leading-tight">{item.title}</span>
            <ExternalLink className="w-4 h-4 text-white/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </a>
      ))}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm text-muted-foreground">Available for new projects</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="block text-foreground">Frontend</span>
              <span className="block text-gradient">Engineer</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8"
            >
              8+ years crafting exceptional UI experiences for web & mobile apps.
              <br />
              <span className="text-foreground">React.js enthusiast</span> sharing knowledge through tutorials.
            </motion.p>


<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7, duration: 0.8 }}
  className="flex items-center gap-4 mb-10"
>
  {/* YouTube */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2
               w-[160px] h-[48px]
               rounded-lg font-medium text-white
               bg-gradient-to-r from-red-600 to-red-500
               hover:brightness-110 transition-all"
  >
    <Youtube className="w-5 h-5" />
    <span>YouTube</span>
  </a>

  {/* Instagram */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2
               w-[160px] h-[48px]
               rounded-lg font-medium text-white
               bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600
               hover:brightness-110 transition-all"
  >
    <Instagram className="w-5 h-5" />
    <span>Instagram</span>
  </a>

  {/* GitHub */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center
               w-[48px] h-[48px]
               rounded-lg text-white
               bg-gradient-to-br from-neutral-800 to-neutral-900
               border border-white/10
               hover:brightness-110 transition-all"
  >
    <Github className="w-5 h-5" />
  </a>
</motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex items-center gap-8"
            >
              {[
                { value: "8+", label: "Years Experience" },
                { value: "50+", label: "Projects Delivered" },
                { value: "10K+", label: "Tutorial Views" },
                { value: "5M+", label: "StackOverflow People Reached" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Infinite scrolling reels */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="hidden0 lg:flex items-center justify-center gap-4 h-[600px] overflow-hidden0 relative"
          >
            {/* Gradient overlays for smooth fade */}
            {/* <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" /> */}
            
            <ScrollColumn items={reelItems} speed={25} offset={0} />
            <ScrollColumn items={[...reelItems].reverse()} speed={30} offset={-100} />
            <ScrollColumn items={reelItems.slice(2).concat(reelItems.slice(0, 2))} speed={22} offset={-50} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
