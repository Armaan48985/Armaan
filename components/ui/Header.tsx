import { motion, MotionValue } from "framer-motion";

interface HeaderProps {
  translate: MotionValue<number>; // Type changed to MotionValue<number>
  titleComponent: React.ReactNode; // ReactNode allows JSX or string components
}

export const Header = ({ translate, titleComponent }: HeaderProps) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};
