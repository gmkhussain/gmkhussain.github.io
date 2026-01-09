import { motion } from "framer-motion";
import { Youtube, Instagram, Github, Linkedin, ExternalLink, Mail, MessageCircle } from "lucide-react";
import SocialButton from "./SocialButton";
import CountUp from "./CountUp";

const SOCIAL_CONFIG = [
  {
    key: "youtube",
    label: "YouTube",
    Icon: Youtube,
    gradient: "bg-gradient-to-r from-red-600 to-red-500",
    buildHref: (v: string) => v,
  },
  {
    key: "instagram",
    label: "Instagram",
    Icon: Instagram,
    gradient: "bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600",
    buildHref: (v: string) => v,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    Icon: Linkedin,
    gradient: "bg-gradient-to-r from-sky-600 to-blue-700",
    buildHref: (v: string) => v,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    Icon: MessageCircle,
    gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
    buildHref: (v: string) => `https://wa.me/${v}`,
  },
  {
    key: "email",
    label: "Email",
    Icon: Mail,
    gradient: "bg-gradient-to-r from-sky-500 to-blue-600",
    buildHref: (v: string) => `mailto:${v}`,
  },
  {
    key: "github",
    label: "Github",
    Icon: Github,
    gradient:
      "bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10",
    // isIconOnly: true,
    buildHref: (v: string) => v,
  },
] as const;


const Stats = ({data}  : {data: {}}) => {
 
  
  return <>
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7, duration: 0.8 }}
  className="flex flex-wrap items-center gap-4 mb-10"
>
  {SOCIAL_CONFIG.map(
    ({ key, label, Icon, gradient, buildHref, isIconOnly }) => {
      const value = data?.link?.[key];

      if (!value) return null;

      return (
        <SocialButton
          key={key}
          href={buildHref(value)}
          label={label}
          Icon={Icon}
          gradient={gradient}
          isIconOnly={isIconOnly}
        />
      );
    }
  )}
</motion.div>






<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.9, duration: 0.8 }}
  className="
    grid grid-cols-2 gap-y-6 gap-x-4
    sm:flex sm:items-center sm:gap-8
  "
>
  {[
    { end: 8, suffix: "+", label: "Years Experience" },
    { end: 20, suffix: "+", label: "Projects Delivered" },
    { end: 10000, suffix: "+", label: "Tutorial Views" },
    { end: 5400000, suffix: "+", label: "StackOverflow Reached" },
  ].map((stat, index) => (
    <div key={index} className="text-center">
      <div className="text-[2xl] md:text-5xl font-bold text-gradient">
        <CountUp end={stat.end} suffix={stat.suffix} />
      </div>
      <div className="text-sm text-muted-foreground">
        {stat.label}
      </div>
    </div>
  ))}
</motion.div>

            </>
}

export default Stats