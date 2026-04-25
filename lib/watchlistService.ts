import useWatchlistStore from "@/lib/watchlistStore";

export function addToWatchlist(movie: any) {
  useWatchlistStore.getState().addItem(movie);
}

export function removeFromWatchlist(id: string) {
  useWatchlistStore.getState().removeItem(id);
}

export function getState() {
  return useWatchlistStore.getState().items;
}