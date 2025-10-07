// ImageGallery.tsx
import Image, { StaticImageData } from "next/image";

interface ImageGalleryProps {
    images: {
        src: string | StaticImageData;
        alt: string;
    }[];
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {
    return (
        <div className="flex overflow-x-auto gap-6 py-8 px-4 -mx-4">
            <div className="flex gap-6">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`relative min-w-[300px] h-[300px] transform 
                            ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'}
                            hover:rotate-0 transition-all duration-300 ease-in-out
                            hover:scale-105 hover:z-10 hover:shadow-xl`}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover rounded-lg shadow-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};