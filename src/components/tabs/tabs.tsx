import { useState } from 'react';
import { Film } from '../../types/types';
import { Overview } from './overview/overview';
import { Details } from './details/details';
import { Reviews } from './reviews/reviews';

type TabsProps = {
  film: Film;
};

export const Tabs = ({ film }: TabsProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState('Overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <Overview film={film} />;
      case 'Details':
        return <Details film={film} />;
      case 'Reviews':
        return <Reviews film={film} />;
      default:
        return null;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li
            className={`film-nav__item ${
              activeTab === 'Overview' ? 'film-nav__item--active' : ''
            }`}
          >
            <a
              className="film-nav__link"
              onClick={() => setActiveTab('Overview')}
            >
              Overview
            </a>
          </li>
          <li
            className={`film-nav__item ${
              activeTab === 'Details' ? 'film-nav__item--active' : ''
            }`}
          >
            <a
              className="film-nav__link"
              onClick={() => setActiveTab('Details')}
            >
              Details
            </a>
          </li>
          <li
            className={`film-nav__item ${
              activeTab === 'Reviews' ? 'film-nav__item--active' : ''
            }`}
          >
            <a
              className="film-nav__link"
              onClick={() => setActiveTab('Reviews')}
            >
              Reviews
            </a>
          </li>
        </ul>
      </nav>
      {renderTabContent()}
    </div>
  );
};
