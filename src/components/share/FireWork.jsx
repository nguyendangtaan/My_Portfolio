import React, { useEffect } from "react";
import { Fireworks } from "fireworks-js";

const FireworksEffect = ({ style }) => {
    useEffect(() => {
        const container = document.getElementById("fireworks-container");

        if (container) {
            const fireworks = new Fireworks(container, {
                traceSpeed: 1,
                acceleration: 1.05,
                friction: 0.98,
                gravity: 1.5,
                particles: 200,
                explosion: 5,
                trace: 3,
                sound: {
                    enable: true,
                },
            });

            fireworks.start();

            return () => {
                fireworks.stop();
            };
        }
    }, []);

    return (
        <div
            id="fireworks-container"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                direction: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                pointerEvents: "none",
                zIndex: 9999,

            }}
        ></div>
    );
};

export default FireworksEffect;
