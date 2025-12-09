import { NewsItem, Typist } from "./types";

export const CHAMPION_DATA = {
    name: "Sandil Dilmeth Jayawardana",
    wpm: 170.22,
    accuracy: 98.0,
    platform: "MonkeyType",
    date: "2025-01-15"
};

export const NEWS_ITEMS: NewsItem[] = [
    {
        id: 1,
        date: "October 15, 2025",
        title: "National Typing Championship 2025 Results Announced",
        summary: "The Sri Lanka Typing Federation is proud to announce the conclusion of the 2025 National Championship. Sandil Dilmeth Jayawardana has set a new national record."
    },
    {
        id: 2,
        date: "September 01, 2025",
        title: "New Verification Standards Implementation",
        summary: "Starting next month, all record submissions above 120 WPM will require dual-angle camera verification to ensure integrity."
    },
    {
        id: 3,
        date: "August 20, 2025",
        title: "Regional Digital Literacy Workshops",
        summary: "SLTF will be conducting free typing workshops in Kandy, Galle, and Jaffna to promote digital literacy among school students."
    }
];

// Generate deterministic mock data
const firstNames = ["Nuwan", "Dilshan", "Chamara", "Thilina", "Lahiru", "Chathura", "Dasun", "Ruwan", "Nimal", "Saman", "Kasun", "Isuru"];
const lastNames = ["Perera", "Silva", "Fernando", "Bandara", "Wickramasinghe", "Herath", "Ekanayake", "Rajapaksa", "De Silva", "Mendis"];
const platforms = ["MonkeyType", "10FastFingers", "TypeRacer", "Keybr"];

export const MOCK_RANKINGS: Typist[] = [
    { rank: 1, name: "Sandil Dilmeth Jayawardana", wpm: 170.22, accuracy: 98.0, platform: "MonkeyType", verified: true, date: "2025-01-15" },
    { rank: 2, name: "Nuwan Prasad Silva", wpm: 130.45, accuracy: 95.5, platform: "10FastFingers", verified: true, date: "2024-11-20" },
    { rank: 3, name: "Hiruni Madhusha Perera", wpm: 120.82, accuracy: 94.2, platform: "TypeRacer", verified: true, date: "2024-12-05" },
    // Generate rest
    ...Array.from({ length: 47 }).map((_, i) => ({
        rank: i + 4,
        name: `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`,
        wpm: parseFloat((110 - i * 1.5).toFixed(2)),
        accuracy: parseFloat((98 - Math.random() * 5).toFixed(1)),
        platform: platforms[i % platforms.length],
        verified: i < 15, // Top 20 verified
        date: "2024-10-10"
    }))
];
