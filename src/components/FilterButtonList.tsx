import { useNavigate } from 'react-router-dom';
import { IChart } from '@/interface/chartData';
import { generateIdList } from '@/lib/utils/generate';

const FilterButtonList = ({ data }: { data: IChart[] }) => {
  const navigate = useNavigate();
  const idList = generateIdList(data);

  return (
    <div>
      <button onClick={() => navigate('/')}>전체보기</button>
      {idList.map((id) => {
        return (
          <button onClick={() => navigate(`/${id}`)} key={id}>
            {id}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtonList;
