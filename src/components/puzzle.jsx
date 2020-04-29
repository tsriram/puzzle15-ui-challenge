import React, { useState } from "react";
import Cell from "./cell";

// static array for now
const initialState = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, -1];
export const empty = -1;
const rows = 4;

const canMove = (index, emptyCellIndex) => {
  return (
    Math.abs(index - emptyCellIndex) === 1 ||
    Math.abs(index - emptyCellIndex) === rows
  );
};

const Puzzle = () => {
  const [puzzle, setPuzzle] = useState(initialState);
  const emptyCellIndex = puzzle.indexOf(-1);

  const handleMove = (indexToMove) => {
    if (!canMove(indexToMove, emptyCellIndex)) {
      return;
    }
    const numberToMove = puzzle[indexToMove];
    const updatedPuzzle = puzzle.map((number, index) => {
      if (index === indexToMove) {
        return -1;
      } else if (number === -1) {
        return numberToMove;
      }
      return number;
    });
    setPuzzle(updatedPuzzle);
  };

  return (
    <div className="puzzle">
      {puzzle.map((cellValue, index) => {
        return (
          <Cell
            key={cellValue}
            canMove={canMove(index, emptyCellIndex)}
            onClick={() => handleMove(index)}
          >
            {cellValue}
          </Cell>
        );
      })}
    </div>
  );
};

export default Puzzle;
