export const revealFromLeft = {
  hidden: { x: "-20px", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1 },
  },
};

export const revealFromBottom = {
  hidden: { y: "15px", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1 },
  },
};

export const revealFromRight = {
  hidden: { x: "20px", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1 },
  },
};