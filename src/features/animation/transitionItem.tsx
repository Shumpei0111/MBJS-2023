import { motion } from 'framer-motion';

export const TransitionItem = (props: {
  transitionIndex: number;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ transform: 'translateY(100px)', opacity: 0 }}
      animate={{
        opacity: 1,
        transform: 'translateY(0)',
        transition: {
          delay: props.transitionIndex * 0.04,
          duration: 0.2,
        },
      }}
      exit={{
        opacity: 0,
        transform: 'translateY(-100px)',
        transition: { delay: 0.04, duration: 0.2 },
      }}
    >
      {props.children}
    </motion.div>
  );
};
