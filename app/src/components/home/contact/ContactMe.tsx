/* 
    This is the Contact Me section of the home page.
    It contains a card with a form to send an email to the user.    
    It also contains a list of social media links.
*/

import React from "react";
import Section from "@/components/section/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaGithub, FaHeart, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import OutlineNode from "../editor/outline/OutlineNode";

const socialLinks = [
  {
    name: "Email",
    icon: <MdEmail className="w-6 h-6" />,
    href: "mailto:utkarshpriyadarshi5026@gmail.com",
    color: "hover:text-ctp-blue",
    outlineIcon: <MdEmail className="w-3 h-3 text-ctp-blue" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="w-6 h-6" />,
    href: "https://github.com/utkarsh5026",
    color: "hover:text-ctp-mauve",
    outlineIcon: <FaGithub className="w-3 h-3 text-ctp-mauve" />,
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="w-6 h-6" />,
    href: "https://www.linkedin.com/in/utkarsh-priyadarshi-8b5a731b9/",
    color: "hover:text-ctp-sapphire",
    outlineIcon: <FaLinkedin className="w-3 h-3 text-ctp-sapphire" />,
  },
  {
    name: "Twitter",
    icon: <FaTwitter className="w-6 h-6" />,
    href: "https://x.com/UtkarshPriyad10",
    color: "hover:text-ctp-sky",
    outlineIcon: <FaTwitter className="w-3 h-3 text-ctp-sky" />,
  },
];

const ContactMe: React.FC = () => {
  return (
    <Section id="contact" label="Contact" glowAccent="mauve" scanlines={true}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
        <Card className="border-2 border-ctp-surface0 bg-ctp-base/60 backdrop-blur-sm hover:border-ctp-mauve/20 transition-all duration-500">
          <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-ctp-mauve">
                Let's Work Together!
              </h3>
              <p className="text-sm sm:text-base md:text-lg sm:my-4 md:my-6 lg:my-8 text-ctp-text max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach out
                through any of the following channels. If you have any
                questions, email me at{" "}
                <span className="border-b-2 border-ctp-pink hover:border-ctp-pink/50 transition-all duration-300 break-all">
                  utkarshpriyadarshi5026@gmail.com
                </span>
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 md:mt-8">
                {socialLinks.map((link) => (
                  <OutlineNode
                    key={link.name}
                    id={link.name}
                    label={link.name}
                    level={1}
                    parentId="contact"
                    icon={link.outlineIcon}
                  >
                    <Button
                      variant="outline"
                      size="default"
                      className={`w-full sm:w-[calc(50%-0.5rem)] md:w-auto group relative overflow-hidden transition-all duration-300 ${link.color}`}
                      onClick={() => window.open(link.href, "_blank")}
                    >
                      <div className="relative flex items-center gap-2">
                        {link.icon}
                        <span>{link.name}</span>
                      </div>
                      <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-ctp-mauve/5 to-ctp-mauve/10 transition-transform duration-300 group-hover:translate-y-0" />
                    </Button>
                  </OutlineNode>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="relative"
              >
                <div className="p-6 sm:p-8 md:p-10 rounded-xl backdrop-blur-sm relative overflow-hidden">
                  {/* Background with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-ctp-crust via-ctp-mantle to-ctp-crust opacity-90 z-0"></div>

                  {/* Border glow */}
                  <div
                    className="absolute inset-0 rounded-xl z-0 opacity-20"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, var(--ctp-lavender), transparent)",
                      backgroundSize: "200% 100%",
                      animation: "shimmer 3s infinite linear",
                    }}
                  ></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-full bg-gradient-to-br from-ctp-lavender/30 to-ctp-mauve/20 shadow-inner shadow-ctp-lavender/10">
                        <div className="relative">
                          {/* Animated ping effect */}
                          <div className="absolute inset-0 rounded-full bg-ctp-lavender/30 animate-ping opacity-75"></div>
                          <MdLocationPin className="w-6 h-6 text-ctp-lavender relative z-10" />
                        </div>
                      </div>
                      <h4 className="text-xl sm:text-2xl md:text-2xl font-semibold bg-gradient-to-r from-ctp-lavender to-ctp-mauve text-transparent bg-clip-text bg-size-200 animate-gradient-x">
                        Available for Opportunities
                      </h4>
                    </div>

                    <p className="text-sm sm:text-base md:text-lg text-ctp-text ml-0 md:ml-12 leading-relaxed">
                      Currently open to{" "}
                      <span className="font-medium relative inline-block group/span">
                        <span className="text-ctp-green">Web Development</span>
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-ctp-green group-hover/span:w-full transition-all duration-300"></span>
                      </span>{" "}
                      and{" "}
                      <span className="font-medium relative inline-block group/span">
                        <span className="text-ctp-peach">Automation</span>
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-ctp-peach group-hover/span:w-full transition-all duration-300"></span>
                      </span>{" "}
                      opportunities. Let's create something amazing together!
                    </p>

                    <div className="flex items-center justify-center mt-6 text-ctp-pink">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-ctp-pink/20 animate-ping opacity-50"></div>
                        <FaHeart className="w-5 h-5 mr-2 relative z-10 animate-pulse" />
                      </div>
                      <span className="text-sm opacity-80">
                        Looking forward to collaborating with you
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default ContactMe;
