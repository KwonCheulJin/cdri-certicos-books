import { useSearchStore } from '@/store/useSearchStore';
import { SEARCH_CATEGORY_ITEMS, SearchCategoryItem } from '@/types/constant';
import { useCallback, useEffect, useRef, useState } from 'react';

const initialSelectedItem = SEARCH_CATEGORY_ITEMS[0];

export default function useSearchDetail() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] =
    useState<SearchCategoryItem>(initialSelectedItem);
  const { searchType, setSearchType, setSearchQuery } = useSearchStore(
    state => state
  );

  const handleSearch = useCallback(() => {
    if (inputRef.current) {
      const keyword = inputRef.current.value.trim().replace(/\s+/g, ' ');
      if (keyword === '') {
        inputRef.current.value = '';
        return;
      }
      setSearchQuery({ query: keyword, target: selectedItem.id });
      inputRef.current.value = keyword;
    }
  }, [selectedItem.id, setSearchQuery]);

  const handleModalOpen = useCallback(() => {
    setIsModalOpen(true);
    setSearchType('DETAIL');
  }, [setSearchType]);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    setSearchType('BASIC');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setSelectedItem(initialSelectedItem);
  }, [setSearchType]);

  useEffect(() => {
    if (searchType === 'BASIC') {
      handleModalClose();
    }
  }, [handleModalClose, searchType]);

  return {
    inputRef,
    handleSearch,
    handleModalOpen,
    handleModalClose,
    isModalOpen,
    items: [...SEARCH_CATEGORY_ITEMS],
    selectedItem,
    setSelectedItem,
  };
}
