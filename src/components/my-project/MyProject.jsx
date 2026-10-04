'use client';

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MoveHorizontal,
} from 'lucide-react';

import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'TechBasket – AI-Powered Inventory & RMA Management System',
    type: 'Team Project',
    description:
      'A full-stack enterprise management platform built collaboratively with the Endgame-HexaVengers team to simplify inventory, purchasing, product returns, and RMA operations. Built with a type-safe architecture, RESTful APIs, role-based access control, and AI-powered insights.',
    image: '/project-14.png',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    liveLink:
      'https://tech-basket-frontend-seven.vercel.app/',
    githubLink:
      'https://github.com/Endgame-HexaVengers/Tech-Basket-Frontend',
    backendLink:
      'https://github.com/Endgame-HexaVengers/Tech-Basket-Backend',
  },

  {
    title: 'DriveFleet (Car Rental)',
    description:
      'A full-stack vehicle booking platform featuring real-time vehicle availability, flexible reservation options, and backend API integration.',
    image: '/project-10.png',
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'React Icons',
    ],
    liveLink:
      'https://drive-fleet-five.vercel.app/',
    githubLink:
      'https://github.com/TonoySharma/DriveFleet',
  },

  {
    title: 'Ebook Hub',
    description:
      'A digital book-sharing platform supporting server-side search, user uploading, and an effortless ebook reading experience.',
    image: '/project-11.png',
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'React Icons',
    ],
    liveLink:
      'https://ebook-sharing-platform.vercel.app/',
    githubLink:
      'https://github.com/TonoySharma/ebook-sharing-platform',
  },

  {
    title: 'Mobile Shop',
    description:
      'A feature-rich gadget marketplace featuring dynamic product browsing, server-side search, and secure OAuth authentication.',
    image: '/project-12.png',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'React Icons',
    ],
    liveLink:
      'https://gadget-hub-theta.vercel.app/',
    githubLink:
      'https://github.com/TonoySharma/Gadget-Marketplace',
  },

  {
    title: 'Fin Pulse AI',
    description:
      'An AI-powered financial platform featuring data filtering, authentication, and a responsive user interface designed for a smooth user experience.',
    image: '/project-13.png',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'React Icons',
    ],
    liveLink:
      'https://fin-pulse-ai-lac.vercel.app/',
    githubLink:
      'https://github.com/TonoySharma/Fin-Pulse-AI',
  },
];

/* =========================================
   Animation Variants
========================================= */

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    y: 30,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

/* =========================================
   Project Section
========================================= */

