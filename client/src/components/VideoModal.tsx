import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  // Extract video ID for YouTube embed if possible, otherwise use passed URL
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/shorts")) {
      const parts = url.split("/");
      const id = parts[parts.length - 1].split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-4xl bg-black border border-white/10 rounded-lg overflow-hidden relative shadow-2xl shadow-red-900/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-white/10 bg-white/5">
              <h3 className="text-sm font-mono uppercase tracking-widest text-white/80">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                width="100%"
                height="100%"
                src={embedUrl}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
