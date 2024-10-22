import About from "@/components/about/About";
import CompanyServices from "@/components/companyServices/CompanyServices";
import ContactUs from "@/components/contactUs/ContactUs";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Landing from "@/components/landing/Landing";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Landing />
        <About />
        <CompanyServices />
        <Projects />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
