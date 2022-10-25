import '../styles/globals.css'
import Navbar from '../components/nav/Navbar'
import Fab from '../components/fab/Fab'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
/* Tell Font Awesome to skip adding the CSS automatically since it's being imported above */


function MyApp({ Component, pageProps }) {
  const router = useRouter();
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
      <Navbar />
      <Component {...pageProps} />
      <Fab />
    </motion.div>
  );
}

export default MyApp