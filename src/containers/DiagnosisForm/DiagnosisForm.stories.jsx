import React from 'react';
import { SimpleAccordion } from './DiagnosisForm';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'Container/DiagnosisForm',
  component: SimpleAccordion,
  tags: ['autodocs'],
};

export const Default = () => {
  const args = {
    disabled: false,
    square: false,
    expanded: true,
    contents: [
      {
        title: 'Content Title',
        description:
          ['Content description'],
      },
    ],
  };
  const [expanded, setExpanded] = React.useState(false);
  return (
    <SimpleAccordion
      {...args}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    />
  );
}

export const Disabled = () => {
  const args = {
    disabled: true,
    square: false,
    expanded: true,
    contents: [
      {
        title: 'Content Title',
        description:
          ['Content description'],
      },
    ],
  };
  const [expanded, setExpanded] = React.useState(false);
  return (
    <SimpleAccordion
      {...args}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    />
  );
}


const First = () => {
  const args = {
    title: '식물의 잎 전체가 누렇게 변할때',
    contents: [
      {
        title: '잎이 밝은 황색을 띄며 쪼글쪼글해진다.',
        description:
          ['-수분의 부족, 공중습도가 높은 곳으로 옮기고 충분한 물 주기, 일조량 과다시 많이 생김(차광 필요)'],
      },
      {
        title: '잎 색이 어둡고 잎이 탈락되며 물기가 있다.',
        description:
          ['-수분의 과잉, 물 주기를 멈추고 통풍이 좋은 곳으로 옮겨 관리한다. (일조량의 부족시 많이 생김)'],
      },
    ],
    disabled: false,
    square: false,
    expanded: false,
  };
  const [expanded, setExpanded] = React.useState(false);
  return (
    <SimpleAccordion
      {...args}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    />
  );
};

const Second = () => {
  const args = {
    title: '잎에 부분적인 반점이 생기거나 변색되었을 때',
    contents: [
      {
        title: '잎이 밝은 황색을 띄며 쪼글쪼글해진다.',
        description:
          ['-빛의 과다 (일소현상), 빛이 약한 곳으로 옮긴다. 이상 부위를 도려내도 계속 가장자리가 말라간다','-풍해(바람이 너무많이 붐) 바람이 적은 곳으로 옮긴다. 잎 가장자리가 굽는다.']
      },
      {
        title: '잎의 반점과 변색이 생긴 때',
        description:
          ['-약해, 물을 충분히 준다. 빛이 약한 곳으로 옮겨주어야 효과적이다.','-냉해 (저온에 노출) 따뜻한 곳으로 옮긴다. 갑자기 옮기면 잎이 뭉그러질 수 있으니 주의한다.','-병충해, 해당 살균제를 살포한다. 탄저병, 반점병약을 지시된 양으로 희석하여 2~3회 정도 살포', ]
      },
     
    ],
    disabled: false,
    square: false,
    expanded: false,
  };
  const [expanded, setExpanded] = React.useState(false);
  return (
    <SimpleAccordion
      {...args}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    />
  );
};

const Third = () => {
  const args = {
    title: '잎이 기형화가 되었다',
    contents: [
      {
        title: '마디 사이가 가늘고 길어졌다.',
        description:
          ['-일조량의 부족, 빛이 좋은 창가 쪽으로 옮긴다. 도장 현상',]
      },
      {
        title: '줄기가 뻗지 못한다.',
        description:
          ['-병해, 다이젠 등을 살포한다. 연부병으로 테라마이신으로 응급조치가 가능하다',]
      },
      {
        title: '흰가루등이 달라붙는다.',
        description:
          ['-병해, 지오판 수화제 등을 살포한다. 흰가루병으로 통풍이 잘 되는 곳으로 옮긴다',]
      },      {
        title: '끈적끈적한 액체가 생긴다.',
        description:
          ['-충해, 알코올을 적신 헝겊 등으로 닦아내고 수프라사이드를 살포한다. 개각충의 증후로 물로는 잘 안 닦임',]
      },
    ],
    disabled: false,
    square: false,
    expanded: false,
  };
  const [expanded, setExpanded] = React.useState(false);
  return (
    <SimpleAccordion
      {...args}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    />
  );
};

const Fourth = () => {
  const args = {
    title: '포기 전체가 시든다',
    contents: [
      {
        title: '뿌리가 썩음.',
        description:
          ['-수분의 과다. 물 주기를 금하고 통풍이 잘 되는 곳으로 옮긴다. 잎이 탈락되는 경우가 많다']
      },
      {
        title: '잎의 푸른 상태인데 생기가 없음.',
        description:
          ['-일조량의 과다. 빛이 약한 곳으로 옮긴다.', '-수분의 부족, 공중습도가 높은 곳으로 옮기고 충분한 물 주기']
      },
      {
        title: '시들고 심하면 삶은 것 같이 된다.',
        description:
          ['-저온에 노출, 이상 부위를 제거하고 따뜻한 곳으로 천천히 옮긴다. 갑자기 옮기면 뭉그러진다']
      },
      {
        title: '분갈이 시기 과다 지연',
        description:
          ['-비료분, 수분의 과부족, 부족 시 충분한 물과 액비, 과다 시 건조 시킴, 분갈이한다.']
      },
    ],
    disabled: false,
    square: false,
    expanded: false,
  };
  const [expanded, setExpanded] = React.useState(false);
  return (
    <SimpleAccordion
      {...args}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    />
  );
};

export const DiagnosisFormTemplate = () => {
  return [<First />, <Second />, <Third />, <Fourth />];
};
