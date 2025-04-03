import BookListSection from '@/components/book/BookListSection';
import PageContainer from '@/components/common/PageContainer';
import PageTitle from '@/components/common/PageTitle';
import useSavedBookInfiniteScroll from '@/components/saved-book/hook/useSavedBookInfiniteScroll';

export default function SavedBooksPage() {
  const { data, ref } = useSavedBookInfiniteScroll();

  return (
    <PageContainer>
      <PageTitle title="내가 찜한 책" />
      <BookListSection
        label="찜한 책"
        data={data}
        ref={ref}
        emptyMessage="찜한 책이 없습니다."
        fallbackMessage="찜한 책을 가져오는 도중 문제가 발생했습니다."
      />
    </PageContainer>
  );
}
