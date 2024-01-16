function Description({ description }: { description: string }) {
    return (
      <div className="bg-[#252525] w-full p-8">
        <div className="text-[#dddddd] font-bold text-xl">Overview</div>
        <div className="text-[#8f8f8f] py-3">{description}</div>
      </div>
    );
  }
  
  export default Description;
  