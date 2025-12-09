export interface Typist {
    rank: number;
    name: string;
    wpm: number;
    accuracy: number;
    platform: string;
    verified: boolean;
    date: string;
}

export interface NewsItem {
    id: number;
    date: string;
    title: string;
    summary: string;
}

export enum Page {
    HOME = 'HOME',
    RANKINGS = 'RANKINGS',
    APPLY = 'APPLY',
    ABOUT = 'ABOUT',
    FAQ = 'FAQ'
}