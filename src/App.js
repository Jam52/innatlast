import { Route, Routes } from 'react-router-dom';
import { DefaultButton } from './components/buttons';
import Header from './components/Header';
import LandingPage from './views/LandingPage';
import RoomPage from './views/RoomPage';
import roomDetails from './components/roomDetails.json';

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
        <Route
          path="/journey"
          element={<RoomPage room={roomDetails.journey} />}
        />
      </Routes>
    </div>
  );
}

export default App;
