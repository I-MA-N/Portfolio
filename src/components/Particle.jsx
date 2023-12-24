import { useContext, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { particleOption } from "../assets/particleOptions";
import { ThemeContext } from "../App";

const Particle = () => {
    const [init, setInit] = useState(false);
    const [ isDark ] = useContext(ThemeContext);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (init) {
      return (
        <Particles
          className="relative z-[1]"
          id="tsparticles"
          options={{
            ...particleOption,
            ...particleOption.background.color.value = isDark ? "#0f172a" : "#f1f5f9",
            ...particleOption.particles.color.value = isDark ? "#f1f5f9" : "#0f172a",
            ...particleOption.particles.links.color = isDark ? "#f1f5f9" : "#0f172a",
          }}
        />
      );
    }

    return <></>;
};

export default Particle;