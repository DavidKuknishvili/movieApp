function Genres({ genres }: { genres: string[] }) {
    return (
      <div className="flex gap-5 md:gap-25 md:flex-wrap">
        {genres.map((genre, index) => {
          return (
            <span
              key={index}
              className='bg-[#313131] bg-opacity-90 rounded-tl-xl rounded-br-xl px-2 py-1 text-xs md:text-sm text-teal-300'
            >
              {genre}
            </span>
          );
        })}
      </div>
    );
  }
  
  export default Genres;
  