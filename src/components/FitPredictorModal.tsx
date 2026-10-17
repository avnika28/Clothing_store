import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const FitPredictorModal: React.FC = () => {
  const { fitPredictorOpen, closeFitPredictor, showToast } = useApp();

  const [activeTab, setActiveTab] = useState<'predictor' | 'measurements'>('predictor');
  const [preferredDrape, setPreferredDrape] = useState<'fitted' | 'editorial' | 'oversized'>('editorial');
  const [unit, setUnit] = useState<'in' | 'cm'>('in');

  // Measurements user inputs
  const [heightFeet, setHeightFeet] = useState<number>(5);
  const [heightInches, setHeightInches] = useState<number>(8);
  const [weightLbs, setWeightLbs] = useState<number>(135);

  if (!fitPredictorOpen) return null;

  // Calculate recommended size dynamically based on drape
  const recommendedSize =
    preferredDrape === 'fitted' ? 'S' : preferredDrape === 'oversized' ? 'L' : 'M';
  const matchRate = preferredDrape === 'editorial' ? '94%' : '91%';
  const keepRate = preferredDrape === 'editorial' ? '89%' : '86%';

  const totalInches = heightFeet * 12 + heightInches;
  const heightCm = Math.round(totalInches * 2.54);
  const weightKg = Math.round(weightLbs * 0.453592);

  const measurementsData = {
    in: [
      { size: 'XS', chest: '42.0"', shoulder: '19.5"', length: '29.0"', sleeve: '21.0"' },
      { size: 'S', chest: '44.0"', shoulder: '20.0"', length: '29.5"', sleeve: '21.5"' },
      { size: 'M', chest: '46.0"', shoulder: '20.8"', length: '30.0"', sleeve: '22.0"' },
      { size: 'L', chest: '48.5"', shoulder: '21.5"', length: '30.5"', sleeve: '22.5"' },
      { size: 'XL', chest: '51.0"', shoulder: '22.2"', length: '31.0"', sleeve: '23.0"' },
    ],
    cm: [
      { size: 'XS', chest: '106 cm', shoulder: '49.5 cm', length: '73.5 cm', sleeve: '53.5 cm' },
      { size: 'S', chest: '112 cm', shoulder: '51.0 cm', length: '75.0 cm', sleeve: '54.5 cm' },
      { size: 'M', chest: '117 cm', shoulder: '52.8 cm', length: '76.2 cm', sleeve: '56.0 cm' },
      { size: 'L', chest: '123 cm', shoulder: '54.6 cm', length: '77.5 cm', sleeve: '57.0 cm' },
      { size: 'XL', chest: '129.5 cm', shoulder: '56.4 cm', length: '78.7 cm', sleeve: '58.5 cm' },
    ],
  };

  const handleApplySize = (size: string) => {
    closeFitPredictor();
    showToast(`Size ${size} applied from Smart Fit Predictor`);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2.5px] flex items-end justify-center transition-all duration-300"
      onClick={closeFitPredictor}
    >
      <div
        className="w-full max-w-lg max-h-[88vh] bg-white rounded-t-3xl shadow-2xl flex flex-col transform transition-transform duration-300 overflow-hidden border-t border-[#e5e2dc]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Drag Indicator & Modal Header */}
        <div className="pt-3 pb-3 px-4 border-b border-[#f0eee8] flex flex-col shrink-0 bg-[#fcf9f3]">
          {/* Centered Drag Handle */}
          <div className="w-10 h-1 rounded-full bg-[#c4c7c7] mx-auto mb-3" />

          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-serif text-[22px] font-medium text-primary tracking-tight">
                Size Guide &amp; Fit Predictor
              </h3>
              <p className="text-[12px] text-on-surface-variant mt-0.5">
                Find your signature silhouette with precision fit insights.
              </p>
            </div>
            <button
              aria-label="Close dialog"
              onClick={closeFitPredictor}
              className="w-8 h-8 -mr-1 rounded-full bg-[#ebe8e2]/70 hover:bg-[#e5e2dc] flex items-center justify-center text-primary transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[19px]">close</span>
            </button>
          </div>

          {/* Dual View Segmented Control / Tabs */}
          <div className="grid grid-cols-2 p-1 mt-3 bg-[#ebe8e2]/70 rounded-xl gap-1 border border-[#e5e2dc]">
            <button
              onClick={() => setActiveTab('predictor')}
              className={`py-2 px-3 rounded-lg text-[11px] uppercase tracking-wider font-semibold transition-all text-center cursor-pointer ${
                activeTab === 'predictor'
                  ? 'bg-white text-primary shadow-xs'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Smart Fit Predictor
            </button>
            <button
              onClick={() => setActiveTab('measurements')}
              className={`py-2 px-3 rounded-lg text-[11px] uppercase tracking-wider font-semibold transition-all text-center cursor-pointer ${
                activeTab === 'measurements'
                  ? 'bg-white text-primary shadow-xs'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Garment Measurements
            </button>
          </div>
        </div>

        {/* Scrollable Sheet Content */}
        <div className="overflow-y-auto px-4 py-4 space-y-4 no-scrollbar">
          {activeTab === 'predictor' ? (
            <div className="space-y-4">
              {/* Step 1: Your Measurements */}
              <div className="p-4 rounded-2xl bg-[#f6f3ed] border border-[#e5e2dc]/70 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-[#556250] font-bold">
                    1. Your Measurements
                  </span>
                  <span className="text-[10px] text-on-surface-variant font-medium">Profile saved</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 rounded-xl bg-white border border-[#e5e2dc] flex flex-col justify-between">
                    <span className="text-[10px] text-on-surface-variant font-medium">Height</span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="text-[15px] font-bold text-primary font-sans">
                        {heightFeet}' {heightInches}"
                      </span>
                      <span className="text-[12px] text-[#556250] font-medium font-sans">
                        {heightCm} cm
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-[#e5e2dc] flex flex-col justify-between">
                    <span className="text-[10px] text-on-surface-variant font-medium">Weight</span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="text-[15px] font-bold text-primary font-sans">
                        {weightLbs} lbs
                      </span>
                      <span className="text-[12px] text-[#556250] font-medium font-sans">
                        {weightKg} kg
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Preferred Drape */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-primary font-bold">
                    2. Preferred Drape
                  </span>
                  <span className="text-[11px] text-[#556250] font-semibold">
                    {preferredDrape === 'fitted'
                      ? 'Tailored Drape'
                      : preferredDrape === 'oversized'
                      ? 'Relaxed Volume'
                      : 'Curated Drape'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPreferredDrape('fitted')}
                    className={`p-2.5 rounded-xl text-left transition-all cursor-pointer border ${
                      preferredDrape === 'fitted'
                        ? 'border-2 border-primary bg-white shadow-sm'
                        : 'border-[#e5e2dc] bg-[#f0eee8] hover:border-primary/40'
                    }`}
                  >
                    <p className="text-[12px] font-semibold text-primary">Fitted</p>
                    <p className="text-[10px] text-on-surface-variant mt-0.5 leading-tight">
                      Closer to body
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPreferredDrape('editorial')}
                    className={`p-2.5 rounded-xl text-left transition-all cursor-pointer border ${
                      preferredDrape === 'editorial'
                        ? 'border-2 border-primary bg-white shadow-sm'
                        : 'border-[#e5e2dc] bg-[#f0eee8] hover:border-primary/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-[12px] font-bold text-primary">Editorial</p>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#556250]" />
                    </div>
                    <p className="text-[10px] text-on-surface-variant mt-0.5 leading-tight">
                      Intentional drape
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPreferredDrape('oversized')}
                    className={`p-2.5 rounded-xl text-left transition-all cursor-pointer border ${
                      preferredDrape === 'oversized'
                        ? 'border-2 border-primary bg-white shadow-sm'
                        : 'border-[#e5e2dc] bg-[#f0eee8] hover:border-primary/40'
                    }`}
                  >
                    <p className="text-[12px] font-semibold text-primary">Oversized</p>
                    <p className="text-[10px] text-on-surface-variant mt-0.5 leading-tight">
                      Extra volume
                    </p>
                  </button>
                </div>
              </div>

              {/* Dynamic Fit Recommendation Card */}
              <div className="p-4 rounded-2xl bg-[#d8e7d0]/35 border border-[#d8e7d0] space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#556250]">
                      verified
                    </span>
                    <span className="text-[13px] text-primary font-bold tracking-wide">
                      Recommended Size: {recommendedSize}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-white text-[10px] font-bold text-[#556250] shadow-xs">
                    {matchRate} Match
                  </span>
                </div>

                <p className="text-[12px] text-on-surface leading-relaxed">
                  <strong>{matchRate} match rate</strong> — {keepRate} of customers with your
                  profile kept size{' '}
                  <span className="font-bold underline decoration-[#556250]">
                    {recommendedSize}
                  </span>{' '}
                  without returns.
                </p>

                <div className="pt-2 border-t border-[#d8e7d0]/80 flex items-start gap-2">
                  <span className="material-symbols-outlined text-[17px] text-[#556250] mt-0.5">
                    person_outline
                  </span>
                  <p className="text-[11px] text-on-surface-variant leading-normal">
                    The model is 5'9" (175cm), bust 32", wearing Size S for a tailored drape, or
                    Size M for the catalog look.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleApplySize(recommendedSize)}
                className="w-full h-12 rounded-lg bg-primary text-white text-[12px] font-semibold uppercase tracking-wider flex items-center justify-center gap-2 active:scale-[0.99] hover:bg-[#222] transition-transform shadow-md cursor-pointer"
              >
                <span>Select Size {recommendedSize} &amp; Continue</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          ) : (
            /* TAB 2: GARMENT MEASUREMENTS */
            <div className="space-y-4">
              {/* Unit Toggle Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[17px]">straighten</span>
                  <span className="text-[11px] uppercase tracking-wider text-primary font-bold">
                    Garment Dimensions
                  </span>
                </div>

                {/* Unit Toggle */}
                <div className="flex items-center p-0.5 bg-[#ebe8e2] rounded-lg border border-[#e5e2dc]">
                  <button
                    onClick={() => setUnit('in')}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                      unit === 'in' ? 'bg-white text-primary shadow-xs' : 'text-on-surface-variant'
                    }`}
                  >
                    Inches
                  </button>
                  <button
                    onClick={() => setUnit('cm')}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                      unit === 'cm' ? 'bg-white text-primary shadow-xs' : 'text-on-surface-variant'
                    }`}
                  >
                    Centimeters
                  </button>
                </div>
              </div>

              {/* Specification Table */}
              <div className="overflow-x-auto rounded-xl border border-[#e5e2dc] bg-white">
                <table className="w-full text-left text-[12px]">
                  <thead>
                    <tr className="bg-[#f6f3ed] border-b border-[#e5e2dc] text-on-surface-variant text-[10px] uppercase font-bold tracking-wider">
                      <th className="py-2.5 px-3">Size</th>
                      <th className="py-2.5 px-2">Chest</th>
                      <th className="py-2.5 px-2">Shoulder</th>
                      <th className="py-2.5 px-2">Length</th>
                      <th className="py-2.5 px-2">Sleeve</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f0eee8] text-on-surface font-sans">
                    {measurementsData[unit].map((item) => {
                      const isTarget = item.size === recommendedSize;
                      return (
                        <tr
                          key={item.size}
                          className={`${
                            isTarget
                              ? 'bg-[#d8e7d0]/40 font-semibold text-primary'
                              : 'hover:bg-[#f6f3ed]/50'
                          }`}
                        >
                          <td className="py-2.5 px-3 flex items-center gap-1.5 font-bold">
                            {item.size}
                            {isTarget && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#556250]" />
                            )}
                          </td>
                          <td className="py-2.5 px-2">{item.chest}</td>
                          <td className="py-2.5 px-2">{item.shoulder}</td>
                          <td className="py-2.5 px-2">{item.length}</td>
                          <td className="py-2.5 px-2">{item.sleeve}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Editorial Measuring Guide Tip */}
              <div className="p-3 rounded-xl bg-[#f6f3ed] border border-[#e5e2dc] flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#556250] mt-0.5">
                  info
                </span>
                <div>
                  <p className="text-[11px] text-primary font-bold">How this garment fits</p>
                  <p className="text-[11px] text-on-surface-variant mt-0.5 leading-relaxed">
                    Constructed with +4.5 inches of ease for an effortless unstudied drape. If in
                    between sizes, size down for structured elegance or take your standard size for
                    the relaxed editorial look.
                  </p>
                </div>
              </div>

              {/* Action Button inside measurements tab */}
              <button
                onClick={() => handleApplySize(recommendedSize)}
                className="w-full h-12 rounded-lg bg-primary text-white text-[12px] font-semibold uppercase tracking-wider flex items-center justify-center gap-2 active:scale-[0.99] hover:bg-[#222] transition-transform shadow-md cursor-pointer"
              >
                <span>Confirm Size {recommendedSize}</span>
                <span className="material-symbols-outlined text-[18px]">check</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
