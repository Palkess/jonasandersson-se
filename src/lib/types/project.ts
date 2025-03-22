export interface Project {
    slug: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    status: 'public' | 'private' | 'inprogress';
    githubUrl?: string;
    url: string;
    releaseDate: Date;
}
