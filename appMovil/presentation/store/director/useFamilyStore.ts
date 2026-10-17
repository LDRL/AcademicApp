import {create} from 'zustand';
import { Person } from '@/domain/entities/person';
import { FamilyMember } from '@/domain/entities/student';

interface FamilyState {
  family: FamilyMember[];
  addFamily: (familiar: FamilyMember) => void;
  clearFamily: () => void;
}


export const useFamilyStore = create<FamilyState>()((set,get) => ({
    family:[],
    addFamily: (familiar) =>
        set((state) => ({
        family: [...state.family, familiar],
    })),

    clearFamily: () => {
        set({ family: [] });
    },
}));


