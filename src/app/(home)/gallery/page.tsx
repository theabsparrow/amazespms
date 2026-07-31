import type { Metadata } from "next";
import Gallery from "@/component/gallery/Gallery";

export const metadata: Metadata = {
  title: "Operations Gallery & Portfolio | Amaze PMS",
  description:
    "Explore on-site technical operations, HVAC chiller overhauls, high-voltage switchgear testing, rope access high-rise facade cleaning, and 24/7 command center pictures.",
};

export default function GalleryPage() {
  return <Gallery />;
}