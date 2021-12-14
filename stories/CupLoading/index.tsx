import { FC, useMemo } from 'react'
import PropsType from './config/api';

import './index.less';

const PREFIX = 'cupLoading-'

const CupLoading: FC<PropsType> = (props) => {
  return (
    <div
      className={`${PREFIX}container`}
    >
      {props.text}
    </div>
  );
};

CupLoading.defaultProps = {

};

export default CupLoading