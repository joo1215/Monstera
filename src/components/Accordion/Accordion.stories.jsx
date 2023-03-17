import React from 'react';
import { SimpleAccordion } from './Accordion';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'Example/Accordion',
  component: SimpleAccordion,
  tags: ['autodocs'],
};

const Template = (args) => <SimpleAccordion {...args} />;

export const Default = Template.bind({});
// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
Default.args = {
  disabled: false,
  square: false,
  expanded: true,
};

export const Disabled = {
  args: {
    defaultExpanded: false,
    disabled: true,
  },
};

const First = () => {
  const args = {
    title: '식물의 잎 전체가 누렇게 변할때',
    contents: [
      {
        title: '잎이 밝은 황색을 띄며 쪼글쪼글해진다.',
        description:
          '- 수분의 부족, 공중습도가 높은 곳으로 옮기고 충분한 물 주기, 일조량 과다시 많이 생김(차광 필요)',
      },
      {
        title: '잎 색이 어둡고 잎이 탈락되며 물기가 있다.',
        description:
          '- 수분의 과잉, 물 주기를 멈추고 통풍이 좋은 곳으로 옮겨 관리한다. (일조량의 부족시 많이 생김)',
      },
      {
        title: '잎 색이 어둡고 잎이 탈락되며 물기가 있다.',
        description:
          '- 수분의 과잉, 물 주기를 멈추고 통풍이 좋은 곳으로 옮겨 관리한다. (일조량의 부족시 많이 생김)',
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
        title: '잎 가장자리가 누렇게 변했다',
        description:
          '- 빛의 과다 (일소현상), 빛이 약한 곳으로 옮긴다. 이상 부위를 도려내도 계속 가장자리가 말라간다',
      },
      {
        title: '잎 색이 어둡고 잎이 탈락되며 물기가 있다.',
        description:
          '- 수분의 과잉, 물 주기를 멈추고 통풍이 좋은 곳으로 옮겨 관리한다. (일조량의 부족시 많이 생김)',
      },
      {
        title: '잎 색이 어둡고 잎이 탈락되며 물기가 있다.',
        description:
          '- 수분의 과잉, 물 주기를 멈추고 통풍이 좋은 곳으로 옮겨 관리한다. (일조량의 부족시 많이 생김)',
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
        title: '잎이 밝은 황색을 띄며 쪼글쪼글해진다.',
        description:
          '- 수분의 부족, 공중습도가 높은 곳으로 옮기고 충분한 물 주기, 일조량 과다시 많이 생김(차광 필요)',
      },
      {
        title: '잎 색이 어둡고 잎이 탈락되며 물기가 있다.',
        description:
          '- 수분의 과잉, 물 주기를 멈추고 통풍이 좋은 곳으로 옮겨 관리한다. (일조량의 부족시 많이 생김)',
      },
      {
        title: '잎 색이 어둡고 잎이 탈락되며 물기가 있다.',
        description:
          '- 수분의 과잉, 물 주기를 멈추고 통풍이 좋은 곳으로 옮겨 관리한다. (일조량의 부족시 많이 생김)',
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
  title: '잎이 밝은 황색을 띄며 쪼글쪼글해진다.',
  description:
  '- 수분의 부족, 공중습도가 높은 곳으로 옮기고 충분한 물 주기, 일조량 과다시 많이 생김(차광 필요)'+`<br />`+`- 수분의 부족, 공중습도가 높은 곳으로 옮기고 충분한 물 주기, 일조량 과다시 많이 생김(차광 필요)`
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

export const Examples = () => {
  return [<First />, <Second />, <Third />, <Fourth />];
};
