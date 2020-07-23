import React from "react";

const Card = ({ card }) => {
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <div className="cardContainer">
      <div className="card">
        <span className="cardTitle">{card.name}</span>
        <span className="cardPrice">
          {`$${card.usdPriceInCents / 100} /
                    ${card.ethPriceInWei / 10 ** 18} ETH`}
        </span>
        <div className="cardFooter">
          <span className="cardFooterCap">
            {`$${formatNumber(card.usdCapitalization)}`}
          </span>
          <span className="cardFooterPercent">{`+${card.percentageChange}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
