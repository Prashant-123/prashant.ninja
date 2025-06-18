import Image from "next/image";

import PrashantFullPose from "/public/images/prashant-full-pose.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={PrashantFullPose}
              alt="Fullpose of Prashant"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">Curious about me? Here you have it:</Typography>
          <Typography>
            I&apos;m a passionate and experienced Software Development Engineer specializing in
            Android development. With a strong background in developing and maintaining
            high-performance applications, I bring over 5+ years of professional experience
            working with cutting-edge technologies and frameworks.
          </Typography>
          <Typography>
            My journey in the world of Android development began in July 2018 with my college app,
            where I designed and developed an Android app which offers multiple login (Admin,
            Teacher and Student), attendance, events, timetable, notes, etc. This initial experience
            laid the foundation for my passion for building user-friendly and high-performance
            mobile applications. <br />
            Let&apos;s NOT checkout the code, it&apos;s a mess 😅, but also a reason for me being
            here an Android Developer.
          </Typography>
          <Typography>
            When I&apos;m not coding, I enjoy sharing my knowledge through my{" "}
            <Link noCustomization externalLink withUnderline href={EXTERNAL_LINKS.MEDIUM}>
              Medium
            </Link>{" "}
            blog and contributing to the developer community. Feel free to explore my portfolio to
            see more of my work. And, sometimes you can find me in a pool, playing badminton, or
            going on a trip. Oh btw, don&apos;t forget to check out my{" "}
            <Link noCustomization externalLink withUnderline href={EXTERNAL_LINKS.INSTAGRAM}>
              instagram
            </Link>{" "}
            for some cool travel pics.
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">B.Sc. in Computer Science</Typography>
              <Typography component="li">Android Engineer</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Not a noobie Gamer</Typography>
              <Typography component="li">Traveller</Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I&apos;m available for freelance work, so feel free to reach out and say
            hello!
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
