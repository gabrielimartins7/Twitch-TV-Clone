import React from 'react';
import streamThumbnail from '../../images/stream_thumbnail.jpg';

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescrition,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles';

const StreamList: React.FC = () => {
  const SteamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail}/>

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>gabrielimartins7</StreamUsername>
          </StreamHeader>
          <StreamDescrition numberOfLines={1}>
            Front-end com Next.js, Chakra UI e GraphQL
          </StreamDescrition>
          <StreamCategory numberOfLines={1}>
            Science & Technology
          </StreamCategory>

        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>

          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  )

  return (
    <List>
      <SteamItem />
      <SteamItem/>
      <SteamItem />
      <SteamItem />
      <SteamItem />
    </List>
  );
};

export default StreamList;
