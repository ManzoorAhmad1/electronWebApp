import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import Inbox from './pages/Inbox';
import Sent from './pages/Sent';
import Drafts from './pages/Drafts';
import Layout from './components/sidebar/layout';
import Templates from './pages/Templates';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inbox />} />
          <Route path="sent" element={<Sent />} />
          <Route path="drafts" element={<Drafts />} />
          <Route path="templates" element={<Templates />} />
        </Route>
      </Routes>
    </Router>
  );
}
