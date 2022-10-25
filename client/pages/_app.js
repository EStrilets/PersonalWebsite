import '../styles/globals.css'
// import 'normalize.css/normalize.css';
import Navbar from '../components/nav/Navbar'
import Fab from '../components/fab/Fab'
/* Tell Font Awesome to skip adding the CSS automatically since it's being imported above */


function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Fab />
    </>
  );
}

export default MyApp