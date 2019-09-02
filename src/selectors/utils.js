import { window } from 'browser-monads';

const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

let choosedPlayer = 0;
const playerFaces = [
  {
    name: 'دایناسور خبیث',
    avatar: 1,
  },
  {
    name: 'آهوی متعجب',
    avatar: 2,
  },
  {
    name: 'غول لش',
    avatar: 3,
  },
  {
    name: 'مارمولک بدهکار',
    avatar: 4,
  },
  {
    name: 'کرگدن تنبل',
    avatar: 5,
  },
  {
    name: 'جینگولک شاد',
    avatar: 6,
  },
  {
    name: 'شیطان مرموز',
    avatar: 7,
  },
  {
    name: 'هیولای ناناز',
    avatar: 8,
  },
  {
    name: 'مار خندان',
    avatar: 9,
  },
];
export function getRandomFace() {
  return playerFaces[choosedPlayer++ % playerFaces.length];
}
let colorIndex = 0;
export function getRandomColor() {
  const colorPalette = ['#93b3e1', '#ff9ea2', '#a1ff8a', '#ffcd59'];
  return colorPalette[colorIndex++ % 4];
}

export function getRandomSadEmoji() {
  const array = ['😤', '🥺', '🤢', '😔', '🥺', '😑', '🤬'];
  return array[getRandomArbitrary(0, array.length - 1)];
}

export function getRandomRegularEmoji() {
  const array = ['🤗', '😝', '😌', '🥴', '🤓'];
  return array[getRandomArbitrary(0, array.length - 1)];
}

export function getRandomExcellentEmoji() {
  const array = ['😍', '😎', '🤩', '😏', '😈'];
  return array[getRandomArbitrary(0, array.length - 1)];
}

export function getLayout(width, height) {
  const gridWidth = width;
  const gridHeight = height;
  const boxWidth = width / 10;
  const boxHeight = height / 10;

  let layout = {};
  const oddRows = [1, 3, 5, 7, 9],
    evenRows = [0, 2, 4, 6, 8];

  for (let col = 1; col <= 10; col++) {
    //even rows
    evenRows.map(row => {
      layout[col + 10 * row] = {
        x: (col - 1) * boxWidth + boxWidth / 2,
        y: gridHeight - (row * boxHeight + boxHeight / 2),
        id: col + 10 * row,
      };
    });

    //odd rows
    oddRows.map(row => {
      layout[col + 10 * row] = {
        x: gridWidth - ((col - 1) * boxWidth + boxWidth / 2),
        y: gridHeight - (row * boxHeight + boxHeight / 2),
        id: col + 10 * row,
      };
    });
  }
  return layout;
}

export function getPlayerCoordinates(pos, grid, boxPosition) {
  const {
    layout,
    box: { width, height },
  } = grid;
  const x = layout[pos].x;
  const y = layout[pos].y;

  switch (boxPosition) {
    case 0: //top left
      return {
        x: x - width / 4,
        y: y - height / 4,
      };

    case 1: //top right
      return {
        x: x + width / 4,
        y: y - height / 4,
      };

    case 2: //bottom left
      return {
        x: x - width / 4,
        y: y + height / 4,
      };

    case 3: //bottom right
      return {
        x: x + width / 4,
        y: y + height / 4,
      };

    default:
      return {
        x: x,
        y: y,
      };
  }
}

export function delay(callback) {
  return setTimeout(callback, 300);
}

// todo : generate
export function getSnakes() {
  return [
    {
      id: 1,
      startPos: 17,
      endPos: 7,
    },
    {
      id: 2,
      startPos: 52,
      endPos: 29,
    },
    {
      id: 3,
      startPos: 57,
      endPos: 38,
    },
    {
      id: 4,
      startPos: 88,
      endPos: 18,
    },
    {
      id: 5,
      startPos: 93,
      endPos: 70,
    },
    {
      id: 6,
      startPos: 97,
      endPos: 79,
    },
  ];
}

// todo : generate
export function getLadders() {
  return [
    {
      id: 1,
      startPos: 3,
      endPos: 21,
    },
    {
      id: 2,
      startPos: 8,
      endPos: 30,
    },
    {
      id: 3,
      startPos: 28,
      endPos: 84,
    },
    {
      id: 4,
      startPos: 58,
      endPos: 77,
    },
    {
      id: 5,
      startPos: 80,
      endPos: 99,
    },
    {
      id: 6,
      startPos: 90,
      endPos: 91,
    },
  ];
}

export function getGridMeasurement(width, height) {
  let gutter = 32;
  width = typeof width === 'undefined' ? window.outerWidth : width;
  height = typeof height === 'undefined' ? window.outerHeight - 70 : height - 50;

  if(height > 300) {
    height -= 50;
  }


  // choose height or width based on greater one
  let usedMeasurement = width;
  if(width > height){
    usedMeasurement = height;
  }

  if (usedMeasurement > 1000) {
    gutter = 100;
  } else if (usedMeasurement <= 1000 && usedMeasurement > 700) {
    gutter = 80;
  } else if (usedMeasurement <= 700 && usedMeasurement > 400) {
    gutter = 60;
  } else {
    gutter = 10;
  }
  return usedMeasurement - gutter;
}
