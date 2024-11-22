
import * as Icons from '@ant-design/icons';
import PropTypes from 'prop-types';

const DynamicIconExample = ({ iconName }) => {
  const IconComponent = Icons[iconName];
  return IconComponent ? <IconComponent style={{ fontSize: 24, color: 'green' }} /> : null;
};
DynamicIconExample.propTypes={
    iconName: PropTypes.string,
}
export default DynamicIconExample;
