import Hero from "../sections/Hero";
import Nav from "../sections/Nav";
import Footer from "../sections/Footer";
import SearchDomain from "./domain/SearchDomain";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero></Hero>
      <SearchDomain />
      <Footer />
    </>
  );
}
