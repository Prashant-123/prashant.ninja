import Image from "next/image";
import { MapPin, Sparkles, Code, Coffee } from "lucide-react";

import PrashantHeadshot from "/public/images/prashant-headshot.jpg";
import SocialIcons from "@/components/data-display/social-icons";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const HeroSection = () => {
  return (
    <Container
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-10 top-20 h-20 w-20 animate-float rounded-full bg-primary-400/20"></div>
        <div
          className="absolute right-20 top-40 h-16 w-16 animate-float rounded-full bg-accent-400/20"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 h-12 w-12 animate-float rounded-full bg-primary-300/20"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-40 h-24 w-24 animate-float rounded-full bg-accent-300/20"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="flex w-full flex-col gap-16 md:flex-row">
        {/* Image */}
        <div className="animate-fade-in-right flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="group relative">
            {/* Glowing ring effect */}
            <div className="absolute -inset-4 animate-pulse-slow rounded-full bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 opacity-30 blur-xl group-hover:opacity-50"></div>

            <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
              <Image
                src={PrashantHeadshot}
                alt="Headshot of Prashant"
                className="absolute z-10 h-[280px] w-[240px] rounded-2xl border-4 border-white/20 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-glow-lg max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
                style={{ objectFit: "cover" }}
              />
              <div className="border-gradient-to-r absolute h-[280px] w-[280px] animate-pulse-slow rounded-2xl border-4 bg-gradient-to-br from-primary-100/30 from-primary-400 to-accent-100/30 to-accent-400 backdrop-blur-sm max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>

              {/* Floating icons */}
              <div className="absolute -right-4 -top-4 animate-float rounded-full bg-primary-500 p-3 text-white shadow-lg">
                <Code size={20} />
              </div>
              <div
                className="absolute -bottom-4 -left-4 animate-float rounded-full bg-accent-500 p-3 text-white shadow-lg"
                style={{ animationDelay: "1s" }}
              >
                <Coffee size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="animate-fade-in-left flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-4">
            {/* Greeting with sparkle */}
            <div className="flex animate-fade-in-down items-center gap-2 text-primary-600 dark:text-primary-400">
              <Sparkles size={20} className="animate-pulse" />
              <span className="text-sm font-medium uppercase tracking-wider">
                Welcome to my portfolio
              </span>
            </div>

            <Typography variant="h1" className="relative">
              <span className="block">Hi, I&apos;m</span>
              <span className="gradient-text block animate-scale-in text-6xl font-bold md:text-7xl">
                Prashant
              </span>
              <span className="ml-4 inline-block animate-waving-hand text-4xl md:text-5xl">
                👋
              </span>
            </Typography>

            <Typography
              className="animate-fade-in-up text-lg leading-relaxed md:text-xl"
              style={{ animationDelay: "0.3s" }}
            >
              A passionate and experienced{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                Software Developer
              </span>{" "}
              specializing in
              <span className="font-semibold text-accent-600 dark:text-accent-400">
                {" "}
                Android
              </span>{" "}
              and
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                {" "}
                Backend
              </span>{" "}
              development. With a strong background in developing and
              maintaining high-performance applications, I bring over
              <span className="text-gradient-to-r from-primary-500 to-accent-500 text-2xl font-bold">
                {" "}
                5+ years
              </span>{" "}
              of professional experience.
            </Typography>
          </div>

          <div
            className="flex animate-fade-in-up flex-col gap-4"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="hover-glow glass group flex items-center gap-3 rounded-lg p-3 transition-all duration-300">
              <MapPin
                className="stroke-primary-600 group-hover:animate-pulse dark:stroke-primary-400"
                size={20}
              />
              <Typography className="font-medium">Bangalore, India</Typography>
            </div>

            <div className="hover-glow glass group flex items-center gap-3 rounded-lg p-3 transition-all duration-300">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 shadow-glow-sm"></span>
                </span>
              </div>
              <Typography className="font-medium">
                Available for new projects
              </Typography>
            </div>
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            <SocialIcons />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
