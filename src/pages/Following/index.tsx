import React from 'react';
import { View } from 'react-native';

import Header from '../../components/Header';

import { Wrapper, Container, Main } from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <View />,
      },

      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <View />,
      },
    ]
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />

        <Main />
      </Container>
    </Wrapper>
  );
};

export default Following;
