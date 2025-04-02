import { SearchTarget, SearchType } from '@/types/constant';
import { Queries } from '@/types/search-book';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface SearchState {
  searchType: SearchType;
  searchQuery: Queries;
  setSearchQuery: ({
    query,
    target,
  }: {
    query: string;
    target?: SearchTarget;
  }) => void;
  resetSearch: () => void;
}

interface SearchAction {
  setSearchType: (type: SearchType) => void;
}

export const useSearchStore = create(
  immer<SearchState & SearchAction>(set => ({
    searchType: 'BASIC',
    searchQuery: { query: '', target: undefined },
    setSearchType: type => {
      set(state => {
        state.searchType = type;
      });
    },
    setSearchQuery: ({ query, target }) =>
      set(state => {
        state.searchQuery = { query, target };
      }),
    resetSearch: () =>
      set(state => {
        state.searchQuery = { query: '', target: undefined };
      }),
  }))
);
