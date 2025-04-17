
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import VideoPlayer from '../components/VideoPlayer';

const VideoPlayerPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="pt-24 pb-20">
        <VideoPlayer />
      </main>
      <Footer />
    </div>
  );
};

export default VideoPlayerPage;
