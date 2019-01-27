import React from 'react';
import faker from 'faker';

const playerCategory = category => {
  return <div>{category}</div>;
};

const playerName = name => {
  return <div>{name}</div>;
};

const playerType = type => {
  return <div>{type}</div>;
};

const playerDescription = description => {
  return <div>{description}</div>;
};

const playerImage = url => {
  return <img src={url} alt="alt" />;
};

const playerIcon = url => {
  return <img src={url} alt="alt" />;
};

const footer = text => {
  return <div>{text}</div>;
};

export const HeroMasterCard = () => (
  <div>
    {playerCategory('Player Category')}
    {playerImage(faker.image.image())}
    {playerName('Player Name')}
    {playerIcon(faker.image.image())}
    {playerType('Player Type')}
    {playerDescription('Player Description')}
    {footer('Footer')}
  </div>
);
