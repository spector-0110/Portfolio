async function handleApiResponse(response, errorMessage = 'Request failed') {
  if (!response.ok) {
    try {
      const errorData = await response.json();
      const apiError = new Error(errorData.message || errorMessage);
      apiError.status = response.status;
      apiError.data = errorData;
      console.error('handleApiResponse - Error response:', apiError.message);
      throw apiError;
    } catch (parseError) {
      console.error('Could not parse error response:', parseError);
      const basicError = new Error(errorMessage);
      basicError.status = response.status;
      basicError.statusText = response.statusText;
      throw basicError;
    }
  }
  return response.json();
}

export const fetchProjectsFromGitHub = async () => {
  try {
    const token = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;
    if (!token) {
      throw new Error("NEXT_PUBLIC_GITHUB_ACCESS_TOKEN is not defined in the environment.");
    }

    // Step 1: Fetch all user repos
    const reposResponse = await fetch("https://api.github.com/user/repos?per_page=100", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
    });

    const repos = await handleApiResponse(reposResponse, 'Error fetching GitHub projects');

    // Step 2: Filter repos with homepage
    const reposWithHomepage = repos.filter(repo => repo.homepage && repo.homepage.trim() !== "" && repo.owner.login ==="spector-0110" && !repo.fork);

    // Step 3: For each, fetch README + languages
    const enrichedRepos = await Promise.all(reposWithHomepage.map(async (repo) => {
      const { name, owner, homepage } = repo;
      const baseUrl = `https://api.github.com/repos/${owner.login}/${name}`;

      const [readmeRes, langRes] = await Promise.all([
        fetch(`${baseUrl}/readme`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.v3.raw", // Raw content of README
          },
        }),
        fetch(`${baseUrl}/languages`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
          },
        }),
      ]);

      const readme = readmeRes.ok ? await readmeRes.text() : null;
      const languages = langRes.ok ? await langRes.json() : {};

      return {
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        url:repo.homepage,
        homepage: repo.homepage,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics,
        language: repo.language,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        readme,
        languages,
      };
    }));


    console.log('Enriched Repositories:', enrichedRepos);

    return enrichedRepos;

  } catch (error) {
    console.error('Error fetching GitHub projects:', {
      message: error.message,
      status: error.status,
      data: error.data || {},
    });
    throw error;
  }
};