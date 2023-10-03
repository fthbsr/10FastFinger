"use client";
import React, { useEffect, useState } from "react";

function Words() {
  const [inputValue, setInputValue] = useState(" ");
  const [index, setIndex] = useState(0);
  const [indexTotal , setIndexTotal] = useState(0)
  const [firstList, setFirstList] = useState<String[]>([]);
  const [secondList, setSecondList] = useState<String[]>([]);
  const [trueWords, setTrueWords] = useState<String[]>([]);
  const [falseWords, setFalseWord] = useState<String[]>([]);

  

  const Sentence = {
    first:
      "The  Renaissance, a  cultural movement that spanned the 14th to the 17th centuries, marked a period of immense intellectual and artistic growth in Europe. It gave birth to revolutionary ideas, such as humanism, which emphasized the value of individual human experience and creativity, and led to the flourishing of art, literature, and science. This era saw the works of great masters like Leonardo da Vinci, Michelangelo, and Galileo Galilei, whose contributions continue to shape our world today.",
  };

  useEffect(() => {
    const myArr = Sentence.first.split(/[\s,\.]+/);
    const first = myArr.slice(index, index + 15);
    const second = myArr.slice(index + 15, index + 30);
    setFirstList(first);
    setSecondList(second);
  }, []);

//   const compareWords = async (e: React.KeyboardEvent) => {
    
//      if (e.code === "Space") {
//       if (inputValue.trim() === firstList[index]) {
//        await setTrueWords([firstList[index], ...trueWords]);
//       }else{
//        await setFalseWord([firstList[index] , ...falseWords])
//       }
//       await setInputValue("")
//       await console.log(index);
      
//      if(index <14){
//         await setIndex(index+1)
//      }else{
//        await console.log(index)
//        await setIndex(0)
//        await setIndexTotal(indexTotal + index)
//        await reoladNewWords()
//      }
//     }
//     await console.log(indexTotal);
    
//   };


   
//   const reoladNewWords = async () =>{
//     await console.log("deneme");
//     await console.log(indexTotal);

    
//   }
const compareWords = async (e: React.KeyboardEvent) => {
    if (e.code === "Space") {
      if (inputValue.trim() === firstList[index]) {
        await setTrueWords([firstList[index], ...trueWords]);
      } else {
        await setFalseWord([firstList[index], ...falseWords]);
      }
      await setInputValue("");
      await console.log(index);
  
      if (index <14) {
        await setIndex(index + 1);
      } else {
        await setIndexTotal(indexTotal + 15); // Increment indexTotal by 15 when index reaches 14
        await setIndex(0);
        await reoladNewWords();
      }
    }
  };
  
  const reoladNewWords = async () => {
    console.log("calisti");
    const myArr = await Sentence.first.split(/[\s,\.]+/);
    const first = await myArr.slice(indexTotal, indexTotal + 15);
    const second = await  myArr.slice(indexTotal + 15, indexTotal + 30);
    await console.log("index");
    await console.log(indexTotal);
    setFirstList(first);
    setSecondList(second);
  };
  
   
  return (
    <div>
      <div className="container m-auto mt-40 ">
        <div className="flex flex-col h-32">
          <div className="flex flex-row bg-slate-400  h-1/2 w-full">
            {firstList.map((item, i) => (
              <div className="flex flex-row bg-slate-400  h-full w-full">
                {index === i ? (
                  <div className="flex items-center w-fit basis-1/10 mx-1 border-2  px-1 py-1 bg-red-300">
                    <p>{item}</p>
                  </div>
                ) : (
                  <div
                  className={trueWords.includes(item)
                    ? " flex items-center   w-fit   mx-1 basis-1/10  text-emerald-600" :
                    falseWords.includes(item) ? "text-red-600 flex items-center   w-fit   mx-1 basis-1/10 "
                    :
                    "text-white  flex items-center   w-fit   mx-1 basis-1/10"}
                  >
                    <p>{item}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-row bg-slate-400  h-1/2 w-full">
            {secondList.map((item, i) => (
              <div className="flex flex-row bg-slate-400  h-full w-full">
                <div
                  className={trueWords.includes(item)
                    ? " flex items-center   w-fit   mx-1 basis-1/10  text-emerald-600" :
                    falseWords.includes(item) ? "text-slate-500 flex items-center   w-fit   mx-1 basis-1/10 "
                    :
                    "text-white  flex items-center   w-fit   mx-1 basis-1/10"}
                    
            
                >
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div  className="flex justify-center mt-5  h-10 w-full ">
        <input
        className="w-1/4 border-2 rounded border-slate-500 text-black"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
          onKeyDown={(e) => {
            compareWords(e);
          }}
        ></input>
      </div>

      </div>
     
      {/* {myArr.map((item) => <p>{item}</p>)}
        // <input onChange={(e)=>{setInputValue(e.target.value)}} onKeyDown={(e)=>{compareWords(e)}}></input> */}
    </div>
  );
}

export default Words;
