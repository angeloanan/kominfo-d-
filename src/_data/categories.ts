export interface CategoryInterface {
  id: string
  name: string
  color: string
}

// taken from https://www.similarweb.com/category/
// color reference https://tailwindcss.com/docs/background-color
export const categories = [
  { id: 'idnStarterPack', name: 'Indonesian Starterpack', color: 'red' },
  { id: 'devStarterPack', name: 'Essential Developer Toolkit', color: 'lime' },
  { id: 'topWebUSA', name: 'Top Websites USA', color: 'sky' },
  { id: 'linuxStarterPack', name: 'Linux Starterpack', color: 'black' },
  { id: 'finance', name: 'Finance', color: 'emerald' },
  { id: 'social', name: 'Social Media', color: 'sky' },
  { id: 'game', name: 'Game', color: 'amber' },
  { id: 'entertainment', name: 'Arts & Entertainment', color: 'rose' },
  { id: 'development', name: 'Development', color: 'green' },
  { id: 'education', name: 'Education', color: 'teal' },
  { id: 'news', name: 'News', color: 'neutral' },
  { id: 'health', name: 'Health', color: 'lime' },
  { id: 'ecommerce', name: 'E-Commerce', color: 'indigo' },
  { id: 'search', name: 'Search Engine', color: 'fuchsia' },
  { id: 'career', name: 'Jobs & Career', color: 'pink' }
]
