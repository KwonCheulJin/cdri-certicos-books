import { SearchTarget } from '@/types/constant';

export interface Meta {
  is_end: boolean;
  pageable_count: number;
  total_count: number;
}

export interface Document {
  authors: string[];
  contents: string;
  datetime: Date;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
}

export interface Queries {
  query: string;
  page?: number;
  target?: SearchTarget;
}
export interface KakaoBookResponse {
  meta: Meta;
  documents: Document[];
}

export type InfiniteQueryResponse<T> = {
  content: T[];
  nextPage: number;
  isLast: boolean;
  totalCount: number;
};

export interface BookInfo {
  id: string;
  title: string;
  author: string;
  contents: string;
  price: {
    original: number;
    discounted?: number;
  };
  thumbnail: {
    small: string;
    large: string;
  };
  url: string;
}
