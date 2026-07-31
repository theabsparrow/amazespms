import type { Metadata } from "next";
import Careers from "@/component/careers/Careers";

export const metadata: Metadata = {
  title: "Career Opportunities & Jobs | Amaze PMS",
  description:
    "Join Amaze PMS - explore open job positions for senior HVAC engineers, electrical switchgear technicians, command center dispatchers, and facility supervisors.",
};

export default function CareersPage() {
  return <Careers />;
}
