/* 
    This is the Contact Me section of the home page.
    It contains a card with a form to send an email to the user.    
    It also contains a list of social media links.
*/

import React from "react";
import Section from "@/components/base/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactMe: React.FC = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: <MdEmail className="w-6 h-6" />,
      href: "mailto:utkarshpriyadarshi5026@gmail.com",
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="w-6 h-6" />,
      href: "https://github.com/utkarsh5026",
      color: "hover:text-purple-500",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/utkarsh-priyadarshi-8b5a731b9/",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-6 h-6" />,
      href: "https://x.com/UtkarshPriyad10",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <Section id="contact" label="Contact">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
        <Card className="border-2 border-muted bg-background/60 backdrop-blur-sm hover:border-primary/20 transition-all duration-500">
          <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                Let's Work Together!
              </h3>
              <p className="text-sm sm:text-base md:text-lg sm:my-4 md:my-6 lg:my-8 text-muted-foreground max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach out
                through any of the following channels. If you have any
                questions, email me at{" "}
                <span className="border-b-2 border-primary hover:border-primary/50 transition-all duration-300 break-all">
                  utkarshpriyadarshi5026@gmail.com
                </span>
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 md:mt-8">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="outline"
                    size="default"
                    className={`w-full sm:w-[calc(50%-0.5rem)] md:w-auto group relative overflow-hidden transition-all duration-300 ${link.color}`}
                    onClick={() => window.open(link.href, "_blank")}
                  >
                    <div className="relative flex items-center gap-2">
                      {link.icon}
                      <span>{link.name}</span>
                    </div>
                    <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-primary/5 to-primary/10 transition-transform duration-300 group-hover:translate-y-0" />
                  </Button>
                ))}
              </div>

              <div className="mt-6 sm:mt-12 md:mt-16 p-4 sm:p-6 md:p-8 bg-muted/30 rounded-lg">
                <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2 md:mb-4">
                  Available for Opportunities
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  Currently open to Web Development and Automation
                  opportunities. Let's create something amazing together!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default ContactMe;
