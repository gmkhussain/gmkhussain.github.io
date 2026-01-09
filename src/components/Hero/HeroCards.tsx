import { motion } from "framer-motion";
import { Youtube, Instagram, Github, ExternalLink } from "lucide-react";
import ScrollRow from "./ScrollRow";

const CARD_WIDTH = 180;
const CARD_HEIGHT = 280;
const GAP = 20;

const ScrollColumn = ({
  items,
  speed,
  offset = 0,
}: {
  items: any[];
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
      {duplicatedItems.map((item, index) => {
        const randomDelay = Math.random() * 8 + 2; // 2s–8s

        return (
          <motion.a
            key={`${item?.id}-${index}`}
            href={item?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex-shrink-0 rounded-[10px] overflow-hidden cursor-pointer"
            style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}

            /** 🔥 AUTO hover animation */
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: randomDelay,
            }}

            /** 🖱️ Real hover still works */
            whileHover={{ scale: 1.08 }}
          >

            {item?.image_url && (
              <img
                src={item.image_url}
                alt={item?.title || "reel"}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            )}

            <motion.div
              className="_overlay absolute inset-0 bg-black"
              animate={{
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: randomDelay,
              }}
            />


            {item?.title && (
              <div className="_title absolute inset-0 flex items-end p-4">
                <span className="text-white text-sm font-semibold leading-tight">
                  {item.title}
                </span>
              </div>
            )}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

const HeroCards = ({data}  : {data: {}}) => {
  
  return <>
  
        {/* 📱 MOBILE: Left → Right */}
      <div className="lg:hidden overflow-hidden py-6 mr-[50]">
        <ScrollRow items={data?.cards} speed={35} />
      </div>
  
          {/* Right side - Infinite scrolling reels */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="hidden lg:flex items-center justify-center gap-4 h-[600px] overflow-hidden0 relative left-[110px]"
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

            </>
}

export default HeroCards