import Image from "next/image";
import { ExternalLink, Github, Star } from "lucide-react";

import { ProjectDetails as ProjectDetailsType } from "@/lib/types";
import { mergeClasses } from "@/lib/utils";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import Tag from "@/components/data-display/tag";
import Card from "@/components/layout/card";

type ProjectDetailsProps = ProjectDetailsType & {
  layoutType: "default" | "reverse";
};

const ProjectDetails = ({
  name,
  description,
  technologies,
  url,
  previewImage,
  layoutType = "default",
}: ProjectDetailsProps) => {
  return (
    <Card className="group mx-auto flex w-full max-w-6xl animate-fade-in-up flex-col overflow-hidden transition-all duration-500 hover:border-primary-400/30 md:flex-row">
      {/* Image */}
      <div
        className={mergeClasses(
          "dark:from-primary-950/30 dark:to-accent-950/30 relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50/50 to-accent-50/50 p-8 max-md:rounded-t-xl md:w-1/2 lg:p-12",
          layoutType === "default"
            ? "md:rounded-l-xl"
            : "md:order-last md:rounded-r-xl"
        )}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400/10 via-transparent to-accent-400/10"></div>
        <div className="absolute right-4 top-4 h-20 w-20 animate-pulse-slow rounded-full bg-primary-400/10 blur-xl"></div>
        <div
          className="absolute bottom-4 left-4 h-16 w-16 animate-pulse-slow rounded-full bg-accent-400/10 blur-xl"
          style={{ animationDelay: "1s" }}
        ></div>

        <Link
          noCustomization
          href={url}
          externalLink
          className="group/image relative z-10"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover/image:shadow-glow-lg">
            {/* Gradient overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/image:opacity-100"></div>

            <Image
              src={previewImage}
              alt={`${name} preview`}
              className="rounded-2xl transition-all duration-700 group-hover/image:scale-110"
              style={{ objectFit: "cover" }}
            />

            {/* Hover overlay with icon */}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-all duration-500 group-hover/image:opacity-100">
              <div className="scale-0 transform rounded-full bg-white/20 p-4 backdrop-blur-sm transition-transform duration-500 group-hover/image:scale-100">
                <ExternalLink className="text-white" size={24} />
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Content */}
      <div
        className={mergeClasses(
          "relative flex flex-col gap-6 p-8 md:w-1/2 lg:p-12",
          layoutType === "default" ? "" : "md:order-first"
        )}
      >
        {/* Background decoration */}
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-bl from-accent-400/5 to-transparent blur-2xl"></div>

        <div className="relative z-10">
          <div className="mb-4 flex items-center gap-3">
            <Typography
              variant="subtitle"
              className="gradient-text text-2xl font-bold text-gray-900 dark:text-gray-900"
            >
              {name}
            </Typography>
            <div className="flex items-center gap-1 rounded-full bg-primary-100 px-2 py-1 dark:bg-primary-900/30">
              <Star size={14} className="fill-primary-600 text-primary-600" />
              <span className="text-xs font-medium text-primary-700 dark:text-primary-300">
                Featured
              </span>
            </div>
          </div>

          <Typography className="mb-6 leading-relaxed text-gray-700 dark:text-gray-700">
            {description}
          </Typography>

          <div className="mb-6 flex flex-wrap gap-2">
            {technologies?.map((technology, index) => (
              <Tag
                key={index}
                label={technology}
                className="transition-transform duration-200 hover:scale-105 hover:shadow-glow-sm"
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={url}
              noCustomization
              className="group/button inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:from-primary-600 hover:to-accent-600 hover:shadow-glow-md"
              externalLink
            >
              <ExternalLink
                size={18}
                className="transition-transform duration-300 group-hover/button:rotate-12"
              />
              <span>View Project</span>
            </Link>

            {/* GitHub link (you can conditionally show this based on project data) */}
            {name !== "mySandesh - Poster Maker" && (
              <Link
                href={url.replace(
                  "https://",
                  "https://github.com/Prashant-123/"
                )}
                noCustomization
                className="glass group/github inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 font-medium transition-all duration-300 hover:scale-105 hover:bg-white/10"
                externalLink
              >
                <Github
                  size={18}
                  className="transition-transform duration-300 group-hover/github:rotate-12"
                />
                <span className="text-sm text-gray-700 dark:text-gray-700">
                  Code
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectDetails;
