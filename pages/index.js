import React from "react";
import s from "styled-components";
import Head from "next/head";

const Wrap = s.div`
    color: #505050;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 0 auto;
    padding: 30px;
    max-width: 500px;
`;

const Headline = s.h1`
    font-size: 36px;
    margin: 0 0 10px;
`;

const HeadlineSub = s.h2`
    font-size: 18px;
    margin: 0 0 20px;
    font-weight: normal;

    ${(p) =>
      p.minor &&
      `
      font-size: inherit;
      color: #777;
    `};
`;

const Footer = s.footer`
    padding-top: 19px;
    color: #777;
    border-top: 1px solid #e5e5e5;

    a {
      color: inherit;
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
`;

export default function FrontPage() {
  return (
    <Wrap>
      <Head>
        <title>Krogh Web - Frontendarkitekt</title>
      </Head>
      <main>
        <Headline>Krogh Web</Headline>
        <HeadlineSub>Frontendarkitekt - Vestfold og Telemark</HeadlineSub>
        <HeadlineSub minor>
          React - Next.js - Styled Components - Frontend Performace
        </HeadlineSub>
      </main>
      <Footer>
        <a href="https://twitter.com/hakonkrogh">twitter.com/hakonkrogh</a> -
        Org.nr: 993189359
      </Footer>
    </Wrap>
  );
}
