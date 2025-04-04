import SearchDetailButton from '@/components/search/SearchDetailButton';
import SearchDetailModal from '@/components/search/SearchDetailModal';
import useSearchDetail from '@/components/search/hook/useSearchDetail';

export default function SearchDetailContainer() {
  const {
    inputRef,
    handleSearch,
    handleModalOpen,
    handleModalClose,
    isModalOpen,
    items,
    selectedItem,
    setSelectedItem,
  } = useSearchDetail();
  return (
    <>
      <SearchDetailButton handleModalOpen={handleModalOpen} />
      {isModalOpen ? (
        <SearchDetailModal
          inputRef={inputRef}
          items={items}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          handleSearch={handleSearch}
          handleModalClose={handleModalClose}
        />
      ) : null}
    </>
  );
}
