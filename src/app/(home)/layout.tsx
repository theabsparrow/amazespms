import Footer from "@/component/shared/Footer";
import Navbar from "@/component/shared/Navbar";
import SmoothScroll from "@/component/shared/SmoothScroll";

const HomepageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default HomepageLayout;
