import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import store from '../app/store';
import { appWithTranslation } from 'next-i18next';
import { GraphQLClient, ClientContext } from 'graphql-hooks'

const client = new GraphQLClient({
    // url: 'https://mintbase-testnet.hasura.app/v1/graphql'
    url: 'https://api.subquery.network/sq/m00nbeans/marketplace-v3'
})


function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ClientContext.Provider value={client}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ClientContext.Provider>
  )
}

// export default MyApp
export default appWithTranslation(MyApp);