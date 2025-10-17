# Rick and Morty GraphQL App

This app queries the Rick and Morty GraphQL endpoint to display episodes with pagination.

## Features

- Fetches and displays episodes from the Rick and Morty API
- Pagination controls
- Styled with Tailwind CSS

## Usage

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

## Project Structure

- `interfaces/index.ts`: TypeScript interfaces for episode data
- `components/common/EpisodeCard.tsx`: Card component for displaying episode info
- `pages/index.tsx`: Main page querying and displaying episodes
