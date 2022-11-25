import '../styles/globals.css'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Layout from '../components/layout/Layout'
import Footer from '../components/footer/Footer'
import Fab from '../components/fab/Fab'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (Component.getLayout) {
    return Component.getLayout(
      <motion.div
        key={router.route}
        initial='pageInitial'
        animate='pageAnimate'
        exit='pageExit'
        transition={{ duration: 0.4 }}
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
          <Component {...pageProps} />
          <Footer />
          <Fab />
      </motion.div>
    );
  }
  return (
    <motion.div
      key={router.route}
      initial='pageInitial'
      animate='pageAnimate'
      exit='pageExit'
      transition={{ duration: 0.4 }}
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </motion.div>
  );
}

export default MyApp