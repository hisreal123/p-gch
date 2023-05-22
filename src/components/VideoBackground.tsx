

type VideoPlayerProps =  {
    videoUrl ?: string
}
const VideoPlayer = ({videoUrl} : VideoPlayerProps) => {


  return (
    <div className='vBackground -z-50 '>
      <video
        src={videoUrl ? videoUrl : './assets/churchVideo.mp4' }
        className="h-screen w-screen object-cover"
        loop
        autoPlay={true}
        muted
      />
    </div>
  )
}

export default VideoPlayer
