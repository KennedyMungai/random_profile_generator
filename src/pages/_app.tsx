import store from '@/app/store'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Provider from 'react-redux/es/components/Provider'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</Provider>
	)
}
