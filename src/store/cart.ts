'use client';

import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  subscription?: {
    interval: string;
    price: number;
  };
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  addItem: (item) => {
    const existing = get().items.find(i => i.id === item.id);
    if (existing) {
      set({
        items: get().items.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
        isOpen: true,
      });
    } else {
      set({
        items: [...get().items, { ...item, quantity: 1 }],
        isOpen: true,
      });
    }
  },
  removeItem: (id) => set({ items: get().items.filter(i => i.id !== id) }),
  updateQuantity: (id, quantity) => {
    if (quantity <= 0) {
      set({ items: get().items.filter(i => i.id !== id) });
    } else {
      set({
        items: get().items.map(i =>
          i.id === id ? { ...i, quantity } : i
        ),
      });
    }
  },
  clearCart: () => set({ items: [] }),
  totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
  totalPrice: () => get().items.reduce((sum, i) => sum + (i.subscription?.price || i.price) * i.quantity, 0),
}));
