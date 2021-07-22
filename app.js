const overlay = document.querySelector('.overlay');
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const text = document.querySelector('.text');
const moon = document.querySelector('.moon');
const pizza = document.querySelector('.pizza');

TweenMax.from(title, {
  duration: 2,
  y: 100,
  opacity: 0,
});

TweenMax.to(title, {
  delay: 4,
  duration: 2,
  y: -100,
  opacity: 0,
});

TweenMax.from(subtitle, {
  delay: 4,
  duration: 2,
  y: 100,
  opacity: 0,
});

TweenMax.to(subtitle, {
  delay: 8,
  duration: 2,
  y: -100,
  opacity: 0,
});

TweenMax.from(moon, {
  delay: 4,
  duration: 2,
  x: -100,
  opacity: 0,
});

TweenMax.from(text, {
  delay: 8,
  duration: 2,
  y: 100,
  opacity: 0,
});

TweenMax.to(text, {
  delay: 12,
  duration: 2,
  y: -100,
  opacity: 0,
});

TweenMax.from(pizza, {
  delay: 8,
  duration: 2,
  x: 100,
  opacity: 0,
});

TweenMax.to(overlay, {
  delay: 12,
  duration: 2,
  y: '-100%',
});
