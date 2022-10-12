import { useEffect, useState, useCallback } from 'react';
import Button from '../../components/Button';
import decentralized from '../../assets/images/decentralized.png';
import transparency from '../../assets/images/transparency.png';
import culture from '../../assets/images/culture.png';
import './rating.scss';
import { viewDaos, viewScore, daoVote } from '../../modules/useCaver';

interface IRating {
  dao: string;
  daoAddress: string;
  link: string;
  culture: string;
  transparency: string;
  decentralization: string;
}

function RatingPage() {
  const [rating, setRating] = useState<IRating[]>([]);
  const [running, setRunning] = useState<boolean>(false);
  const [vote, setVoting] = useState<number[]>([]);

  const addrDiaplay = useCallback((addr: string) => {
    return addr.slice(0, 6) + '...' + addr.slice(-4);
  }, []);

  const loadData = useCallback(async () => {
    const result = await viewDaos();
    result.map(async (item: any) => {
      const score = await viewScore(item);
      const rate: IRating = {
        dao: addrDiaplay(item),
        daoAddress: item,
        link: `https://scope.klaytn.com/account/${item}?tabId=approvals&sub=kip7`,
        culture: score[0],
        transparency: score[1],
        decentralization: score[2],
      };
      setRating(rating => {
        if (rating.find(item => item.dao === rate.dao)) {
          return rating;
        }
        return [...rating, rate];
      });
    });
  }, []);
  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleClickSwitch = useCallback(() => {
    setRunning(running => !running);
  }, []);

  //get input and set vote
  const handleChangeVote = useCallback((e: any, idx: number) => {
    const value = Number(e.target.value);
    if (value > 100) {
      return;
    }
    setVoting(vote => {
      const newVote = [...vote];
      newVote[idx] = value;
      return newVote;
    });
  }, []);

  const handleClickVote = useCallback(
    async (addr?: string) => {
      // 만약 vote내에 100 이상의 수가 있다면 return
      if (vote.find(item => item > 100)) {
        return;
      }
      try {
        const result = await daoVote(addr, vote);
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    },
    [vote],
  );

  return (
    <div className="root-container">
      <div className="rating-container">
        <div className="rating-table-header">
          <div className="rating-table-title">Scores of DAOs in 0xSBT</div>
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
            {!running && (
              <>
                <div className="cell">Badges</div>
                <Button
                  onClick={handleClickSwitch}
                  className="btn-main-section"
                >
                  <div className="main-section-btn-txt">
                    <span>Vote For DAO</span>
                  </div>
                </Button>
              </>
            )}
            {running && (
              <Button onClick={handleClickSwitch} className="btn-main-section">
                <div className="main-section-btn-txt">
                  <span>Back to view</span>
                </div>
              </Button>
            )}
          </div>

          {!running &&
            rating.map((item, idx) => (
              <div key={idx} className="row">
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
                  {Number(item.culture) >= 60 && (
                    <img src={culture} className="badge" />
                  )}
                  {Number(item.transparency) >= 60 && (
                    <img src={transparency} className="badge" />
                  )}
                  {Number(item.decentralization) >= 60 && (
                    <img src={decentralized} className="badge" />
                  )}
                </div>
              </div>
            ))}
          {running &&
            rating.map((item, idx) => (
              <div key={idx} className="row">
                <div className="content dao">
                  <a href={`${item.link}`}>{item.dao}</a>
                </div>
                <div className="content">
                  <p>
                    <input
                      className="input"
                      type="text"
                      placeholder="Culture score"
                      onChange={e => {
                        handleChangeVote(e, 0);
                      }}
                    />
                  </p>
                </div>
                <div className="content">
                  <p>
                    <input
                      className="input"
                      type="text"
                      placeholder="Transparency score"
                      onChange={e => {
                        handleChangeVote(e, 1);
                      }}
                    />
                  </p>
                </div>
                <div className="content">
                  <p>
                    <input
                      className="input"
                      type="text"
                      placeholder="Decentralization score"
                      onChange={e => {
                        handleChangeVote(e, 2);
                      }}
                    />
                  </p>
                </div>
                <Button
                  onClick={() => {
                    handleClickVote(item.daoAddress);
                  }}
                  className="btn-main-section"
                >
                  <div className="main-section-btn-txt">
                    <span>Vote For DAO</span>
                  </div>
                </Button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default RatingPage;
