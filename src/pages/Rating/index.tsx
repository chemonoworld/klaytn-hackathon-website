import { useEffect, useState, useCallback } from 'react';
import Button from '../../components/Button';
import decentralized from '../../assets/images/decentralized.png';
import transparency from '../../assets/images/transparency.png';
import culture from '../../assets/images/culture.png';
import './rating.scss';
import { test } from '../../modules/useCaver';
import { Link } from 'react-router-dom';

interface IRating {
  culture: string;
  transparency: string;
  decentralized: string;
}

const Rating = [
  {
    dao: 'PDAO',
    link: 'https://github.com/postech-dao',
    culture: 100,
    transparency: 100,
    decentralization: 100,
  },
  {
    dao: 'ADAO',
    link: 'https://github.com/postech-dao',
    culture: 50,
    transparency: 70,
    decentralization: 60,
  },
  {
    dao: 'BDAO',
    link: 'https://github.com/postech-dao',
    culture: 90,
    transparency: 50,
    decentralization: 80,
  },
];

function RatingPage() {
  const [rating, setRating] = useState<IRating>();

  return (
    <div className="root-container">
      <div className="rating-container">
        <div className="rating-table-header">
          <div className="rating-table-title">Rank of DAOs in 0xSBT</div>
        </div>
        <div className="rating-table-desc">
          <div className="rating-table-desc-wrapper">
            <p>
              0xSBT provides DAO's score for Culture, Transparency, and
              Decentralization. Each scores will be judged by the 0xSBT
              committee with fair standards.
            </p>
            <p>
              Culture: Its score will be high if a DAO has its own culture for
              their community.
            </p>
            <p>
              Transparency: Its score will be high if a DAO opens their data to
              the public.
            </p>
            <p>
              Decentralization: Its score will be high if a DAO has its own
              governance system.
            </p>
          </div>
        </div>
        <div className="table">
          <div className="heading">
            <div className="cell">DAOs</div>
            <div className="cell">Culture</div>
            <div className="cell">Transparency</div>
            <div className="cell">Decentralization</div>
            <div className="cell">Badges</div>
          </div>
          {Rating.map(item => (
            <div className="row">
              <div className="content dao">
                <a href={`${item.link}`}>{item.dao}</a>
              </div>
              <div className="content">
                <p>{item.culture}</p>
              </div>
              <div className="content">
                <p>{item.transparency}</p>
              </div>
              <div className="content">
                <p>{item.decentralization}</p>
              </div>
              <div className="content">
                {/**item.culture >= 60 && <img src={culture} className="badge" />*/}
                {item.transparency >= 60 && (
                  <img src={transparency} className="badge" />
                )}
                {item.decentralization >= 60 && (
                  <img src={decentralized} className="badge" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RatingPage;
