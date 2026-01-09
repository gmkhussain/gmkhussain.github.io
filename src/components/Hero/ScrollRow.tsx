import { motion } from "framer-motion";

const CARD_WIDTH = 180;
const CARD_HEIGHT = 280;
const GAP = 20;

const ScrollRow = ({
  items,
  speed,
  offset = 0,
}: {
  items: any[];
  speed: number;
  offset?: number;
}) => {
    
  // 🛡️ Safety guard
  const safeItems = Array.isArray(items) ? items : [];

  if (!safeItems.length) return null;

  const duplicatedItems = [...items, ...items, ...items];
  const scrollDistance = items.length * (CARD_WIDTH + GAP);

//   return (<>{JSON.stringify(items)}</>)

  return (
    <motion.div
      className="flex gap-5 absolute -z-10 -top-[10px] -ml-[30px]"
      animate={{ x: [offset, offset - scrollDistance] }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      }}
    >
      {duplicatedItems.map((item, index) => {
        const randomDelay = Math.random() * 8 + 2;

        return (
          <motion.a
            key={`${item?.id}-${index}`}
            href={item?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex-shrink-0 rounded-[10px] overflow-hidden"
            style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
            animate={{ scale: [1, 1.06, 1] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: randomDelay,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.08 }}
          >
            {item?.image_url && (
              <img
                src={item.image_url}
                alt={item?.title || "reel"}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            <motion.div
              className="absolute inset-0 bg-black"
              animate={{ opacity: [0.5, 0, 0.5] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: randomDelay,
                ease: "easeInOut",
              }}
            />

            {item?.title && (
              <div className="absolute inset-0 flex items-end p-4">
                <span className="text-white text-sm font-semibold">
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

export default ScrollRow;
