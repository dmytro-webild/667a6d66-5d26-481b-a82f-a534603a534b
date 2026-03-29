"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

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
                { name: "Contact", id: "/contact" },
            ]}
            brandName="WebCraft Co"
            button={{ text: "Contact Us", href: "/contact" }}
            />
        </div>

        <div id="contact-section" data-section="contact-section">
            <ContactSplitForm
            title="Let’s Build Your Website Today"
            description="Get in touch with Luke Wilkins at WebCraft7.co@gmail.com. We’re ready to grow your business."
            inputs={[
                { name: "name", type: "text", placeholder: "Your Name", required: true },
                { name: "email", type: "email", placeholder: "Your Email", required: true }
            ]}
            textarea={{ name: "message", placeholder: "How can we help?", required: true }}
            useInvertedBackground={false}
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterLogoEmphasis
            logoText="WebCraft Co"
            columns={[
                {
                items: [
                    { label: "Home", href: "/" },
                    { label: "Contact", href: "/contact" },
                ],
                },
            ]}
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}