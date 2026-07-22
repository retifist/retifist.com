export function youtubeEmbedSrc(videoId: string): string {
  const id = videoId.trim()
  if (!id) return ''
  return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}`
}

export function youtubeTitle(title?: string, videoId?: string): string {
  if (title?.trim()) return title.trim()
  if (videoId?.trim()) return `YouTube video ${videoId.trim()}`
  return 'YouTube video'
}
