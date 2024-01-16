import SectionsTitle from "../components/slider/SectionsTitle";
import { UPCOMING_URL, NEW_RELEASE_URL, POPULAR_URL } from "../api/config";
import CardContent from "../components/slider/CardContent";
import { CardInterface } from "../../interfaces";
import Carousel from "../components/carousel/Carousel";
import { CardCarousel } from "../components/slider/CardCarousel";
import PopularComponent from "../components/PopularSection/PopularComponent";
import useGetData from "../hooks/getData/useGetData";

const Home: React.FC = () => {

  const { data:newRelease } = useGetData(NEW_RELEASE_URL);
  const { data:popular } = useGetData(POPULAR_URL);
  const { data:upComming } = useGetData(UPCOMING_URL);

  return (
    <>
      <div>
        <Carousel data={newRelease?.slice(0, 3) as CardInterface[]} />
      </div>
      <div>
        <SectionsTitle title="New Releases" />
        <CardCarousel
          data={newRelease?.slice(3) as CardInterface[]}
          content={
            <CardContent
              path={"movie/"}
              data={newRelease?.slice(3) as CardInterface[]}
            />
          }
        />
        <SectionsTitle title="Popular Movies" />
        <PopularComponent data={popular as CardInterface[]} />
        <SectionsTitle title="Upcoming Movie" />
        <CardCarousel
          content={
            <CardContent
              path={"movie/"}
              type={"Upcoming"}
              data={upComming as CardInterface[]}
            />
          }
          type={'Upcoming'}
          data={upComming as CardInterface[]}
        />
      </div>
    </>
  );
};

export default Home;
