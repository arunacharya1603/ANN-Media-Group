import React, { useEffect } from 'react';

const TwitterEmbed = () => {
  useEffect(() => {
    const scriptId = 'twitter-embed-script';

    // Check if the Twitter embed script is already present
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.defer = true;
      script.id = scriptId;

      // Append the script to the body
      document.body.appendChild(script);
    } else {
      // If the script is already loaded, reinitialize the widgets
      if (window.twttr) {
        window.twttr.widgets.load();
      }
    }
  }, []);

  return (
    <div className="twitter-embed-container">
      {/* Embed Twitter tweet */}
      <blockquote
        className="twitter-tweet"
        dangerouslySetInnerHTML={{
          __html: `<a href="https://twitter.com/AnnMediaGroup/status/1847223564262424691?ref_src=twsrc%5Etfw">Tweets by AnnMediaGroup</a>`,
        }}
      />
    </div>
  );
};

export default TwitterEmbed;
