import { useRef } from "react";
import { useInView } from "framer-motion";

function AnimatedFromBottom({ children }) {
    
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="from-bottom" ref={ref}>
            <span
                style={{
                    transform: isInView ? "none" : "translateY(50px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                }}
            >
                {children}
            </span>
        </div>
    );
}

export default AnimatedFromBottom;