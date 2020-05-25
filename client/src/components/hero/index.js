import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core/styles';

const items = [
  {
    title: 'title 1',
    image: `/images/hero_05.jpg`,
  },
  {
    title: 'title 2',
    image: `./images/hero_02.jpg`,
  },
  {
    title: 'title 3',
    image: `./images/hero_03.jpg`,
  }
]

const useStyles = makeStyles((theme) => ({
  hero: {
    // maxHeight: 400,
    // overflow: 'hidden'
    // backgroundColor:'Aliceblue'
  },
  heroImage: {
    width: '100%',
    height: 400,
    // maxHeight:400,
  }
}));


function Item(props) {
  const classes= useStyles();

  return (
    <div className={classes.hero}>
      <img className={classes.heroImage} src={process.env.PUBLIC_URL + `${props.item.image}`} alt={props.item.title}/>
    </div>
  )
};

export default function Hero() {
  const classes = useStyles();

  return (
    <Carousel animation='slide'>
      {
        items.map(item => <Item item={item} />)
      }
    </Carousel>
  );
};