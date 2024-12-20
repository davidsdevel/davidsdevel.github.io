import { ImageResponse } from 'next/og'
 
export const alt = "David's Devel Website";
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: '#001122',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          justifyContent: 'center',
        }}
      >
        David&apos;s Devel Website
      </div>
    ),
    {
      ...size,
    }
  )
}