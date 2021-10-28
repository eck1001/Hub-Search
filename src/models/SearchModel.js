import { request } from "@octokit/request";

const searchRepositories = async (query) => {
  console.debug("calling query: ", query);
  try {
    /**
     * Octokit request DOCS: https://github.com/octokit/request.js
     * Constructing a search query: https://docs.github.com/en/rest/reference/search#constructing-a-search-query
     */
    const results = await request("GET /search/repositories", {
      q: query,
    });
    const { items } = results.data;

    return items.map((item) => {
      const UNKNOWN = "unknown";
      return {
        name: item.name || UNKNOWN,
        author: item.owner?.login || UNKNOWN,
        language: item.language || UNKNOWN,
        stars: item.stargazers_count || UNKNOWN,
        description: item.description || UNKNOWN,
        id: item.id,
      };
    });
  } catch (error) {
    /**
     * Limitations of GitHUb API:
     * https://docs.github.com/en/rest/reference/search#limitations-on-query-length
     * Common Errors:
     *  - Rate Limit (stricter w/o auth)
     *  - Invalid Query
     *  - General Networking Errors
     */
    console.error(
      `Error Searching Repositories; query: ${query}, error:`,
      error
    );
    throw error;
  }
};

const getRepositoryById = async (id) => {
  console.debug("calling with id: ", id);
  try {
    const results = await request(`GET /repositories/${id}`);

    const UNKNOWN = "unknown";
    return {
        name: results.data.name || UNKNOWN,
        author: results.data.owner?.login || UNKNOWN,
        language: results.data.language || UNKNOWN,
        stars: results.data.stargazers_count || UNKNOWN,
        description: results.data.description || UNKNOWN,
        id: results.data.id,
    }
  } catch (error) {
    console.error(`Error Getting Repository for id: ${id}, error:`, error);
    throw error;
  }
};

export { searchRepositories, getRepositoryById };
