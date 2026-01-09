import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type SocialButtonProps = {
  href: string;
  label?: string;
  Icon: LucideIcon;
  gradient: string;
  isIconOnly?: boolean;
};

const SocialButton = ({
  href,
  label,
  Icon,
  gradient,
  isIconOnly = false,
}: SocialButtonProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className={`
        flex items-center justify-center gap-2
        ${isIconOnly ? "w-[48px]" : "w-[150px]"}
        h-[48px]
        rounded-lg font-medium text-white
        ${gradient}
        hover:brightness-110 transition-all
      `}
    >
      <Icon className="w-5 h-5" />
      {!isIconOnly && label && <span>{label}</span>}
    </motion.a>
  );
};

export default SocialButton;
