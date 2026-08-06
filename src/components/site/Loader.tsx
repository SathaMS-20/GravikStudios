import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0, filter: "blur(14px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-[min(78vw,420px)]">
            <motion.div
              initial={{ opacity: 0, y: 14, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center text-[clamp(1rem,3.4vw,1.6rem)] font-semibold tracking-[0.34em] uppercase"
            >
              Gravik
            </motion.div>
            <div className="mt-6 h-px w-full overflow-hidden bg-border">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
                className="h-full origin-left bg-foreground"
              />
            </div>
            <div className="mt-4 text-center text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
              Studios
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
