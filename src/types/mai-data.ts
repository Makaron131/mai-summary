export type ChartType = 'SD' | 'DX'

export interface MaiRecord {
  achievements: number
  ds: number
  dxScore: number
  fc: string
  fs: string
  level: string
  level_index: number
  level_label: string
  ra: number
  rate: string
  song_id: number
  title: string
  type: ChartType
  genre?: string
  bpm?: number
  from?: string
  artist?: string
}

export interface MaiSummaryData {
  additional_rating: number
  nickname: string
  plate: string
  rating: number
  records: MaiRecord[]
  username: string
}

export interface SongBasicInfo {
  title: string
  artist: string
  genre: string
  bpm: number
  release_date: string
  from: string
  is_new: boolean
}

export interface SongData {
  id: string
  title: string
  type: ChartType
  basic_info: SongBasicInfo
}
