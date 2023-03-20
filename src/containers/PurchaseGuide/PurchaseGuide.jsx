import React from 'react';
import './purchaseGuide.css';

export const PurchaseGuide = ({}) => {
  return (
    <>
      <div>
        <p className="purchase-guide_headline">구매 환불/취소/교환 안내</p>
      </div>
      <div className="purchase-guide_content">
        <div>
          <p>
            MONSTERA은 익명 거래를 기반으로 판매자가 판매하는 상품을 구매자가
            실시간으로 구매하여 거래를 체결합니다.
          </p>
          <ul>
            <li>단순 변심이나 실수에 의한 취소/교환/반품이 불가능합니다.</li>
            <li>
              상품을 원하지 않으시는 경우 언제든지 MONSTERA에서 재판매를 하실 수
              있습니다.
            </li>
            <li>
              상품 수령 후, 이상이 있는 경우 MONSTERA 고객센터로 문의해주시기
              바랍니다.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

PurchaseGuide.prototypes = {};
