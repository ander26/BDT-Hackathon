import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>BDT Hackathon Nuwe</title>
        <meta
          name="description"
          content="Desarrollo realizado para el Hackathon impulsado por Nuwe"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>BDT Hackathon</main>
    </div>
  );
}
