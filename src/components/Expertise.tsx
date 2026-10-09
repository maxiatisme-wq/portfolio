import React from "react";
import { SiC } from 'react-icons/si';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
const labelsFirst = [
    "C Programming",
    "Python"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>About Me</h1>
            <div className="skills-grid single-column">
                <div className="skill">
                    <SiC size={48} />
                    <p>I am currently a Computer Engineering undergraduate student at Brigham Young University. I have a passion for circuit design, hardware prototyping, and embedded systems. I enjoy bridging the gap between theoretical calculations and hands-on benchtop implementation to turn concepts into functioning physical hardware.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Technical Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
