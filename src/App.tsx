import React, { useState, useEffect } from 'react';
import { UserCircle2, Radio, Users, PlaySquare, Plus, Play, Pause, Heart, MessageCircle, Share2, Pencil } from 'lucide-react';
import { supabase } from './lib/supabase';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import VideoFeed from './components/VideoFeed';
import Profile from './components/Profile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <header className="bg-white shadow-sm fixed top-0 w-full z-50">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4 sm:space-x-8">
            <h1 className="text-xl sm:text-2xl font-bold text-pink-500">موقعك</h1>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => setCurrentView('dashboard')}
                className={`flex items-center space-x-2 ${currentView === 'dashboard' ? 'text-pink-500' : 'text-gray-600'}`}
              >
                <UserCircle2 size={20} />
                <span>الرئيسية</span>
              </button>
              <button 
                onClick={() => setCurrentView('videos')}
                className={`flex items-center space-x-2 ${currentView === 'videos' ? 'text-pink-500' : 'text-gray-600'}`}
              >
                <PlaySquare size={20} />
                <span>الفيديوهات</span>
              </button>
            </nav>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="bg-pink-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base">
              <Plus size={18} className="sm:size-5" />
              <span>إنشاء</span>
            </button>
            <div className="relative group">
              <button 
                onClick={() => setCurrentView('profile')}
                className="flex items-center"
              >
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=40&h=40&q=80"
                  alt="Profile"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                />
              </button>
              <div className="hidden group-hover:block absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                <button
                  onClick={handleLogout}
                  className="w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  تسجيل الخروج
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-14 sm:pt-16">
        {currentView === 'dashboard' && <Dashboard onNavigate={setCurrentView} />}
        {currentView === 'videos' && <VideoFeed onNavigate={setCurrentView} />}
        {currentView === 'profile' && <Profile onNavigate={setCurrentView} />}
      </main>
    </div>
  );
}

export default App;