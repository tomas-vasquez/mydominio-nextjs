import SearchDomain from "../sections/domain/SearchDomain";
import Hero from "../sections/Hero";
import Nav from "../sections/Nav";
import Footer from "../sections/Footer";

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
