import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import { API_KEY, NEXT_PUBLIC_CONTEXT_KEY } from "../keys";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

function Search({ results }) {
  const API_KEY = process.env.API_KEY;
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Explorer Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header dark />

      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());
  //pass to client after Server side rentering
  return {
    props: {
      results: data,
    },
  };
}
