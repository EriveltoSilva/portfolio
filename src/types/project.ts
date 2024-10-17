export type ProjectEntity = {
  id: number;
  title: string;
  category: string[];
  programmingLanguage?: string[];
  description: string;
  image: string;
  youtubeVideoURL?: string;
  linkedinVideoURL?: string;
  githubRepositoryURL?: string;
  linkURL?: string;
};
