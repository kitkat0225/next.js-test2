import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

export const siteTitle = 'My Family';
export default function Layout({ children }) {
    return (
        <div className={ styles.container }>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="og:title" content={siteTitle} />
                <title>{ siteTitle }</title>
            </Head>
            <header className={ styles.header }>

            </header>
            <main>
                { children }
            </main>
        </div>
    )
}