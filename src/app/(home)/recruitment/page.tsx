import type { Metadata } from "next";
import Recruitment from "@/component/recruitment/Recruitment";

export const metadata: Metadata = {
  title: "Technical Manpower Recruitment & Staffing | Amaze PMS",
  description:
    "Source, trade-test, and deploy certified MEP engineers, HVAC technicians, electricians, plumbers, and soft cleaning supervisors with Amaze PMS Manpower Recruitment.",
};

export default function RecruitmentPage() {
  return <Recruitment />;
}