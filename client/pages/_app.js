import '../styles/globals.css'
// import 'normalize.css/normalize.css';
import Navbar from '../components/nav/Navbar'
/* Tell Font Awesome to skip adding the CSS automatically since it's being imported above */


function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp