import { ICustomDot } from '@/interface/props';

const CustomDot = ({ data, cx, cy, id }: ICustomDot) => {
  if (data.id === id) {
    return <circle cx={cx} cy={cy} r={4} stroke="black" fill="#76b6ff" />;
  }
  return <circle r={0} />;
};

export default CustomDot;
