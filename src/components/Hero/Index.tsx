import { motion, useMotionValue, useTransform } from "framer-motion";
import Stats from "./Stats"
import HeroCards from "./HeroCards";



const Hero = ({data}  : {data: {}}) => {

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mt-[90px] md:mt-[0px] my-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm text-muted-foreground">{data?.about?.headline}</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
          <span className="block text-foreground drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] sm:drop-shadow-none">
            {data?.about?.title_1}
          </span>

          <span className="block text-gradient drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:drop-shadow-none">
            {data?.about?.title_2}
          </span>

  </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8"
            >
              <p>{data?.about?.content_1}</p>
              <p>{data?.about?.content_2}</p>
            </motion.div>

        

            <Stats data={data} />

          </motion.div>

          <HeroCards data={data} />

        </div>
      </div>
    </section>
  );
};

export default Hero;
