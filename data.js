const imagesURL = Object.values(
  import.meta.glob('./images/*.png', 
    { eager: true, query: '?url', import: 'default' })
);

export const images = imagesURL.map((url, index) => {

    const id = [
        1,2,3,4,5,6,7,8,9,10
    ];

  const pages = [
    "https://en.wikipedia.org/wiki/A_(kana)",
    "https://en.wikipedia.org/wiki/A_(kana)",
    "https://en.wikipedia.org/wiki/E_(kana)",
    "https://en.wikipedia.org/wiki/E_(kana)",
    "https://en.wikipedia.org/wiki/I_(kana)",
    "https://en.wikipedia.org/wiki/I_(kana)",
    "https://en.wikipedia.org/wiki/O_(kana)",
    "https://en.wikipedia.org/wiki/O_(kana)",
    "https://en.wikipedia.org/wiki/U_(kana)",
    "https://en.wikipedia.org/wiki/U_(kana)"
  ];

  const remberTip = [
    "It's similar to this 'α' with a letter 't' over it.",
    "Like a 'P' with straight strokes or like an 'A' rotated to the right.",
    "A curled 'Z' with a hat on top.",
    "Literally a wide capital 'I'.",
    "Two strokes equivalent to an 'i'; a long one and a short one.",
    "Basically an 'i' replacing the dot with a curved line.",
    "A 't' combined with an incomplete 'o' with a line on the right side.",
    "Can be seen as a 'stick man' balancing in its left foot.",
    "A lower case 'u' rotated to the left with a hat.",
    "A wide straight stroked 'u'; 'claw-like' with a line on top."
  ];

  const altDescription = [
    "Hiragana letter a",
    "Katakana letter a",
    "Hiragana letter e",
    "Katakana letter e",
    "Hiragana letter i",
    "Katakana letter i",
    "Hiragana letter o",
    "Katakana letter o",
    "Hiragana letter u",
    "Katakana letter u",
  ]

  return { 
        id: id[index],
        src: url, 
        alt: altDescription[index], 
        page: pages[index], 
        mnemonicTip: remberTip[index]
    };
});