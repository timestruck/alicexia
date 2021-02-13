import Head from 'next/head';

export default function Header({ title = 'Alice Xia' }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/sunflower_logo.png" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css"
        rel="stylesheet"
      />
      <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
    </Head>
  );
}
