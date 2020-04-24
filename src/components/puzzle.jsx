import React, { useState } from "react";
import Cell from "./cell";

// static grid for now
const initialState = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, -1]
];
export const empty = -1;
const rows = 4;
const cols = 4;

const canCellMove = (grid, rowIndex, colIndex) => {
  const topCellValue =
    rowIndex === 0 ? undefined : grid[rowIndex - 1][colIndex];
  if (topCellValue === empty) {
    return true;
  }

  const rightCellValue =
    colIndex === cols - 1 ? undefined : grid[rowIndex][colIndex + 1];
  if (rightCellValue === empty) {
    return true;
  }

  const leftCellValue =
    colIndex === 0 ? undefined : grid[rowIndex][colIndex - 1];
  if (leftCellValue === empty) {
    return true;
  }

  const bottomCellValue =
    rowIndex === rows - 1 ? undefined : grid[rowIndex + 1][colIndex];
  if (bottomCellValue === empty) {
    return true;
  }

  return false;
};

const Puzzle = () => {
  const [puzzle, setPuzzle] = useState(initialState);

  const handleMove = (movingCellRowIndex, movingCellColIndex) => {
    const movingCellValue = puzzle[movingCellRowIndex][movingCellColIndex];
    const updatedPuzzle = puzzle.map((row, rowIndex) => {
      return row.map((col, colIndex) => {
        if (col === empty) {
          return movingCellValue;
        }
        if (
          rowIndex === movingCellRowIndex &&
          colIndex === movingCellColIndex
        ) {
          return empty;
        }
        return col;
      });
    });
    setPuzzle(updatedPuzzle);
  };

  return (
    <div className="puzzle">
      {puzzle.map((row, rowIndex) => {
        return row.map((cellValue, colIndex) => {
          const canMove = canCellMove(puzzle, rowIndex, colIndex);
          return (
            <Cell
              key={cellValue}
              canMove={canMove}
              onClick={() => handleMove(rowIndex, colIndex)}
            >
              {cellValue}
            </Cell>
          );
        });
      })}
    </div>
  );
};

export default Puzzle;
