import { Flex, Heading } from '@radix-ui/themes';

export const Header = () => {
  return (
    <Flex
      style={{
        width: '100vw',
        height: '64px',
        padding: '16px 32px',
        background: '#3E63DD',
        color: '#f5f5fa',
        position: 'sticky',
        top: 0,
      }}
    >
      <Heading>TASKMAN</Heading>
    </Flex>
  );
};
