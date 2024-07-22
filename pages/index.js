import { useContext, useEffect, useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import TechStack from "../components/TechStack";
import { FaLocationDot } from "react-icons/fa6";
import { MdWavingHand } from "react-icons/md";

// Local Data
import localData from "../data/portfolio.json";
import Image from "next/image";
import GlobalContext from "../context/globalContext";
import { getPortfolioData } from "../data/get-portfolio";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";

export default function Home({ data }) {
  const { update } = useContext(GlobalContext);

  useEffect(() => {
    update({ data });
  }, []);

  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const techStackRef = useRef();
  const contactRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const headerOffset = 20;

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop - headerOffset,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleTechStackScroll = () => {
    window.scrollTo({
      top: techStackRef.current.offsetTop - headerOffset,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop - headerOffset,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleContactScroll = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop - headerOffset,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  if (!data) {
    return <>loading...</>;
  }

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}'s - Portfolio</title>
        <meta name="description" content="Vishnu Prasad Bhat - Portfolio" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="relative container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleTechStackScroll={handleTechStackScroll}
          handleContactScroll={handleContactScroll}
        />
        <div className="laptop:mt-20 laptop:mb-20 mt-10">
          <div className="mt-5">
            <div
              className="flex items-center text-3xl tablet:text-5xl laptop:text-5xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
              ref={textOne}
            >
              <h1 ref={textOne} className="mr-3">
                {data.headerTaglineOne}
              </h1>
              <MdWavingHand className="mb-2 wave" />
            </div>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-5xl laptop:text-5xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-accent text-3xl tablet:text-5xl laptop:text-5xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <div
              className="flex items-center text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              ref={textFour}
            >
              <FaLocationDot className="mr-2 mb-1" />
              <h1>{data.headerTaglineFour}</h1>
            </div>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Work.</h1>
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                url={project.url}
                description={project.description}
                onClick={() => project.url && window.open(project.url)}
              />
            ))}
          </div>
        </div>

        {data.showServices && (
          <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
            <h1 className="tablet:mt-10 text-2xl text-bold">Services.</h1>
            <div className="mt-5 tablet:mt-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
              {data.services.map((service, index) => (
                <ServiceCard
                  key={index}
                  name={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        )}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={techStackRef}>
          <h1 className="text-2xl text-bold">Tech Stack.</h1>
          <div className="mt-5 tablet:mt-10 grid grid-cols-2 laptop:grid-cols-6 gap-6">
            {data?.techStacks?.map((techStack) => (
              <TechStack
                key={techStack.id}
                name={techStack.title}
                icon={techStack.icon}
              />
            ))}
          </div>
        </div>
        {/* This button should not go into production */}
        {/* {process.env.NODE_ENV === "development" && ( */}
        <div className="fixed bottom-5 right-5">
          <Link href="/edit">
            <Button type="primary">Edit Data</Button>
          </Link>
        </div>
        {/* )} */}

        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:mt-10 text-2xl text-bold">About.</h1>
          <p className="mob:text-justify tablet:mt-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>
        <div ref={contactRef}>
          <Footer />
        </div>
        <div className="absolute right-2 bottom-24 tablet:right-2 tablet:bottom-5  laptop:-right-5 laptop:bottom-0">
          <Image
            src="/images/contact.png"
            width={368}
            height={592}
            alt="contact"
            quality={100}
            loading="lazy"
            className="mob:w-28 tablet:w-52 laptop:w-96"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await getPortfolioData();
  return { props: { data } };
}
