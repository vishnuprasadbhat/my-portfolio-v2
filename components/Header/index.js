import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import PDFViewer from "../PDFViewer";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({
  handleWorkScroll,
  handleAboutScroll,
  handleTechStackScroll,
  handleContactScroll,
  isBlog,
}) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { name, email, showBlog, showResume, isResumePDF, resumeLink } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleContact = () => {
    if (router.asPath === "/resume") {
      window.open(`mailto:${email}`);
    } else {
      handleContactScroll();
    }
  };

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1 className="font-medium p-2 laptop:p-0 link">{name}</h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "sun.svg" : "moon.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
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
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
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
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1 className="font-medium mob:p-2 laptop:p-0">{name}</h1>
        {!isBlog ? (
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
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "sun.svg" : "moon.svg"}`}
                  suppressHydrationWarning
                ></img>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button
              onClick={() => router.push("/")}
              type="link"
              classes="btn-nav pb-0.5"
            >
              Home
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
                type="link"
                classes="first:ml-1 btn-nav pb-0.5"
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
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "sun.svg" : "moon.svg"}`}
                  suppressHydrationWarning
                ></img>
              </Button>
            )}
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
