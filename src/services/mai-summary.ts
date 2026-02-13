import { maiSummaryMockData } from '../mocks/mai-summary.mock'
import { songsMockData } from '../mocks/songs.mock'
import type { MaiSummaryData } from '../types/mai-data'

export async function getMaiSummaryData(): Promise<MaiSummaryData> {
  const songInfoById = new Map(
    songsMockData.map((song) => [
      Number(song.id),
      {
        genre: song.basic_info.genre,
        bpm: song.basic_info.bpm,
        from: song.basic_info.from,
        artist: song.basic_info.artist,
      },
    ]),
  )

  return {
    ...maiSummaryMockData,
    records: maiSummaryMockData.records.map((record) => ({
      ...record,
      ...songInfoById.get(record.song_id),
    })),
  }
}
