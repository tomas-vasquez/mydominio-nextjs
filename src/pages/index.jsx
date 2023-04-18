import Head from "next/head";
import Hero from "../sections/Hero";
import SearchDomain from "../sections/SearchDomain";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <SearchDomain />
    </>
  );
}
