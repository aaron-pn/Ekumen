import React from 'react'

import { NextShield } from 'next-shield'

import { useRouter } from 'next/router'
import { wrapper, store } from '../redux/Store'
import { Provider, useSelector } from 'react-redux'

import { ToastContainer } from 'react-toastify'
import '../styles/globals.css'
import { ThemeProvider } from '@mui/material'
import { theme } from 'styles/theme'

import '../styles/colors.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const { isAuthenticated, loading } = useSelector(({ auth }) => auth)

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <NextShield
            isAuth={isAuthenticated}
            isLoading={loading}
            router={router}
            privateRoutes={['/dashboard']}
            publicRoutes={['/', 'singUp']}
            accessRoute='/dashboard'
            loginRoute='/'
            LoadingComponent={<div>Hola</div>}
          >
            <Component {...pageProps} />
          </NextShield>
          <ToastContainer />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default wrapper.withRedux(MyApp)
