"use client";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import PDFViewer from "../PDFViewer";
import {
  FaSun,
  FaMoon,
  FaBars,
  FaXmark,
  FaPowerOff,
  FaArrowRightToBracket,
} from "react-icons/fa6";
import { usePathname, useRouter } from "next/navigation";
import HeaderSkeleton from "./skeleton";
import Link from "next/link";
import { appSignOut } from "@/app/actions";

const Header = ({
  handleWorkScroll,
  handleAboutScroll,
  handleTechStackScroll,
  handleContactScroll,
  isBlog,
  isEdit,
  data,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { name, email, showBlog, showResume, isResumePDF, resumeLink } =
    data ?? {};

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <HeaderSkeleton />;
  }

  const handleContact = () => {
    if (pathname === "/resume") {
      window.open(`mailto:${email}`);
    } else {
      handleContactScroll();
    }
  };

  return (
    <>
      <Popover
        className={`block tablet:hidden mt-5 sticky top-0 z-10 ${
          theme === "dark" ? "bg-dark-bg" : "bg-white"
        } bg-opacity-90`}
      >
        {({ open, close }) => (
          <>
            <div className="flex items-center justify-between laptop:p-0">
              <h1 className="text-lg mt-2 ml-1 font-medium laptop:p-0">
                {name}
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    title={theme === "dark" ? "Light" : "Dark"}
                    classes="mob:text-xl mob:py-2"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    {theme === "dark" ? (
                      <FaSun className="text-accent" />
                    ) : (
                      <FaMoon className="text-accent" />
                    )}
                  </Button>
                )}

                {!isEdit ? (
                  <PopoverButton className="mob:text-xl mob:p-2">
                    {open ? <FaXmark /> : <FaBars />}
                  </PopoverButton>
                ) : (
                  <form action={appSignOut}>
                    <Button
                      isForm
                      classes="mob:text-xl mob:py-2"
                      title="Logout"
                    >
                      <FaPowerOff className="text-red-400" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
            <PopoverPanel
              className={`absolute right-0 z-10 w-full p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              <div className="flex flex-col gap-1" onClick={close}>
                <Button onClick={handleWorkScroll}>Work</Button>
                <Button onClick={handleTechStackScroll}>Tech Stack</Button>
                <Button onClick={handleAboutScroll}>About</Button>
                {showBlog && (
                  <Button onClick={() => router.push("/blog")}>Blog</Button>
                )}
                {showResume && (
                  <Button
                    onClick={() =>
                      isResumePDF ? setIsOpen(true) : router.push("/resume")
                    }
                    classes="first:ml-1"
                  >
                    Resume
                  </Button>
                )}
                <Button onClick={handleContact}>Contact</Button>
                <Link href="/login">
                  <Button classes="w-full">
                    Login to Edit
                    {/* <FaArrowRightToBracket className="text-accent ml-auto" /> */}
                  </Button>
                </Link>
              </div>
            </PopoverPanel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky top-0 z-10 tablet:flex ${
          theme === "dark" ? "bg-dark-bg" : "bg-white"
        } bg-opacity-90`}
      >
        <h1 className="font-medium mob:p-2 laptop:p-0">{name}</h1>
        {!isEdit ? (
          <div className="flex">
            <Button
              onClick={handleWorkScroll}
              type="link"
              classes="btn-nav pb-0.5"
            >
              Work
            </Button>
            <Button
              onClick={handleTechStackScroll}
              type="link"
              classes="btn-nav pb-0.5"
            >
              Tech Stack
            </Button>
            <Button
              onClick={handleAboutScroll}
              type="link"
              classes="btn-nav pb-0.5"
            >
              About
            </Button>
            {showBlog && (
              <Button
                onClick={() => router.push("/blog")}
                type="link"
                classes="btn-nav pb-0.5"
              >
                Blog
              </Button>
            )}
            {showResume && (
              <Button
                onClick={() =>
                  isResumePDF ? setIsOpen(true) : router.push("/resume")
                }
                classes="first:ml-1 btn-nav pb-0.5"
                type="link"
              >
                Resume
              </Button>
            )}
            <Button
              onClick={handleContact}
              type="link"
              classes="btn-nav pb-0.5"
            >
              Contact
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                title={theme === "dark" ? "Light" : "Dark"}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <FaSun className="text-accent" />
                ) : (
                  <FaMoon className="text-accent" />
                )}
              </Button>
            )}
            <Link href="/login">
              <Button title="Login" classes="mob:text-2xl mob:py-2 mt-2">
                <FaArrowRightToBracket className="text-green-400" />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex">
            {mounted && theme && data.darkMode && (
              <Button
                title={theme === "dark" ? "Light" : "Dark"}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <FaSun className="text-accent" />
                ) : (
                  <FaMoon className="text-accent" />
                )}
              </Button>
            )}
            <form action={appSignOut}>
              <Button title="Logout" classes="p-4" isForm>
                <FaPowerOff className="text-red-400" />
              </Button>
            </form>
          </div>
        )}
      </div>
      {isResumePDF && (
        <PDFViewer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          fileUrl={resumeLink}
        />
      )}
    </>
  );
};

export default Header;
