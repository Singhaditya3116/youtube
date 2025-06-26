
const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { title, thumbnails, channelTitle } = snippet;
  const thumbnailUrl = thumbnails?.maxres?.url;
  // console.log(props);
  return (
    <div className="rounded-xl overflow-hidden cursor-pointer shadow-md h-full">
      <div className="min-h-[160px] h-[160px]">
        <img className="w-full h-full object-cover" src={thumbnailUrl} alt="Video thumbnail" />
      </div>
      <div className="p-3">
        <h2 className="font-semibold line-clamp-2">{title}</h2>
        <h3>{channelTitle}</h3>
        <h4>{statistics.viewCount} views</h4>
      </div>
    </div>
  );
};

export default VideoCard;
