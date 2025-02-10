export interface ProjectLink {
    url: string;
    label: string;
    icon?: 'portal' | 'admin' | 'register';
}

export interface Project {
    title: string;
    description: string;
    images: string[];
    links?: ProjectLink[];
} 