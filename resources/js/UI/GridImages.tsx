import { isModalOpen } from '@/services/modalLock';
import { disableScroll } from '@/services/scrollLock';
import { motion } from 'framer-motion';

type ImgsProps = {
    imgs: string[];
    className?: string;
    onSelect?: (img: string) => void;
};

function GridImages({ imgs, className, onSelect }: ImgsProps) {
    return (
        <div className="grid grid-cols-3 max-md:flex max-md:flex-col">
            {imgs.map((img) => (
                <motion.img
                    layoutId={img}
                    key={img}
                    src={`/${img}`}
                    alt={img.replace(/\.[^/.]+$/, '')}
                    className={className}
                    onClick={() => {
                        onSelect?.(img);
                        isModalOpen.current = true;
                        disableScroll();
                    }}
                    whileHover={{ scale: 1.05 }}
                />
            ))}
        </div>
    );
}

export default GridImages;
