import About from "@/components/about/About";
import CompanyServices from "@/components/companyServices/CompanyServices";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Landing from "@/components/landing/Landing";

export default function Home() {
  return (
    <main>
      <Header />
      <Landing />
      <About />
      <CompanyServices />
      <Footer />
    </main>
  );
}
