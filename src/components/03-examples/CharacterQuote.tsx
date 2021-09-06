import React from 'react';
import { BreakingBadApi } from '../../interfaces/breaking-bad-api.interface';

const CharacterQuote = ({ quote }: { quote: BreakingBadApi }) => {
  return (
    <>
      <blockquote className={"[ flex flex-col ] [ text-right ]"}>
        <p className={"[ text-xl ] [ italic ] [ font-light ]"} >{"\"" + quote.quote + "\""}</p>
        <footer className={"[ text-sm ] [ font-bold ]"}>{ quote.author }</footer>
      </blockquote>
    </>
  );
};

export default CharacterQuote;
