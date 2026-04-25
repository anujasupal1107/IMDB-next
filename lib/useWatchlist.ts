import { useEffect } from "react";
import useWatchlistStore from "@/lib/watchlistStore";

export function useWatchlist() {
  const items = useWatchlistStore((state) => state.items);

  useEffect(() => {}, []);

  return { items };
}