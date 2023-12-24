import { useContext, useEffect, useState } from "react";
import { sections } from "../../db";
import { ActiveLinkContext } from "./Context";

const Cursor = () => {
    const { activeLink } = useContext(ActiveLinkContext);
    const [position, setPosition] = useState({
        left: '0px',
        top: '0px',
        width: '40px',
        height: '40px',
    })

    // Function to update cursor coordinates
    const updatePositions = e => {
        if (e.pageX < document.body.clientWidth - 30  &&  e.pageY < document.body.clientHeight - 30) {
            setPosition(prevValue => {
                return {
                    ...prevValue,
                    left: `${e.pageX - 19}px`,
                    top: `${e.pageY - 19}px`,
                }
            })
        }
    }

    // Update cursor background color
    useEffect(() => {
        setPosition(prevValue => {
            return {
                ...prevValue,
                backgroundColor: sections[activeLink - 1].color
            }
        })
    }, [activeLink])

    // Set event listeners
    useEffect(() => {
        window.addEventListener('mousemove', updatePositions);

        return () => {
            window.removeEventListener('mousemove', updatePositions);
        }
    }, [])

    return (
        <div className="big-circle" style={position}>
        </div>
    )
}

export default Cursor;