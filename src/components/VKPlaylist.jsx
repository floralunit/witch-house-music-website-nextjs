'use client'

import { useEffect, useRef } from 'react';

export default function VKPlaylist({
  playlistId,
  ownerId,
  width = 400,
  hash
}) {
  const containerRef = useRef(null);
  const renderedRef = useRef(false); // 💥 защита от двойного рендера

  useEffect(() => {
    if (renderedRef.current) return;

    const container = containerRef.current;
    if (!container) return;

    const renderPlaylist = () => {
      if (!window.VK || renderedRef.current) return;

      renderedRef.current = true;

      container.innerHTML = '';

      window.VK.Widgets.Playlist(
        container.id,
        ownerId,
        playlistId,
        hash,
        { width }
      );
    };

    if (!window.VK) {
      let script = document.querySelector(
        'script[src="https://vk.com/js/api/openapi.js?173"]'
      );

      if (!script) {
        script = document.createElement('script');
        script.src = 'https://vk.com/js/api/openapi.js?173';
        script.async = true;

        script.onload = renderPlaylist;
        document.head.appendChild(script);
      } else {
        script.addEventListener('load', renderPlaylist);

        if (window.VK) {
          renderPlaylist();
        }
      }
    } else {
      renderPlaylist();
    }

  }, [playlistId, ownerId, hash, width]);

  return (
    <div
      ref={containerRef}
      id={`vk_playlist_${ownerId}_${playlistId}`}
      style={{ margin: '0 auto', textAlign: 'center' }}
    />
  );
}