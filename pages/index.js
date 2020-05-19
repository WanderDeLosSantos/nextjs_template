import Head from 'next/head'
import { Main } from 'components'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
       
      </Head>

      <main>
        <h1>Welcome</h1>
        <Main />
      </main>
    </div>
  )
}
