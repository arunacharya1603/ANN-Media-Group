import React from 'react';

const FacebookEmbed = () => {
  return (
    <div className="facebook-video-embed">
      <iframe 
        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fannmediagroup%2Fvideos%2F1600799910793279%2F&show_text=true&width=560&t=0" 
        width="560" 
        height="429" 
        style={{ border: 'none', overflow: 'hidden' }} 
        scrolling="no" 
        frameBorder="0" 
        allowFullScreen={true} 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default FacebookEmbed;