"use client";

import { useEffect, useRef } from "react";
import useWatchlistStore from "@/lib/watchlistStore";
import { processQueue } from "@/lib/syncEngine";

export default function SyncProvider() {
  const syncing = useRef(false);

  useEffect(() => {
    const sync = async () => {
      if (syncing.current) return;

      syncing.current = true;

      try {
        await processQueue();

        // optional: access store state safely
        const store = useWatchlistStore.getState();

        console.log("Sync complete:", store.items);
      } catch (err) {
        console.error("Sync failed:", err);
      } finally {
        syncing.current = false;
      }
    };

    sync();

    const interval = setInterval(sync, 10000);

    return () => clearInterval(interval);
  }, []);

  return null;
}