import React from 'react';
import './inspectionGuide.css';

export const InspectionGuide = ({}) => {
  return (
    <>
      <div className="product-description">
        <p className="product-description_headline">검수안내</p>
      </div>
      <div className="product-description_content">
        <div className="product-description_section-check">
          <p>
            판매자의 상품이 검수센터에 도착하면 전담 검수팀이 철저한 분석과
            검사로 정가품 확인을 진행합니다.
          </p>
          <ul>
            <li>
              검수센터에서는 정가품 여부를 확인하기 위하여, 지속적으로 데이터를
              쌓고 분석하여 기록하고 있습니다.
            </li>
            <li>
              업계 전분가로 구성된 검수팀은 박스와 상품의 라벨에서 바느질, 접착,
              소재 등 모든 것을 검수합니다.
            </li>
          </ul>
        </div>
        <div className="product-description_section-result">
          <p>
            검수 결과는 불합격&bull;검수 보류&bull;합격의 세가지 상태로 결과가
            변경됩니다.
          </p>
          <ul>
            <li>검수 합격: MONTERA 검수택(Tag)이 부착되어 배송을 준비함.</li>
            <li>
              검수 보류: 앱에서 사진으로 상품의 상태 확인 및 구매 여부를 선택.
              (24시간 이후 자동 검수 합격)
            </li>
            <li>
              검수 불합격: 즉시 거래가 취소되고 구매하신 금액을 환불
              처리함.(환불 수단은 결제 수단과 동일)
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

InspectionGuide.prototypes = {};
