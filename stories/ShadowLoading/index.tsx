import { FC, useMemo } from 'react'
import PropsType from './config/api';

import './index.less';

const PREFIX = 'shadowLoading-'

const ShadowLoading: FC<PropsType> = (props) => {
  return (
    <div
      className={`${PREFIX}container`}
    >
      {props.text}
    </div>
  );
};

ShadowLoading.defaultProps = {

};

export default ShadowLoading