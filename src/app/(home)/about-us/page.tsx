import type { Metadata } from "next";
import AboutUs from "@/component/about-us/AboutUs";

export const metadata: Metadata = {
  title: "About Us | Amaze PMS",
  description:
    "Learn about Amaze PMS - over 12 years of property & facility management excellence, corporate leadership team, corporate history timeline, and ISO 9001 & 45001 certifications.",
};

export default function AboutUsPage() {
  return <AboutUs />;
}
