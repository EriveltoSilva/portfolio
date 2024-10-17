export type ProjectEntity = {
  id: number;
  title: string;
  category: string[];
  description: string;
  image: string;
  youtubeVideoURL?: string;
  linkedinVideoURL?: string;
  githubRepositoryURL?: string;
};
