import MainLayout from '@/layouts/main/main-layout';

const status = {
  path: 'status',
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <div>지원 현황</div>,
    },
  ],
};

export default status;
