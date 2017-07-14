import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();

    return (
      <html>
        <Head>
          <title>My page</title>
          <link rel="apple-touch-icon" sizes="57x57" href="/static/favicons/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/favicons/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/favicons/apple-touch-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/favicons/apple-touch-icon-144x144.png" />
          <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
          {styleTags}
        </Head>
        <body style={{ margin: 0 }}>
          <div className='root'>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
