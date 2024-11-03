import { create } from "zustand";
type State = {
  count: number

};

type Action = {
  increment:()=>void,
  decrement: ()=>void,

  
};

export const usePersonStore = create<State & Action>((set) => ({
  count: 0,
  increment: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); 
    set((state) => ({ count: state.count + 1 }))
  },
  decrement: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); 
    set((state) => ({ count: state.count - 1 }))
  },
}));
  

