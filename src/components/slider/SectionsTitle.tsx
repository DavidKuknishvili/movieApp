function SectionsTitle({ title }: { title: string }) {
    return (
      <div className="flex items-center pl-[46px] gap-2">
        <h1 className="font-sans font-medium text-white text-base md:text-lg my-6 ml-[52px] ">{title}</h1>
      </div>
    );
  }
  
  export default SectionsTitle;
  