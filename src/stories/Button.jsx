import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <div>
      <div className='border border-gray-300 rounded-lg p-4 flex justify-between items-center max-w-sm mx-auto'>
        <div className='text-2xl font-medium'>
          128<span className='text-xs align-super'>GB²</span>
        </div>
        <div className='text-right text-sm'>
          <div>From $999</div>
          <div>or $41.62/mo.</div>
          <div>for 24 mo. *</div>
        </div>
      </div>
    </div>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
