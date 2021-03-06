import { Route, Routes } from 'react-router-dom';
import { DefaultButton } from './components/buttons';
import Header from './components/Header';
import LandingPage from './views/LandingPage';
import RoomPage from './views/RoomPage';
import roomDetails from './views/roomDetails.json';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AvailabilityPage from './views/AvailabilityPage';
import EventPage from './views/EventPage';
import CountyPage from './views/CountyPage';

function App() {
  return (
    <div className="App">
      <div className="skip">
        <DefaultButton as="a" href="#content">
          Skip to Main Content
        </DefaultButton>
      </div>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route
          path="/journey"
          element={<RoomPage room={roomDetails.journey} />}
        />
        <Route path="/tribe" element={<RoomPage room={roomDetails.tribe} />} />
        <Route
          path="/honeymoon"
          element={<RoomPage room={roomDetails.honeymoon} />}
        />
        <Route path="/availability" element={<AvailabilityPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/county" element={<CountyPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
