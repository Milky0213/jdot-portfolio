import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
// Components
import ProjectCard from "../ProjectCard";
// Styling
import '../../../../styles/pageOne/featuredWork/emblaCarousel.css';
// Icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const useAutoplayProgress = (emblaApi, progressNode) => {
    const [showAutoplayProgress, setShowAutoplayProgress] = useState(false);
    const [hideProgressWrapper, setHideProgressWrapper] = useState(false); // New state for hiding wrapper
    const inactivityTimeout = useRef(null);

    const startProgress = (duration) => {
        if (!progressNode.current) return;
        // reset animation
        progressNode.current.style.animation = "none";
        void progressNode.current.offsetWidth; // force reflow
        progressNode.current.style.animation = `progressAnim ${duration}ms linear forwards`;
        setShowAutoplayProgress(true);
        setHideProgressWrapper(false); // Show wrapper when progress starts
    };

    const stopProgress = () => {
        if (!progressNode.current) return;
        progressNode.current.style.animation = "none";
        setShowAutoplayProgress(false);
        setHideProgressWrapper(true); // Hide wrapper when progress stops
    };

    // Start progress or restart it on autoplay timer set event
    useEffect(() => {
        if (!emblaApi) return;
        const autoplay = emblaApi.plugins().autoplay;
        if (!autoplay) return;

        const onTimerSet = () => {
            const time = autoplay.timeUntilNext();
            startProgress(time);
        };

        const onTimerStopped = () => {
            stopProgress();
        };

        emblaApi.on("autoplay:timerset", onTimerSet);
        emblaApi.on("autoplay:timerstopped", onTimerStopped);

        // Start progress on mount (initial animation)
        startProgress(autoplay.options.delay);

        return () => {
            emblaApi.off("autoplay:timerset", onTimerSet);
            emblaApi.off("autoplay:timerstopped", onTimerStopped);
        };
    }, [emblaApi]);

    // Pause progress and autoplay on user interaction, then restart after 15s inactivity
    const handleUserInteraction = () => {
        if (!emblaApi) return;
        const autoplay = emblaApi.plugins().autoplay;
        if (!autoplay) return;

        // Stop autoplay and progress immediately
        autoplay.stop();
        stopProgress();

        // Clear previous timeout if any
        if (inactivityTimeout.current) clearTimeout(inactivityTimeout.current);

        // Restart autoplay and progress after 15 seconds of inactivity
        inactivityTimeout.current = setTimeout(() => {
            autoplay.play();
            startProgress(autoplay.options.delay);
        }, 15000);
    };

    return { showAutoplayProgress, hideProgressWrapper, handleUserInteraction };
};

const EmblaCarousel = ({ projects }) => {
    const autoplayOptions = useRef(
        Autoplay({ delay: 5500, stopOnInteraction: true })
    );

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            skipSnaps: false,
        },
        [autoplayOptions.current]
    );

    const progressNode = useRef(null);
    const { showAutoplayProgress, hideProgressWrapper, handleUserInteraction } = useAutoplayProgress(emblaApi, progressNode);

    const scrollPrev = useCallback(() => {
        emblaApi?.scrollPrev();
        handleUserInteraction();
    }, [emblaApi, handleUserInteraction]);

    const scrollNext = useCallback(() => {
        emblaApi?.scrollNext();
        handleUserInteraction();
    }, [emblaApi, handleUserInteraction]);

    return (
        <div className="embla relative">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {projects.map((project, index) => (
                        <div className="embla__slide" key={index}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Progress bar - Adding conditional hidden class */}
            {/* <div className={`embla__progress-wrapper absolute bottom-0 left-0 w-full h-1 bg-gray-700 overflow-hidden ${hideProgressWrapper ? 'hidden' : ''}`}>
                <div
                    ref={progressNode}
                    className={`embla__progress-bar h-full bg-white transition-all duration-300 ${showAutoplayProgress ? "animate-progress" : ""}`}
                ></div>
            </div> */}

            <button className="embla__prev" onClick={scrollPrev} aria-label="Previous slide">
                <FaArrowLeft />
            </button>
            <button className="embla__next" onClick={scrollNext} aria-label="Next slide">
                <FaArrowRight />
            </button>
        </div>
    );
};

export default EmblaCarousel;