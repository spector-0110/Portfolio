"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {fetchProjectsFromGitHub} from "../lib/api"
import {ExpandableCardGrid} from '../components/ui/ExpandableCardGrid';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetchProjectsFromGitHub();

        const mapped = response.map((repo) => ({
      title: repo.name,
      description: repo.description,
      src: "https://source.unsplash.com/random/800x600?" + repo.language,
      ctaText: "View Repo",
      ctaLink: repo.html_url,
      content: () => (
            <div>
              <p><strong>Language:</strong> {repo.language}</p>
              <p><strong>Stars:</strong> {repo.stars}</p>
              <p><strong>Topics:</strong> {repo.topics?.join(', ')}</p>
              {repo.readme && <p>{repo.readme}</p>}
            </div>
        )
      }));

        setProjects(mapped);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-neutral-300 dark:border-neutral-700 border-t-neutral-900 dark:border-t-neutral-100 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-neutral-50 dark:bg-neutral-900">
      <ExpandableCardGrid cards={projects} />
    </div>
  );
}