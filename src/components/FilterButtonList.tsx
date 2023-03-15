import { useNavigate, useParams } from 'react-router-dom';
import { IChart } from '@/interface/chartData';
import { generateIdList } from '@/lib/utils/generate';

const FilterButtonList = ({ data }: { data: IChart[] }) => {
  const navigate = useNavigate();
  const idList = generateIdList(data);
  const { id } = useParams();
  return (
    <div>
      <button
        className={!id ? 'active' : 'normal'}
        onClick={() => navigate('/')}
      >
        전체보기
      </button>
      {idList.map((chartId) => {
        return (
          <button
            className={id === chartId ? 'active' : 'normal'}
            onClick={() => navigate(`/${chartId}`)}
            key={chartId}
          >
            {chartId}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtonList;
