import About from "@/components/about/About";
import CompanyServices from "@/components/companyServices/CompanyServices";
import Header from "@/components/header/Header";
import Landing from "@/components/landing/Landing";

export default function Home() {
  return (
    <main>      
     <Header/>
     <Landing/>
    <CompanyServices/>
    <About/>
     <div className="h-screen">
     </div>
    </main>
  );
}
