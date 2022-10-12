import COPY from '../../assets/images/copy-24.png';
import SOUL from '../../assets/images/soul-16.png';
import './dropdownMenu.scss';

const DropdownMenu = props => {
  return (
    <div className="dd-wrapper" onClick={props.handleClickDropdown}>
      <div className="dd-container">
        <div className="dd-menu">
          <span>
            network:
            {props.network == '8217' ? (
              <span className="dd-txt-green"> mainnet</span>
            ) : props.network == '1001' ? (
              <span className="dd-txt-red"> testnet</span>
            ) : (
              <span className="dd-txt-red"> invalid</span>
            )}
          </span>
        </div>
        <div className="dd-menu">
          <span className="dd-txt-common flex-row-dir">
            <div>
              <span>0xSOUL: </span>
            </div>
            {props.balance > 0 ? (
              <div className="img-column-center">
                <img src={SOUL} alt="soul-icon-16" width="24" height="24"></img>
              </div>
            ) : (
              <span className="txt-red"> INVALID</span>
            )}
          </span>
        </div>
        <div className="dd-menu" onClick={props.handleCopyAddress}>
          <span className="txt-copy-address dd-txt-common">Copy address</span>
          <img src={COPY} className="copy-icon" alt="copy"></img>
        </div>
        <div className="dd-menu">
          <span className="dd-link-wrapper">
            <a
              href={`https://scope.klaytn.com/account/${props.address}?tabId=approvals&sub=kip7`}
              target="_blank"
              className="dd-link txt-deco-none dd-txt-common"
            >
              View on explorer
            </a>
          </span>
        </div>
        <div className="dd-menu">
          <span className="dd-txt-common" onClick={props.handleDisconnect}>
            Disconnect
          </span>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
