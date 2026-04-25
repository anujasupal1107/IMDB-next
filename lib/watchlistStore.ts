import { create } from "zustand";

export type WatchItem = {
  id: string;
  title: string;
};

type WatchlistState = {
  items: WatchItem[];
  addItem: (item: WatchItem) => void;
  removeItem: (id: string) => void;
  clear: () => void;
};

const useWatchlistStore = create<WatchlistState>((set) => ({
  items: [],

  addItem: (item) =>
    set((state) => ({
      items: state.items.find((i) => i.id === item.id)
        ? state.items
        : [...state.items, item],
    })),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  clear: () => set({ items: [] }),
}));

export default useWatchlistStore;