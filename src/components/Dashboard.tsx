import React from 'react';
import { Radio, Users, PlaySquare, TrendingUp } from 'lucide-react';

interface DashboardProps {
  onNavigate: (view: string) => void;
}

function Dashboard({ onNavigate }: DashboardProps) {
  const features = [
    { icon: Radio, title: 'شراء إعلان', description: 'أنشئ حملتك الإعلانية' },
    { icon: Users, title: 'المؤثرين', description: 'تواصل مع المؤثرين' },
    { icon: PlaySquare, title: 'عرض إعلانات', description: 'شاهد الإعلانات النشطة' },
    { icon: TrendingUp, title: 'الإحصائيات', description: 'تتبع أداء حملاتك' },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">مرحباً بك في منصتنا</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        {features.map((Feature, index) => (
          <button
            key={index}
            className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 flex flex-col items-center text-center"
            onClick={() => onNavigate(Feature.title.toLowerCase())}
          >
            <Feature.icon size={36} className="text-pink-500 mb-4 sm:size-12" />
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{Feature.title}</h2>
            <p className="text-sm sm:text-base text-gray-600">{Feature.description}</p>
          </button>
        ))}
      </div>

      <div className="mt-12 sm:mt-16 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">أحدث الفيديوهات</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {Array(8).fill(0).map((_, i) => (
            <div key={i} className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-semibold text-sm sm:text-base">عنوان الفيديو</h3>
                  <p className="text-xs sm:text-sm opacity-75">@username</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;