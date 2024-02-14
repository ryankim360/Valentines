import React from 'react';
import './App.css';
import { useState } from "react";


function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure about that?",
      "What if I asked really nicely?",
      "Please?",
      "Pretty please??",
      "Pretty pretty please???",
      "pls 🥺",
      "I'm getting sad now 😭",
      "I see how it is...",
      "I was going to buy you flowers and presents... ",
      "제발... 나 받아줭 ㅠㅠ",
      "......",
      "julia... please... i wanna be your valentine",
      "💔",
      "thats not very nice!",
      "how rude!!!!!",
      "please click yes",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  // const imagesList = [
  //   {
  //     id: 1,
  //     src: image,
  //     alt: "Image 1",
  //   },
  //   {
  //     id: 2,
  //     src: image1,
  //     alt: "Image 2",
  //   },
  // ];

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {/* <div>
      {imagesList.map((image) => (
        <img key={image.id} src={image.src} alt={image.alt} />
      ))}
    </div> */}
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">YAY! THANK YOU FOR BEING MY VALENTINE, JULIA!!! I LOVE YOU!!! ❤️❤️💘💘</div>
          <div className="my-4 text-3xl">I hope you found this funny lol</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
