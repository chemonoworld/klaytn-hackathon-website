import COPY from '../../assets/images/copy-24.png';
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
          <span className="dd-txt-common">
            0xSOUL:
            {props.balance > 0 ? (
              <span className="txt-green"> {props.balance}</span>
            ) : (
              <span className="txt-red"> 0</span>
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
