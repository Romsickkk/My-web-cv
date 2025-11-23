function Arrows(key?: any) {
    return (
        <div key={key} className="m-15 flex items-center space-x-5 p-6">
            <div className="animate-draw-x-right h-1 w-16 rounded bg-black opacity-0"></div>

            <div className="flex flex-row space-x-2">
                <div className="animate-draw h-4 w-1 rotate-[135deg] bg-black opacity-0"></div>
                <div className="animate-draw h-4 w-1 rotate-[135deg] bg-black opacity-0"></div>
            </div>

            <div className="relative flex items-center justify-center">
                <div className="animate-draw absolute ml-2.5 h-4 w-0 rotate-45 border-r-4 bg-black opacity-0"></div>

                <div className="animate-draw absolute mr-2 h-4 w-0 -rotate-45 border-r-4 bg-black opacity-0"></div>
            </div>

            <div className="flex flex-row space-x-2">
                <div className="animate-draw h-4 w-1 rotate-[43deg] bg-black opacity-0"></div>
                <div className="animate-draw h-4 w-1 rotate-[43deg] bg-black opacity-0"></div>
            </div>

            <div className="animate-draw-x-left h-1 w-16 rounded bg-black opacity-0"></div>
        </div>
    );
}

export default Arrows;
