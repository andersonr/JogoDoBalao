import 'fontsource-roboto';
import '../styles/globals.css';
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";

function MyApp({ Component, pageProps }) {
  return  (
    <ScopedCssBaseline>
       <Component {...pageProps} />
    </ScopedCssBaseline> );
}

export default MyApp
