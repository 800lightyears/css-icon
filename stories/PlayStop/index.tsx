import { FC, useMemo } from 'react'
import PropsType from './config/api';

import './index.less';

const PREFIX = 'playStop-'

const PlayStop: FC<PropsType> = (props) => {
  return (
    <div
      className={`${PREFIX}container`}
    />
  );
};

PlayStop.defaultProps = {

};

export default PlayStop