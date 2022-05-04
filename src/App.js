import { Route, Routes } from 'react-router-dom';
import { DefaultButton } from './components/buttons';
import Header from './components/Header';
import LandingPage from './views/LandingPage';

function App() {
  return (
    <div className="App">
      <div className="skip">
        <DefaultButton as="a" href="#content">
          Skip to Main Content
        </DefaultButton>
      </div>
      <Header />
      <Routes>
        <Route path="" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
