import React from 'react';

const TagListItem = ({ tag }) => {
  return (
    <div>
      <span>{tag.name}</span>
      <span>{tag.count}</span>
    </div>
  );
};

export default TagListItem;
