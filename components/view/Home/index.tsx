import BaseLayout from "layout/BaseLayout";
// import BaseTickerItem from "components/common/BaseTickerItem";
// import Chart from "components/Chart";
import BaseButton from "components/common/Button/BaseButton";
import HeroImage from "assets/icons/chart.svg";
import Image from "next/image";

const Home = () => {
  return (
    <BaseLayout>
      <div className="flex items-center justify-center">
        <div className="mr-8">
          <section>
            <p className="text-4xl font-bold">
              <span className="text-blue-300">배당</span>, 이제는 어렵지 않아요
            </p>
            <p className="text-gray-500 mt-2">배당의 모든 것, 배당금닷컴</p>
          </section>
          <section className="flex mt-8">
            <BaseButton text="배당금이란?"></BaseButton>
            <BaseButton text="배당금닷컴 둘러보기"></BaseButton>
          </section>
        </div>
        <Image src={HeroImage} alt="hero" width="360"></Image>
      </div>
      {/* <div className="mb-4">배당금 차트</div>
      <div className="w-full flex">
        <Chart />
        <div className="w-1/3 ml-8">
          <h2 className="text-lg">추천 배당종목</h2>
          <ul className="flex flex-col h-full">
            <BaseTickerItem />
            <BaseTickerItem />
            <BaseTickerItem />
            <BaseTickerItem />
            <BaseTickerItem />
          </ul>
        </div>
      </div> */}
    </BaseLayout>
  );
};

export default Home;
