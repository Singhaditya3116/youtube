const YOUTUBE_API_KEY = "AIzaSyDkuVQDEEV6sP-eT6FyuuJnpV11mvVpJnE";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_VIDEO_BY_ID_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=" +
  YOUTUBE_API_KEY;
