"use client";

import useWatchlistStore, { WatchItem } from "@/lib/watchlistStore";

export default function WatchlistButton({ movie }: { movie: WatchItem }) {
  const items = useWatchlistStore((state) => state.items);
  const addItem = useWatchlistStore((state) => state.addItem);

  const isAdded = items.some((i) => i.id === movie.id);

  return (
    <button
      onClick={() => addItem(movie)}
      className="px-3 py-1 bg-blue-600 text-white rounded"
    >
      {isAdded ? "In Watchlist" : "Add to Watchlist"}
    </button>
  );
}