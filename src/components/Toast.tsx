import React from 'react';
import { useApp } from '../context/AppContext';

export const Toast: React.FC = () => {
  const { toast } = useApp();

  if (!toast.visible) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-white shadow-xl text-[12px] font-sans font-medium animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-none">
      <span className="material-symbols-outlined text-[16px] text-[#d8e7d0]">check_circle</span>
      <span>{toast.message}</span>
    </div>
  );
};
