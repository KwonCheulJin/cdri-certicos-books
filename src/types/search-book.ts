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

export interface Response {
  meta: Meta;
  documents: Document[];
}
