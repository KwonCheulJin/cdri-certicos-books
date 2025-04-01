import { SearchType } from '@/types/constant';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface SearchState {
  searchType: SearchType;
}

interface SearchAction {
  setSearchType: (type: SearchType) => void;
}

export const useSearchStore = create(
  immer<SearchState & SearchAction>(set => ({
    searchType: 'BASIC',
    setSearchType: type => {
      set(state => {
        state.searchType = type;
      });
    },
  }))
);
