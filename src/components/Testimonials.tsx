import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const CARD_WIDTH = 360;
const GAP = 24;
const STEP = CARD_WIDTH + GAP;
const PAUSE = 4000;

const testimonials = [
  {
    id: 1,
    title: "Hussain is a true inspiration.",
    description: "He has been the most professional and down-to-earth person I have ever worked with. This guy holds a wide range of knowledge regarding UI/UX, libraries, and frameworks. Keep up the good work!",
    name: "Abddal Asif",
    role: "Senior Software Engineer",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    title: "He is a very polite resource",
    description: "He knows his stuff and is able to sort out every problem. He also manages his team very well. I highly recommend him!",
    name: "Mubashir Razzak",
    role: "CTO",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 1,
    title: "Outstanding Developer",
    description: "I did work with Hussain and I had an enchanting experience while working with him. He always has solution of many problems and very good resercher. keep doing amazing work",
    name: "Osama Khan",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    title: "Hussain not only hardworking person...",
    description: "also he is so creative mind personality. Always come up with new ideas. He has wonderful observation and ability to express his views",
    name: "Syed Ferhat Ali Naqvi",
    role: "Assistant Manager",
    avatar: "https://i.pravatar.cc/150?img=12",
  }
];

export default function Testimonials() {
  const controls = useAnimation();
  const [index, setIndex] = useState(0);

  const items = [...testimonials, ...testimonials];
  const total = testimonials.length;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const run = async () => {
      await controls.start({
        x: -index * STEP,
        transition: { duration: 1, ease: "easeInOut" },
      });

      timer = setTimeout(() => {
        setIndex((i) => i + 1);
      }, PAUSE);
    };

    run();

    return () => clearTimeout(timer);
  }, [index]);

  // 🔥 Seamless reset (NO animation)
  useEffect(() => {
    if (index === total) {
      controls.set({ x: 0 });
      setIndex(2);
    }
  }, [index]);

  return (
    <section className="relative w-full py-24 overflow-hidden">
      <div className="px-6 mb-12">
        <h2 className="text-4xl md:text-5xl text-center">
          <span className="font-bold">Word on the street</span> {" "}
          <span className="text-gradient italic font2">about me</span>
        </h2>
      </div>

      <div className="overflow-hidden">
        {/* 25% cut */}
        <div className="px-[5px] sm:px-[12.5vw]">
          <motion.div
            animate={controls}
            className="flex gap-6 sm:justify-center"
          >
            {items.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="flex-shrink-0 w-[360px]
                           rounded-3xl bg-secondary/70
                           border border-white/10
                           backdrop-blur p-8"
              >
                <h3 className="text-2xl text-gradient italic font2  mb-3 h-[40px]">{t.title}</h3>
                <p className="text-muted-foreground mb-6 h-[140px]">
                  {t.description}
                </p>

                <div className="flex items-center gap-4">
                  {/* <img
                    src={t.avatar}
                    className="w-12 h-12 rounded-full"
                  /> */}
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
