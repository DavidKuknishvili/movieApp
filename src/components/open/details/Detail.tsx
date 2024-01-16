function Detail({ name, value }: { name: string; value: string | number }) {
    if (value !== 0) {
      return (
        <div className="p-4 md:p-2 lg:p-4 bg-[#252525] flex items-center justify-center flex-col flex-1">
          <div className="text-[#8f8f8f] font-normal">{name}</div>
          <div className="text-white font-semibold text-lg">{value}</div>
        </div>
      );
    } else {
      return null;
    }
  }
  
  export default Detail;
  