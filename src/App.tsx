/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';
import { License } from './pages/License';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="legal" element={<Legal />} />
          <Route path="license" element={<License />} />
          {/* Placeholder routes for links in header */}
          <Route path="plan" element={<Home />} />
          <Route path="forecast" element={<Home />} />
          <Route path="what-if" element={<Home />} />
          <Route path="predictor" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

