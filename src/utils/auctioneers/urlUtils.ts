
/**
 * Extract domain from URL
 */
export const extractDomain = (url: string): string => {
  try {
    // Add protocol if missing
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    
    const domain = new URL(url).hostname.toLowerCase();
    // Remove www. prefix if present
    return domain.startsWith('www.') ? domain.substring(4) : domain;
  } catch (error) {
    return url.toLowerCase(); // If URL parsing fails, just use the raw input for matching
  }
};
