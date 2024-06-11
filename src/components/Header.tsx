import { Flex, Heading } from '@radix-ui/themes';

export const Header = () => {
  return (
    <Flex
      style={{
        width: '100vw',
        height: '64px',
        padding: '16px',
        background: '#4d88ac',
        color: '#f5f5fa',
        boxShadow: '0 0 10px #000',
        position: 'sticky',
        top: 0,
      }}
    >
      <Heading>TASKMAN</Heading>
    </Flex>
  );
};
