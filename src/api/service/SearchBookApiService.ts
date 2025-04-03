import {
  Document,
  InfiniteQueryResponse,
  KakaoBookResponse,
  Queries,
} from '@/types/search';
import ApiService from './ApiService';

export default class SearchBookApiService extends ApiService {
  constructor() {
    super();
  }

  async getSearchBooks({
    query,
    page = 1,
    target,
  }: Queries): Promise<InfiniteQueryResponse<Document>> {
    const response = await this.get<KakaoBookResponse>(
      `/book?query=${query}&page=${page}${target ? `&target=${target}` : ''}`
    );
    return {
      content: response.data.documents,
      nextPage: page + 1,
      isLast: response.data.meta.is_end,
      totalCount: response.data.meta.total_count,
    };
  }
}

export const searchBookApiService = new SearchBookApiService();
