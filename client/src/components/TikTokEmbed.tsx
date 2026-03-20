import { useEffect, useRef } from "react";

declare global {
  interface Window {
    tiktok?: {
      embed?: {
        lib?: {
          render: (element: HTMLElement) => void;
        };
      };
    };
  }
}

let scriptLoaded = false;

function loadTikTokScript() {
  if (scriptLoaded) return;
  scriptLoaded = true;
  const script = document.createElement("script");
  script.src = "https://www.tiktok.com/embed.js";
  script.async = true;
  document.body.appendChild(script);
}

interface TikTokEmbedProps {
  videoUrl: string;
}

export function TikTokEmbed({ videoUrl }: TikTokEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadTikTokScript();

    // Give the script time to load, then render embeds
    const timer = setTimeout(() => {
      if (window.tiktok?.embed?.lib?.render && containerRef.current) {
        window.tiktok.embed.lib.render(containerRef.current);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [videoUrl]);

  return (
    <div ref={containerRef} className="flex justify-center">
      <blockquote
        className="tiktok-embed"
        cite={videoUrl}
        data-video-id={videoUrl.split("/").pop()}
        style={{ maxWidth: "325px", minWidth: "280px" }}
      >
        <section>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={videoUrl}
            className="text-foreground/60 hover:text-foreground text-xs tracking-widest uppercase transition-colors"
          >
            Watch on TikTok
          </a>
        </section>
      </blockquote>
    </div>
  );
}
