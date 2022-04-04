export const GET_SEARCH_BY_QUERY = 'GET_SEARCH_BY_QUERY';
export const GET_SEARCH_BY_QUERY_RESPONSE = 'GET_SEARCH_BY_QUERY_RESPONSE';

export const getSearchByQuery = (query) => ({
  type: GET_SEARCH_BY_QUERY,
  payload: query,
});

export const getSearchByQueryResponse = (searchResponse) => ({
  type: GET_SEARCH_BY_QUERY_RESPONSE,
  payload: searchResponse
});
