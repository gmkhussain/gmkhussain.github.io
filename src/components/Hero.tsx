import { motion } from "framer-motion";
import { Youtube, Instagram, Github, ExternalLink } from "lucide-react";

const reelItems = [
  {
    id: 1,
    // title: "React Hooks Deep Dive",
    // "image_url": "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/1a806620653111.54fa1dd299812.jpg",
    link: "https://youtube.com",
  },
  {
    id: 2,
    title: "CSS Grid Mastery",
    image_url: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/1a806620653111.54fa1dd299812.jpg",
    link: "https://instagram.com",
  },
];

const CARD_WIDTH = 180;
const CARD_HEIGHT = 280;
const GAP = 20;

const ScrollColumn = ({
  items,
  speed,
  offset = 0,
}: {
  items: typeof reelItems;
  speed: number;
  offset?: number;
}) => {
  const duplicatedItems = [...items, ...items, ...items];
  const scrollDistance = items.length * (CARD_HEIGHT + GAP);

  return (
    <motion.div
      className="flex flex-col gap-5"
      animate={{ y: [offset, offset - scrollDistance] }}
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
          key={`${item?.id}-${index}`}
          href={item?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex-shrink-0 rounded-3xl overflow-hidden
                     cursor-pointer transition-transform hover:scale-105"
          style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
        >
          {/* Image */}
          { item?.image_url && <img
            src={item?.image_url}
            alt={item?.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          /> }

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors" />

          {/* Title */}
          { item?.title && <div className="absolute inset-0 flex items-end p-4">
            <span className="text-white text-sm font-semibold leading-tight">
              {item?.title}
            </span>
          </div> }
        </a>
      ))}
    </motion.div>
  );
};


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
              <span className="text-sm text-muted-foreground">{data?.about?.headline}</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="block text-foreground">{data?.about?.title_1}</span>
              <span className="block text-gradient">{data?.about?.title_2}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8"
            >
              {data?.about?.content_1}
              <br />
              <span className="text-foreground">{data?.about?.content_2}</span> {data?.about?.content_3}
            </motion.p>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7, duration: 0.8 }}
  className="flex items-center gap-4 mb-10"
>
  {/* YouTube */}
  <a
    href={data?.link?.youtube}
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
    href={data?.link?.instagram}
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
    href={data?.link?.github}
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
            className="hidden lg:flex items-center justify-center gap-4 h-[600px] overflow-hidden0 relative"
          >
            {/* Gradient overlays for smooth fade */}
            {/* <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" /> */}
            
            { data?.cards && (<>
             <ScrollColumn items={data?.cards} speed={40} offset={0} /> 
            <ScrollColumn items={[...data?.cards].reverse()} speed={50} offset={-100} />
            <ScrollColumn items={data?.cards.slice(2).concat(data?.cards?.slice(0, 2))} speed={30} offset={-50} />
          </>) }
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
