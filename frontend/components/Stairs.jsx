
import {animate, motion } from "framer-motion";


const stairAnimation = {
    initial:{
        top:"0%",
    },
    animate:{
        top:"100%",
    },
    exit:{
        top:["100%","0%"],
    }
}
// calculated reverse index for staggered delay
const reverseIndex=(index)=>{
const totalSteps= 6;
 return totalSteps - index - 1;
}

const Stairs = () => {
  return (
    <>
    {/* render 6 motion divs , each representing a step of stairs
    Each div will move the same animation by the stairsAnimation object 
    the delayfor each div is calcualted sinamically based on it's reversed index ,
    creating a staggered effect with the decreasing delay for each subsequest step
    */}
    {[...Array(6)].map((_,index)=>{
      return (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative "
        />
      );
    })}
    </>
  )
}

export default Stairs