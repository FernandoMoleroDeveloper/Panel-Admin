import './HomePage.scss';
import { FormattedMessage } from 'react-intl';
const HomePage = () => {
  return (
    <div className='home'>
      <h1>
        <FormattedMessage id='home:welcome' />
      </h1>
      <p>
        <FormattedMessage id='home:userManagement' />
      </p>
      <p>
        <FormattedMessage id='home:apiDisclaimer' />
      </p>
    </div>
  );
};

export default HomePage;
