import { FC, useMemo } from 'react'
import PropsType from './config/api';

import './index.less';

const PREFIX = 'openClose-'

const OpenClose: FC<PropsType> = (props) => {
  return (
    <div
      className={`${PREFIX}container`}
    />
  );
};

OpenClose.defaultProps = {

};

export default OpenClose