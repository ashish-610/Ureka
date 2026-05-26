import { create } from "zustand";
import { persist } from "zustand/middleware";

type CounterStore = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,

  increase: () =>
    set((state) => ({
      count: state.count + 1,
    })),

  decrease: () =>
    set((state) => ({
      count: state.count - 1,
    })),
}));

type AppStore = {
  companyName: string;
  setCompanyName: (name: string) => void;
};

export const useAppStore = create<AppStore>()(persist((set) => ({
      companyName: "Ureka Sys",

      setCompanyName: (name) =>
        set({
          companyName: name,
        }),
    }),
    {
      name: "company-storage",
    },
  ),
);
