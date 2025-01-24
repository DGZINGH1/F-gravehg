import React from 'react';
import { Pencil, Settings, Grid, Bookmark as BookmarkSimple, Heart, ArrowRight } from 'lucide-react';

interface ProfileProps {
  onNavigate: (view: string) => void;
}

function Profile({ onNavigate }: ProfileProps) {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative h-32 sm:h-48 bg-gradient-to-r from-pink-400 to-purple-500">
          <button
            onClick={() => onNavigate('dashboard')}
            className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center space-x-2 text-sm sm:text-base hover:bg-white/20 transition-colors"
          >
            <ArrowRight size={16} className="sm:size-5" />
            <span>رجوع</span>
          </button>
          <div className="absolute -bottom-12 sm:-bottom-16 left-6 sm:left-8">
            <div className="relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 bg-pink-500 rounded-full p-1.5 sm:p-2 shadow-lg">
                <Pencil size={14} className="sm:size-4 text-white" />
              </button>
            </div>
          </div>
          <div className="absolute top-4 left-4">
            <button className="bg-white/10 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center space-x-2 text-sm sm:text-base">
              <Settings size={16} className="sm:size-5" />
              <span>تعديل الملف الشخصي</span>
            </button>
          </div>
        </div>

        <div className="pt-16 sm:pt-20 px-6 sm:px-8 pb-6 sm:pb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 sm:gap-0">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">اسم المستخدم</h1>
              <p className="text-gray-600 text-sm sm:text-base">@username</p>
              <p className="mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base max-w-2xl">
                وصف الملف الشخصي يظهر هنا. يمكن للمستخدم تعديل هذا النص ليعبر عن نفسه.
              </p>
            </div>
            <div className="flex space-x-6 sm:space-x-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold">150</div>
                <div className="text-gray-600 text-sm sm:text-base">فيديو</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold">10.5K</div>
                <div className="text-gray-600 text-sm sm:text-base">متابع</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold">1.2M</div>
                <div className="text-gray-600 text-sm sm:text-base">إعجاب</div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 border-t pt-6 sm:pt-8">
            <div className="flex space-x-6 sm:space-x-8 mb-4 sm:mb-6">
              <button className="flex items-center space-x-2 text-pink-500 border-b-2 border-pink-500 pb-2">
                <Grid size={18} className="sm:size-5" />
                <span className="text-sm sm:text-base">الفيديوهات</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500">
                <BookmarkSimple size={18} className="sm:size-5" />
                <span className="text-sm sm:text-base">المحفوظات</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {Array(12).fill(0).map((_, i) => (
                <div key={i} className="aspect-[9/16] sm:aspect-video bg-gray-100 rounded-lg overflow-hidden relative group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 sm:p-4">
                    <div className="text-white">
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <Heart size={14} className="sm:size-4" />
                        <span className="text-xs sm:text-sm">1.2K</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;