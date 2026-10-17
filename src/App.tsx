/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './components/HomeScreen';
import { CatalogScreen } from './components/CatalogScreen';
import { BagScreen } from './components/BagScreen';
import { SavedScreen } from './components/SavedScreen';
import { PDP } from './components/PDP';
import { FitPredictorModal } from './components/FitPredictorModal';
import { QuickAddDrawer } from './components/QuickAddDrawer';
import { FilterDrawer } from './components/FilterDrawer';
import { MenuDrawer } from './components/MenuDrawer';
import { CheckoutSuccessModal } from './components/CheckoutSuccessModal';
import { Toast } from './components/Toast';

const MainApp: React.FC = () => {
  const { currentScreen } = useApp();

  return (
    <div className="min-h-screen w-full bg-[#f4f1ea] flex justify-center selection:bg-[#d8e7d0]">
      {/* Centered Luxury Mobile Shell */}
      <div className="w-full max-w-md min-h-screen bg-[#fcf9f3] text-[#1c1c18] relative shadow-[0_0_50px_rgba(0,0,0,0.08)] flex flex-col">
        {/* Sticky Header */}
        <Header />

        {/* Main Viewport Content */}
        <main className="flex-1 pt-16 pb-20 overflow-x-hidden">
          {currentScreen === 'home' && <HomeScreen />}
          {currentScreen === 'catalog' && <CatalogScreen />}
          {currentScreen === 'saved' && <SavedScreen />}
          {currentScreen === 'bag' && <BagScreen />}
          {currentScreen === 'product_detail' && <PDP />}
        </main>

        {/* Bottom Navigation Bar (Shown on Home, Catalog, Saved, Bag) */}
        {currentScreen !== 'product_detail' && <BottomNav />}

        {/* Interactive Modals & Drawers */}
        <FitPredictorModal />
        <QuickAddDrawer />
        <FilterDrawer />
        <MenuDrawer />
        <CheckoutSuccessModal />
        <Toast />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}
