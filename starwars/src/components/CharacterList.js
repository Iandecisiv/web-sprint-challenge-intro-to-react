import React, { useState, useEffect } from "react";
import Character from "./Character";

export default function CharacterList() {
    const [charListId, setCharListId] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    return (
        <div className="container">
          <div className="entry">
            {
                charListId.map(charId => 
                    <Character key={charId} charId={charId} />
                )
            }
          </div>
        </div>
      );
}