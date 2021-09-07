import { memo } from 'react';
import classnames from 'classnames';

import styles from './{{name}}.module.scss';

type Props = {
  className?: string;
};

function {{name}}({ className }: Props) {
  return <div className={classnames(styles.{{name}}, className)}>{{name}} component</div>;
}

export default memo({{name}});
