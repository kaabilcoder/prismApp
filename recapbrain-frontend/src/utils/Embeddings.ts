export function getYouTubeEmbedURL(url: string): string {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  }

export function getTwitterEmbedURL(url: string): string {
    return url.replace("x.com", "twitter.com");
  }
  
