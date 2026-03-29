"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumLarge"
        background="noiseDiagonalGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Home", id: "/" },
              { name: "Services", id: "/services" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="WebCraft Co"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplit
            tag="Contact Us"
            title="Let’s Build Your Website Today"
            description="Get in touch with Luke Wilkins at WebCraft7.co@gmail.com. call or text 706-816-2380. We’re ready to grow your business."
            useInvertedBackground={false}
            background={{ variant: "plain" }}
            mediaPosition="right"
            tagIcon={Mail}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            columns={[
              {
                title: "Navigation",                items: [
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: "Contact", href: "/contact" },
                ],
              },
            ]}
            copyrightText="© 2025 WebCraft Co | Design by Luke Wilkins"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}