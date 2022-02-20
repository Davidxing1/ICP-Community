import type { NextPage } from 'next';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head';
import Home from "./home";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Hello from "../components/Hello";
import Brother from "../components/Brother";

const IndexPage: NextPage = () => {
    const router = useRouter()
    const { t } = useTranslation('footer')
  return (
    <div>
      <Head>
        <title>david</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
          <Home></Home>
          <Brother></Brother>
          {/*<Link*/}
          {/*    href='/'*/}
          {/*    locale={router.locale === 'en' ? 'de' : 'en'}*/}
          {/*>*/}
          {/*    <footer>*/}
          {/*        <p>{t('description')}</p>*/}
          {/*    </footer>*/}
          {/*</Link>*/}
      </header>
    </div>
  )
}

export default IndexPage

// export async function getStaticProps(locale) {
//     // console.log(locale)
//     return {
//         props: {
//             locale,
//         }, // will be passed to the page component as props
//     }
// }

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'footer']),
    },
})