import type { Metadata } from "next";
import ContactUs from "@/component/contact-us/ContactUs";

export const metadata: Metadata = {
  title: "Contact Us & 24/7 Command Dispatch | Amaze PMS",
  description:
    "Get in touch with Amaze PMS. 24/7 Rapid Emergency Dispatch Line (+1 800-AMAZE), headquarters location, direct email dispatch, and instant service quote requests.",
};

export default function ContactUsPage() {
  return <ContactUs />;
}