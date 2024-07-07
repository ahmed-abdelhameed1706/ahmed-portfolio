import { Octokit } from "@octokit/rest";

const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export const octokit = new Octokit({
  auth: token,
});

export const fetchRepositories = async () => {
  try {
    // Use listForAuthenticatedUser to ensure fetching all repos
    const allRepositories = await octokit.paginate(
      octokit.repos.listForAuthenticatedUser,
      {
        type: "all", // All repository types
        per_page: 100, // Maximum number of items per page
      }
    );

    return allRepositories;
  } catch (error) {
    console.error("Error fetching repositories:", error.message || error);
    if (error.response) {
      console.error("Response:", error.response.status, error.response.data);
    }
    throw error;
  }
};
