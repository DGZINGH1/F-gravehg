import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Play, Pause } from 'lucide-react';

interface VideoFeedProps {
  onNavigate: (view: string) => void;
}

function VideoFeed({ onNavigate }: VideoFeedProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [liked, setLiked] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-[9/16] sm:aspect-video bg-black rounded-xl overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src="https://example.com/sample-video.mp4"
              loop
              muted
              autoPlay={isPlaying}
            />
            
            <button
              onClick={togglePlay}
              className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-10"
            >
              {!isPlaying && <Play size={48} className="sm:size-16 text-white opacity-70" />}
            </button>

            <div className="absolute bottom-4 right-4 space-y-3 sm:space-y-4">
              <button
                onClick={() => setLiked(!liked)}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2"
              >
                <Heart
                  size={20}
                  className={`sm:size-6 ${liked ? 'fill-pink-500 text-pink-500' : 'text-white'}`}
                />
                <span className="text-white text-sm sm:text-base">1.2K</span>
              </button>

              <button className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                <MessageCircle size={20} className="sm:size-6 text-white" />
                <span className="text-white text-sm sm:text-base">234</span>
              </button>

              <button className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                <Share2 size={20} className="sm:size-6 text-white" />
                <span className="text-white text-sm sm:text-base">مشاركة</span>
              </button>
            </div>
          </div>

          <div className="mt-4 sm:mt-6">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=48&h=48&q=80"
                alt="Profile"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              />
              <div>
                <h3 className="font-bold text-sm sm:text-base">@username</h3>
                <p className="text-gray-600 text-sm">وصف الفيديو هنا مع الهاشتاغ #example</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">فيديوهات مقترحة</h2>
          <div className="space-y-3 sm:space-y-4">
            {Array(5).fill(0).map((_, i) => (
              <div key={i} className="flex space-x-3 sm:space-x-4 cursor-pointer hover:bg-gray-50 p-2 rounded-lg">
                <div className="w-24 sm:w-32 aspect-video bg-gray-100 rounded-lg"></div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">عنوان الفيديو</h3>
                  <p className="text-xs sm:text-sm text-gray-600">@username</p>
                  <p className="text-xs sm:text-sm text-gray-500">1.2K مشاهدة</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFeed;