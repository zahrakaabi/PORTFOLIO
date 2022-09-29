/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// Packages
// UI Lib Components
import { useRef, useEffect } from "react";

// UI Local Components

// Styles
import './index.scss';

/* -------------------------------------------------------- */
/*                          APP                             */
/* -------------------------------------------------------- */
function CustomCursor() {
    const cursorRef = useRef(null)

    useEffect(() => {
        document.addEventListener('mousemove', e => {
            const {clientX, clientY} = e
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        })
    }, [])

  /* *********************** RENDERING ******************** */
  return <div className="custom-cursor" ref={cursorRef}/>;
}

export default CustomCursor;