const ProjectSection = () => {
  const carouselRef = useRef(null);

  const dragRef = useRef({
    pointerId: null,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
    dragging: false,
  });

  const [isDragging, setIsDragging] = useState(false);

  const [canScrollLeft, setCanScrollLeft] =
    useState(false);

  const [canScrollRight, setCanScrollRight] =
    useState(false);

  /* =========================================
     Update Scroll Buttons
  ========================================= */

  const updateScrollButtons = useCallback(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const maxScroll =
      carousel.scrollWidth - carousel.clientWidth;

    setCanScrollLeft(
      carousel.scrollLeft > 2
    );

    setCanScrollRight(
      carousel.scrollLeft < maxScroll - 2
    );
  }, []);

  /* =========================================
     Resize Listener
  ========================================= */

  useEffect(() => {
    updateScrollButtons();

    window.addEventListener(
      'resize',
      updateScrollButtons
    );

    return () => {
      window.removeEventListener(
        'resize',
        updateScrollButtons
      );
    };
  }, [updateScrollButtons]);

  /* =========================================
     Get Card Step
  ========================================= */

  const getCardStep = useCallback(() => {
    const carousel = carouselRef.current;

    if (!carousel) return 0;

    const cards =
      carousel.querySelectorAll(
        '[data-project-card]'
      );

    if (cards.length === 0) return 0;

    if (cards.length === 1) {
      return cards[0].getBoundingClientRect().width;
    }

    const firstCard = cards[0];
    const secondCard = cards[1];

    return (
      secondCard.getBoundingClientRect().left -
      firstCard.getBoundingClientRect().left
    );
  }, []);

  /* =========================================
     Arrow Navigation
  ========================================= */

  const scrollProjects = useCallback(
    (direction) => {
      const carousel = carouselRef.current;

      if (!carousel) return;

      const step = getCardStep();

      if (!step) return;

      carousel.scrollBy({
        left: direction * step,
        behavior: 'smooth',
      });
    },
    [getCardStep]
  );

  /* =========================================
     Snap To Nearest Card
  ========================================= */

  const snapToNearestCard = useCallback(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const step = getCardStep();

    if (!step) return;

    const maxScroll =
      carousel.scrollWidth -
      carousel.clientWidth;

    const currentScroll =
      carousel.scrollLeft;

    const nearestIndex = Math.round(
      currentScroll / step
    );

    const targetScroll = Math.max(
      0,
      Math.min(
        nearestIndex * step,
        maxScroll
      )
    );

    carousel.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  }, [getCardStep]);

  /* =========================================
     Pointer Down
  ========================================= */

  const handlePointerDown = (event) => {
    // Only custom drag with mouse
    if (event.pointerType !== 'mouse') {
      return;
    }

    // Don't drag when clicking buttons/links
    if (
      event.target.closest(
        'a, button'
      )
    ) {
      return;
    }

    const carousel =
      carouselRef.current;

    if (!carousel) return;

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft:
        carousel.scrollLeft,
      moved: false,
      dragging: true,
    };

    carousel.setPointerCapture(
      event.pointerId
    );

    setIsDragging(true);
  };

  /* =========================================
     Pointer Move
  ========================================= */

  const handlePointerMove = (event) => {
    const drag = dragRef.current;

    if (!drag.dragging) return;

    if (
      drag.pointerId !==
      event.pointerId
    ) {
      return;
    }

    const carousel =
      carouselRef.current;

    if (!carousel) return;

    const distance =
      event.clientX -
      drag.startX;

    if (Math.abs(distance) > 6) {
      drag.moved = true;
    }

    if (!drag.moved) return;

    event.preventDefault();

    carousel.scrollLeft =
      drag.startScrollLeft -
      distance;
  };

  /* =========================================
     Pointer Up
  ========================================= */

  const handlePointerUp = (event) => {
    const drag = dragRef.current;

    if (!drag.dragging) return;

    if (
      drag.pointerId !==
      event.pointerId
    ) {
      return;
    }

    const carousel =
      carouselRef.current;

    const wasMoved =
      drag.moved;

    dragRef.current = {
      pointerId: null,
      startX: 0,
      startScrollLeft: 0,
      moved: false,
      dragging: false,
    };

    setIsDragging(false);

    if (carousel) {
      if (wasMoved) {
        snapToNearestCard();
      }

      if (
        carousel.hasPointerCapture(
          event.pointerId
        )
      ) {
        carousel.releasePointerCapture(
          event.pointerId
        );
      }
    }
  };

  /* =========================================
     Pointer Cancel
  ========================================= */

  const handlePointerCancel = (event) => {
    const carousel =
      carouselRef.current;

    dragRef.current = {
      pointerId: null,
      startX: 0,
      startScrollLeft: 0,
      moved: false,
      dragging: false,
    };

    setIsDragging(false);

    if (
      carousel?.hasPointerCapture(
        event.pointerId
      )
    ) {
      carousel.releasePointerCapture(
        event.pointerId
      );
    }
  };

  /* =========================================
     JSX
  ========================================= */

  return (
    <section className="relative overflow-hidden bg-[#030014] px-6 py-24 text-white lg:px-12">

      {/* Background Glow */}

      <div className="absolute left-[-10%] top-[-10%] h-[350px] w-[350px] rounded-full bg-violet-700/20 blur-[120px]" />

      <div className="absolute bottom-[-10%] right-[-10%] h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">

        {/* =================================
            Header
        ================================= */}

        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <h2 className="mb-5 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl">
              Featured Projects
            </h2>

            <p className="max-w-xl text-lg font-light text-gray-400">
              Production-grade applications —
              full-stack architecture, polished
              UI, and real-world features.
            </p>

            <p className="mt-5 flex items-center gap-2 text-sm text-purple-200/80">
              <MoveHorizontal
                size={17}
                className="text-purple-300"
              />

              {projects.length} projects ·
              Drag to explore more
            </p>

          </motion.div>

          {/* =================================
              Navigation Buttons
          ================================= */}

          <div className="flex shrink-0 gap-3">

            <button
              type="button"
              onClick={() =>
                scrollProjects(-1)
              }
              disabled={
                !canScrollLeft
              }
              aria-label="Previous projects"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#161025] text-white transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={() =>
                scrollProjects(1)
              }
              disabled={
                !canScrollRight
              }
              aria-label="Next projects"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#161025] text-white transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight size={22} />
            </button>

          </div>
        </div>

        {/* =================================
            Carousel
        ================================= */}

        <motion.div
          ref={carouselRef}
          role="region"
          aria-label="Featured projects"
          aria-roledescription="carousel"

          onScroll={
            updateScrollButtons
          }

          onPointerDown={
            handlePointerDown
          }

          onPointerMove={
            handlePointerMove
          }

          onPointerUp={
            handlePointerUp
          }

          onPointerCancel={
            handlePointerCancel
          }

          variants={
            containerVariants
          }

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            margin: '-50px',
          }}

          className={`
            project-carousel
            flex
            gap-6
            overflow-x-hidden
            overflow-y-hidden
            ${isDragging
              ? 'snap-none cursor-grabbing select-none'
              : 'snap-x snap-mandatory cursor-grab'
            }
          `}

          style={{
            userSelect: isDragging
              ? 'none'
              : 'auto',

            touchAction:
              'pan-x',
          }}
        >

          {/* =================================
              Project Cards
          ================================= */}

          {projects.map(
            (project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                variants={
                  cardVariants
                }
                data-project-card

                className="
                  group
                  relative
                  w-full
                  shrink-0
                  snap-start
                  sm:w-[calc(50%-0.75rem)]
                  lg:w-[calc(33.333333%-1rem)]
                  xl:w-[calc(25%-1.125rem)]
                "
              >

                {/* =================================
                    Card
                ================================= */}

                <div className="flex h-full flex-col rounded-3xl border border-white/5 bg-[#161025]/50 p-4 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/40 hover:bg-[#1c1432] hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)]">

                  {/* =================================
                      Browser Header
                  ================================= */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="mb-5 flex items-center justify-between px-1"
                  >

                    {/* Dots */}

                    <div className="flex items-center gap-2">

                      {/* Purple */}

                      <motion.div
                        animate={{
                          scale: [
                            1,
                            1.15,
                            1,
                          ],
                          opacity: [
                            0.7,
                            1,
                            0.7,
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="relative"
                      >

                        <div className="absolute inset-0 rounded-full bg-purple-500 opacity-70 blur-md" />

                        <div className="relative h-3 w-3 rounded-full border border-white/20 bg-gradient-to-br from-purple-400 to-purple-700 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />

                      </motion.div>

                      {/* Blue */}

                      <motion.div
                        animate={{
                          scale: [
                            1,
                            1.15,
                            1,
                          ],
                          opacity: [
                            0.7,
                            1,
                            0.7,
                          ],
                        }}
                        transition={{
                          duration: 2,
                          delay: 0.3,
                          repeat: Infinity,
                        }}
                        className="relative"
                      >

                        <div className="absolute inset-0 rounded-full bg-sky-500 opacity-70 blur-md" />

                        <div className="relative h-3 w-3 rounded-full border border-white/20 bg-gradient-to-br from-sky-400 to-sky-700 shadow-[0_0_12px_rgba(14,165,233,0.8)]" />

                      </motion.div>

                      {/* Green */}

                      <motion.div
                        animate={{
                          scale: [
                            1,
                            1.15,
                            1,
                          ],
                          opacity: [
                            0.7,
                            1,
                            0.7,
                          ],
                        }}
                        transition={{
                          duration: 2,
                          delay: 0.6,
                          repeat: Infinity,
                        }}
                        className="relative"
                      >

                        <div className="absolute inset-0 rounded-full bg-emerald-500 opacity-70 blur-md" />

                        <div className="relative h-3 w-3 rounded-full border border-white/20 bg-gradient-to-br from-emerald-400 to-emerald-700 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />

                      </motion.div>

                    </div>

                    {/* Glow Line */}

                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: '80px',
                      }}
                      transition={{
                        duration: 1,
                      }}
                      className="h-[2px] rounded-full bg-gradient-to-r from-purple-500/70 to-transparent"
                    />

                  </motion.div>

                  {/* =================================
                      Image
                  ================================= */}

                  <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-xl">

                    <img
                      src={project.image}
                      alt={project.title}
                      draggable={false}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0718] via-transparent to-transparent opacity-60" />

                  </div>

                  {/* =================================
                      Content
                  ================================= */}

                  <div className="flex flex-grow flex-col">

                    {/* Project Type */}

                    {project.type && (
                      <span className="mb-3 inline-flex w-fit items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-purple-300">
                        {project.type}
                      </span>
                    )}

                    {/* Title */}

                    <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-purple-400">
                      {project.title}
                    </h3>

                    {/* Description */}

                    <p className="mb-5 line-clamp-3 text-xs leading-relaxed text-gray-400">
                      {project.description}
                    </p>

                    {/* Tags */}

                    <div className="mb-4 flex flex-wrap gap-1.5">

                      {project.tags.map(
                        (tag, i) => (
                          <span
                            key={`${tag}-${i}`}
                            className="rounded-md border border-purple-500/20 bg-purple-500/10 px-2 py-0.5 text-[9px] font-bold uppercase text-purple-300"
                          >
                            {tag}
                          </span>
                        )
                      )}

                    </div>

                    {/* =================================
                        Links
                    ================================= */}

                    <div className="mt-auto flex items-center gap-5 border-t border-white/5 pt-4">

                      {/* Live View */}

                      <a
                        href={
                          project.liveLink
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        draggable={false}
                        className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-colors hover:text-purple-400 hover:underline"
                      >
                        <ExternalLink
                          size={14}
                        />

                        Live View
                      </a>

                      {/* GitHub */}

                      <a
                        href={
                          project.githubLink
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        draggable={false}
                        className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-colors hover:text-purple-400 hover:underline"
                      >
                        <FaGithub
                          size={14}
                        />

                        Code
                      </a>

                    </div>

                  </div>
                </div>

              </motion.div>
            )
          )}

        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;