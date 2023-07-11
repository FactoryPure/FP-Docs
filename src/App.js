import logo from './logo.svg';
import './App.css';
import Layout from './layout/Layout';
import Router from './routes/Routes';

function App() {
  return (
    <>
      {(window.location.pathname === "/" || window.location.pathname === "/contact") && 
        <div class="absolute background-pattern">
          <div class="background-pattern-1">&nbsp;</div>
          <div class="background-pattern-2">&nbsp;</div>
          <div class="background-pattern-3">&nbsp;</div>
        </div>
      }
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
