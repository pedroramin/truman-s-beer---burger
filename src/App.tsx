/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-dark">
      <Hero />
      <About />
      <Experience />
      <Reviews />
      <Location />
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
