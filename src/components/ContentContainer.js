import React from 'react';
import { ContentItem } from './ContentItem';

export const ContentContainer = ({data}) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <ContentItem item={item} key={index}/>
        )
      })}
    </div>
  )
};
