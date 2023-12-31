import logo from './logo.svg';
import './App.css';
import Layout from './layout/Layout';
import Router from './routes/Routes';

function App() {
  return (
    <>
      {(window.location.pathname === "/" || window.location.pathname === "/contact" || window.location.pathname === "/api") && 
        <div className="absolute background-pattern">
          <div className="background-pattern-1">&nbsp;</div>
          <div className="background-pattern-2">&nbsp;</div>
          <div className="background-pattern-3">&nbsp;</div>
        </div>
      }
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
