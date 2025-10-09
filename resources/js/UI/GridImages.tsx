type ImgsProps = {
    imgs: string[];
    className?: string;
};
function GridImages({ imgs, className }: ImgsProps) {
    return (
        <div className="grid grid-cols-3">
            {imgs.map((img) => (
                <img className={className} src={`/${img}`} key={img} alt={img.replace(/\.[^/.]+$/, '')} />
            ))}
        </div>
    );
}

export default GridImages;
