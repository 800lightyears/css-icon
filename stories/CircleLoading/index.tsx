import { FC, useMemo } from 'react'
import PropsType from './config/api';

import './index.less';

const PREFIX = 'circleLoading-'

const CircleLoading: FC<PropsType> = (props) => {
  return (
    <div
      className={`${PREFIX}container`}
    >
      {props.text}
    </div>
  );
};

CircleLoading.defaultProps = {

};

export default CircleLoading