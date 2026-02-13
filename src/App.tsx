import { useEffect, useState } from 'react'
import './App.css'
import { getMaiSummaryData } from './services/mai-summary'
import type { MaiSummaryData } from './types/mai-data'

function App() {
  const [data, setData] = useState<MaiSummaryData | null>(null)

  useEffect(() => {
    getMaiSummaryData().then(setData)
  }, [])

  if (!data) {
    return <p className="read-the-docs">Loading mock data...</p>
  }

  const sdTop35 = data.records
    .filter((record) => record.type === 'SD')
    .sort((a, b) => b.ra - a.ra)
    .slice(0, 35)

  const dxTop15 = data.records
    .filter((record) => record.type === 'DX')
    .sort((a, b) => b.ra - a.ra)
    .slice(0, 15)

  const renderRecordsTable = (
    title: string,
    records: MaiSummaryData['records'],
    typeLabel: 'SD' | 'DX',
  ) => (
    <section className="card table-card">
      <h2>
        {title} ({records.length})
      </h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Cover</th>
              <th>Song</th>
              <th>Type</th>
              <th>Level</th>
              <th>RA</th>
              <th>Achievement</th>
              <th>Genre</th>
              <th>BPM</th>
              <th>From</th>
              <th>Artist</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr
                key={`${typeLabel}-${record.song_id}-${record.level_index}-${index}`}
              >
                <td>{index + 1}</td>
                <td>
                  <img
                    className="cover"
                    src={`https://www.diving-fish.com/covers/${String(record.song_id).padStart(5, '0')}.png`}
                    alt={record.title}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                    }}
                  />
                </td>
                <td>{record.title}</td>
                <td>{record.type}</td>
                <td>{record.level}</td>
                <td>{record.ra}</td>
                <td>{record.achievements.toFixed(4)}%</td>
                <td>{record.genre ?? '-'}</td>
                <td>{record.bpm ?? '-'}</td>
                <td>{record.from ?? '-'}</td>
                <td>{record.artist ?? '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )

  return (
    <main className="page">
      <h1>Mai Summary (Mock)</h1>
      <section className="card summary-card">
        <p>
          用户: <strong>{data.username}</strong> / 昵称: <strong>{data.nickname}</strong>
        </p>
        <p>
          Rating: <strong>{data.rating}</strong> / Additional:{' '}
          <strong>{data.additional_rating}</strong>
        </p>
        <p>
          Plate: <strong>{data.plate || 'N/A'}</strong> / 记录数:{' '}
          <strong>{data.records.length}</strong>
        </p>
      </section>
      {renderRecordsTable('SD Top 35 by RA', sdTop35, 'SD')}
      {renderRecordsTable('DX Top 15 by RA', dxTop15, 'DX')}
    </main>
  )
}

export default App
