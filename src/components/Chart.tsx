import { useNavigate, useParams } from 'react-router-dom';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Bar,
  ComposedChart,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import CustomTooltip from '@/components/CustomTooltips';
import { IChartProps } from '@/interface/props';
import CustomDot from './CustomDot';
import { CategoricalChartState } from 'recharts/types/chart/generateCategoricalChart';

const Chart = ({ data, start, end }: IChartProps) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const onFilter = (obj: CategoricalChartState) => {
    const { activePayload } = obj;
    if (activePayload) {
      navigate(`/${activePayload[0].payload.id}`);
    }
  };

  return (
    <>
      <h1>{id ? id : '전체목록'}</h1>
      <h2>{`${start} ~ ${end}`}</h2>
      <div className="inner">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 40,
              right: 30,
              left: 20,
              bottom: 40,
            }}
            onClick={(obj) => onFilter(obj)}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis
              yAxisId="left"
              label={{ value: 'value_bar', position: 'top', offset: 20 }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 150]}
              label={{ value: 'value_area', position: 'top', offset: 20 }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ strokeWidth: 5, stroke: '#f78c76' }}
              wrapperStyle={{ outline: 'none' }}
            />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="value_bar"
              fill={'#f78c76'}
              barSize={20}
            >
              {data.map((entry, index) => {
                return (
                  <Cell
                    key={`Cell-${index}`}
                    fill={
                      !id ? '#f78c76' : entry.id === id ? '#f78c76' : '#bababa'
                    }
                    cursor="pointer"
                  />
                );
              })}
            </Bar>
            <Area
              yAxisId="right"
              type="monotone"
              dataKey="value_area"
              fill="#76b6ff"
              cursor="pointer"
              dot={(props) => (
                <CustomDot
                  key={props.key}
                  data={props.payload}
                  cx={props.cx}
                  cy={props.cy}
                  id={id}
                />
              )}
              activeDot={{ stroke: '#76b6ff', strokeWidth: 2, r: 10 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Chart;
