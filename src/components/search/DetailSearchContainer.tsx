import DetailSearchButton from '@/components/search/DetailSearchButton';
import DetailSearchModal from '@/components/search/DetailSearchModal';
import useDetailSearch from '@/components/search/hooks/useDetailSearch';

export default function DetailSearchContainer() {
  const {
    inputRef,
    handleSearch,
    handleModalOpen,
    handleModalClose,
    isModalOpen,
    items,
    selectedItem,
    setSelectedItem,
  } = useDetailSearch();
  return (
    <>
      <DetailSearchButton handleModalOpen={handleModalOpen} />
      {isModalOpen && (
        <DetailSearchModal
          inputRef={inputRef}
          items={items}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          handleSearch={handleSearch}
          handleModalClose={handleModalClose}
        />
      )}
    </>
  );
}
