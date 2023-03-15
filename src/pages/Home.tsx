import Chart from '@/components/Chart';
import FilterButtonList from '@/components/FilterButtonList';
import useChart from '@/lib/hooks/useChart';

const Home = () => {
  const { charts, start, end } = useChart();

  return (
    <div className="outer">
      <FilterButtonList data={charts} />
      <Chart data={charts} start={start} end={end} />
    </div>
  );
};

export default Home;
