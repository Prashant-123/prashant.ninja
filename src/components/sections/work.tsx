import { PROJECTS } from "@/lib/data";
import ProjectDetails from "@/components/data-display/project-details";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import { Rocket, Code2 } from "lucide-react";

const WorkSection = () => {
  return (
    <Container id="work" className="py-20">
      <div className="mb-16 flex animate-fade-in-up flex-col items-center gap-8">
        <div className="relative">
          {/* Floating icons */}
          <div className="absolute -left-8 -top-4 animate-float rounded-full bg-primary-500 p-2 text-white">
            <Code2 size={16} />
          </div>
          <div
            className="absolute -bottom-4 -right-8 animate-float rounded-full bg-accent-500 p-2 text-white"
            style={{ animationDelay: "1s" }}
          >
            <Rocket size={16} />
          </div>

          <Tag
            label="Work"
            variant="primary"
            className="glass border-2 border-primary-200/50 px-6 py-3 text-lg font-semibold dark:border-primary-800/50"
          />
        </div>

        <div className="max-w-2xl text-center">
          <Typography
            variant="subtitle"
            className="gradient-text mb-4 animate-fade-in-up text-3xl font-bold text-gray-100 dark:text-gray-100 md:text-4xl"
            style={{ animationDelay: "0.2s" }}
          >
            Featured Projects
          </Typography>
          <Typography
            className="animate-fade-in-up text-lg leading-relaxed text-gray-800 dark:text-gray-500"
            style={{ animationDelay: "0.4s" }}
          >
            A showcase of innovative solutions I&apos;ve built using
            cutting-edge technologies. Each project represents a unique
            challenge and creative solution.
          </Typography>
        </div>
      </div>

      <div className="space-y-16">
        {PROJECTS?.map((project, index) => (
          <div key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <ProjectDetails
              {...project}
              layoutType={index % 2 === 0 ? "default" : "reverse"}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WorkSection;
