
function Notification({title, content}:{title:string, content:string}) {
  return (
    <div className="bg-[#515151] w-fit text-white p-4 rounded-md shadow-md absolute bottom-8 right-8">
        <div className="w-fill rounded-full h-1 bg-gradient-to-tr from-[#00c0cc] via-[#c800c0] to-[#00c0cc38] bg-opacity-25 "></div>
      <p className="font-bold">{title}</p>
      <p>{content}</p>
    </div>
  );
}

export default Notification;
