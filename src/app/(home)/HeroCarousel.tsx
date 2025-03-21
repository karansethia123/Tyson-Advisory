"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface HeroSection {
  id: string
  title: string
  subtitle?: string
  backgroundImage: string
  tags: string[]
}

const heroSections: HeroSection[] = [
  {
    id: "section-1",
    title: "Asset Owner Identification",
    subtitle: "Automation for Vulnerability Management",
    backgroundImage: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9cFk7wHx3mstD4JAzkpPHjyhYqC1geQLbTXnx",
    tags: ["APPLIED AUTOMATION", "CASE STUDY", "FEATURED"],
  },
  {
    id: "section-2",
    title: "Digital Transformation",
    subtitle: "Strategies for Enterprise Growth",
    backgroundImage: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9xqyoMxALTuWjGx1pbi625nRrAha3EzMPZKDs",
    tags: ["INNOVATION", "STRATEGY", "DIGITAL"],
  },
  {
    id: "section-3",
    title: "Cloud Security Solutions",
    subtitle: "Protecting Your Business Assets",
    backgroundImage: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9Zlq2qm6QPiWMqQjw4ktaL1lK3z2EXHm6scGg",
    tags: ["SECURITY", "CLOUD", "PROTECTION"],
  },
]

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const goToSection = (index: number) => {
    if (index < 0) {
      setActiveIndex(heroSections.length - 1)
    } else if (index >= heroSections.length) {
      setActiveIndex(0)
    } else {
      setActiveIndex(index)
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const currentX = e.clientX
    const diff = currentX - startX
    setTranslateX(diff)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    const diff = currentX - startX
    setTranslateX(diff)
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    // If dragged more than 100px, change slide
    if (Math.abs(translateX) > 100) {
      if (translateX > 0) {
        goToSection(activeIndex - 1)
      } else {
        goToSection(activeIndex + 1)
      }
    }

    setTranslateX(0)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToSection(activeIndex - 1)
      } else if (e.key === "ArrowRight") {
        goToSection(activeIndex + 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeIndex])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        ref={carouselRef}
        className={cn(
          "flex h-full w-full transition-transform duration-500 ease-in-out",
          isDragging ? "transition-none" : "",
        )}
        style={{
          transform: `translateX(calc(-${activeIndex * 100}% + ${translateX}px))`,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
      >
        {heroSections.map((section) => (
          <div
            key={section.id}
            className="relative flex h-full w-full shrink-0 flex-col justify-center"
            style={{
              backgroundImage: `url(${section.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="mb-6 flex items-center gap-2">
                {section.tags.map((tag, i) => (
                  <div key={i} className=" flex items-center gap-2">
                    <span className="text-xs sm:text-sm xl:text-base font-medium font-content tracking-wider text-green-400">
                      {tag}
                    </span>
                    {i !== 2 && <p className="font-header font-bold">|</p> }
                  </div>
                ))}
              </div>
              <h1 className="font-header mb-4 max-w-4xl text-5xl font-bold font-stretch-200% text-white sm:text-6xl md:text-7xl">
                {section.title}
              </h1>
              {section.subtitle && (
                <h2 className="font-header max-w-3xl text-2xl font-medium text-white sm:text-4xl md:text-3xl">
                  {section.subtitle}
                </h2>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <Button
        size="icon"
        className="absolute left-4 bottom-5 md:top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20"
        onClick={() => goToSection(activeIndex - 1)}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        size="icon"
        className="absolute right-4 bottom-5 md:top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20"
        onClick={() => goToSection(activeIndex + 1)}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Pagination dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {heroSections.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              activeIndex === index ? "w-8 bg-white" : "bg-white/50",
            )}
            onClick={() => goToSection(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

