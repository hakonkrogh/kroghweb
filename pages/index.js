import React from 'react';
import s from 'styled-components';

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
    font-size: 20px;
    margin: 0 0 10px;
`;

const Footer = s.footer`
    padding-top: 19px;
    color: #777;
    border-top: 1px solid #e5e5e5;
`;

export default () => <Wrap>
    <main>
        <Headline>Krogh Web</Headline>
        <HeadlineSub>Grensesnittspesialist</HeadlineSub>
    </main>
    <Footer>
        Org.nr: 993189359
    </Footer>
</Wrap>
