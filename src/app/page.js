import { headers } from 'next/headers'
import { WitchHousePage } from './WitchHousePage';

export const metadata = {
  title: "Witch House Archive | floralunit world ❤",
  description: "Witch House Archive, мой витчхаус архив",
  viewport: "width=865px, initial-scale=1",
};

export default async function Home() {
  const headersList = await headers()
  const lang = headersList.get('x-user-lang') || 'ru'

  return <WitchHousePage lang={lang} />
}