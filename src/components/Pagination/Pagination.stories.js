import { PaginationC } from './Pagination';

export default {
  title: 'Example/Pagination',
  component: PaginationC,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const PaginationCTest = {
  args: {
    lastPageNum: 9,
  },
};
