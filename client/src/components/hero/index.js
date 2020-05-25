import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core/styles';

const items = [
  {
    title: 'title 1',
    image: `/images/hero_06.jpg`,
  },
  {
    title: 'title 2',
    image: `./images/hero_07.jpg`,
  },
  {
    title: 'title 3',
    image: `./images/hero_08.jpg`,
  },
  {
    title: 'title 4',
    image: `./images/hero_09.jpg`,
  }
]

const useStyles = makeStyles((theme) => ({
  hero: {
    // maxHeight: 400,
    overflow: 'hidden',
    backgroundColor:'Aliceblue'
  },
  heroImage: {
    width: '100%',
    height: 'auto',
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