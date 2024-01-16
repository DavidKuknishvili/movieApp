import Detail from "./Detail";

interface DetailsInterface {
    original_Language: string;
    budget: number;
    status: string;
    durations: string;
  }
  
  function Details({
    original_Language,
    budget,
    status,
    durations,
  }: DetailsInterface) {
    const data = [
      {
        name: "Original Language",
        value: original_Language,
      },
      {
        name: "Duration",
        value: durations,
      },
      {
        name: "Budget",
        value: budget,
      },
      {
        name: "Status",
        value: status,
      },
    ];
  
    return (
      <div className="flex gap-5 flex-wrap">
        {data.map((item, index) => {
          if (item.value) {
            return <Detail key={index} name={item.name} value={item.value} />;
          }
          return null;
        })}
      </div>
    );
  }
  
  export default Details;
  