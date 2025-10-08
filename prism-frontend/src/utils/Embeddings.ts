export function getYouTubeEmbedURL(url: string): string {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  }

export function getTwitterEmbedURL(url: string): string {
    return url.replace("x.com", "twitter.com");
  }

export function getInstagramEmbedURL(url: string): string {
  const regex = /(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel|tv)\/([\w-]+)/;
  const match = url.match(regex);
  return match ? `https://www.instagram.com/p/${match[1]}/embed` : url;
}

  
export function getLinkedInEmbedURL(url: string): string {
  return url;
}