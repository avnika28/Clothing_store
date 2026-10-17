import React from 'react';
import { useApp } from '../context/AppContext';

export const CheckoutSuccessModal: React.FC = () => {
  const {
    isCheckoutSuccessModalOpen,
    setIsCheckoutSuccessModalOpen,
    cart,
    promoCode,
    discountPercentage,
    setCurrentScreen,
  } = useApp();

  if (!isCheckoutSuccessModalOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = promoCode ? (subtotal * discountPercentage) / 100 : 0;
  const estimatedTax = (subtotal - discountAmount) * 0.08;
  const total = Math.max(0, subtotal - discountAmount + estimatedTax);

  const handleClose = () => {
    setIsCheckoutSuccessModalOpen(false);
    setCurrentScreen('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl flex flex-col gap-4 border border-[#e5e2dc] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center text-center gap-2">
          <div className="w-14 h-14 rounded-full bg-[#d8e7d0] flex items-center justify-center text-[#556250]">
            <span className="material-symbols-outlined text-[32px]">check_circle</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#556250]">
            Payment Successful
          </span>
          <h3 className="font-serif text-[22px] font-medium text-primary leading-tight">
            Order #AU-84920 Confirmed
          </h3>
          <p className="text-[12px] text-on-surface-variant leading-relaxed">
            Thank you for supporting circular slow fashion. A receipt and carbon-neutral tracking link
            have been sent to your email.
          </p>
        </div>

        <div className="bg-[#f6f3ed] rounded-xl p-3.5 space-y-2 border border-[#e5e2dc]">
          <div className="flex justify-between text-[12px]">
            <span className="text-on-surface-variant">Estimated Delivery</span>
            <span className="font-semibold text-primary">2–3 Business Days</span>
          </div>
          <div className="flex justify-between text-[12px]">
            <span className="text-on-surface-variant">Packaging</span>
            <span className="font-semibold text-[#556250]">100% Compostable</span>
          </div>
          <div className="flex justify-between text-[12px]">
            <span className="text-on-surface-variant">Total Paid</span>
            <span className="font-bold font-sans text-primary">${total.toFixed(2)} USD</span>
          </div>
        </div>

        <button
          onClick={handleClose}
          className="w-full py-3 bg-primary text-white rounded-lg text-[12px] uppercase font-semibold tracking-wider hover:bg-[#222] transition-colors cursor-pointer"
        >
          Continue Exploring
        </button>
      </div>
    </div>
  );
};
