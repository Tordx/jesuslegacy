/*
 * Jesus Legacy Church Project
 * Copyright (c) 2026 Jesus Legacy Church.
 *
 * This work is created for the ministry and mission of Jesus Legacy Church.
 * Redistribution, modification, or commercial use of any portion of this
 * project without written permission from Jesus Legacy Church leadership
 * is not permitted.
 *
 * All rights reserved.
 */

/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { useEffect, useRef, useState } from "react";

const ROWS = 20;
const COLS = 10;

type Cell = string | null;
type Board = Cell[][];

const SHAPES: Record<string, number[][]> = {
  I: [[1, 1, 1, 1]],
  O: [
    [1, 1],
    [1, 1],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
  ],
};

const createBoard = (): Board =>
  Array.from({ length: ROWS }, () => Array(COLS).fill(null));

export default function TetrisPage() {
  const [board, setBoard] = useState<Board>(createBoard());
  const [piece, setPiece] = useState<number[][] | null>(null);
  const [position, setPosition] = useState({ x: 3, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Spawn a new random piece
  const spawnPiece = () => {
    const keys = Object.keys(SHAPES);
    const shape = SHAPES[keys[Math.floor(Math.random() * keys.length)]];
    const startPos = {
      x: Math.floor(COLS / 2) - Math.floor(shape[0].length / 2),
      y: 0,
    };

    // Collision check on spawn → game over / reset
    if (!isValidMove(startPos.x, startPos.y, shape)) {
      setBoard(createBoard());
    }

    setPiece(shape);
    setPosition(startPos);
  };

  // Collision check
  const isValidMove = (newX: number, newY: number, testPiece?: number[][]) => {
    if (!piece && !testPiece) return false;
    const shape = testPiece || piece!;
    return shape.every((row, dy) =>
      row.every((cell, dx) => {
        if (!cell) return true;
        const x = newX + dx;
        const y = newY + dy;
        return x >= 0 && x < COLS && y < ROWS && !board[y][x];
      }),
    );
  };

  // Clear completed lines
  const clearLines = (newBoard: Board) => {
    const clearedBoard = newBoard.filter((row) => row.some((cell) => !cell));
    const linesCleared = ROWS - clearedBoard.length;
    const emptyRows = Array.from({ length: linesCleared }, () =>
      Array(COLS).fill(null),
    );
    return [...emptyRows, ...clearedBoard];
  };

  // Merge piece into board
  const mergePiece = (pos: { x: number; y: number }) => {
    if (!piece) return;

    const newBoard = board.map((row) => [...row]);
    piece.forEach((row, dy) =>
      row.forEach((cell, dx) => {
        if (cell) {
          const x = pos.x + dx;
          const y = pos.y + dy;
          if (y >= 0) newBoard[y][x] = "filled";
        }
      }),
    );

    setBoard(clearLines(newBoard));
    spawnPiece();
  };

  // Drop piece down by 1
  // const drop = () => {
  //   if (!piece) return;

  //   if (isValidMove(position.x, position.y + 1)) {
  //     setPosition((p) => ({ ...p, y: p.y + 1 }));
  //   } else {
  //     if (position.y <= 0) setBoard(createBoard()); // Game over reset
  //     mergePiece(position);
  //   }
  // };

  // Hard drop (space)
  // const hardDrop = () => {
  //   if (!piece) return;
  //   let newY = position.y;
  //   while (isValidMove(position.x, newY + 1)) newY += 1;
  //   mergePiece({ x: position.x, y: newY });
  // };

  // Rotate piece clockwise
  const rotate = (matrix: number[][]) =>
    matrix[0].map((_, i) => matrix.map((row) => row[i]).reverse());

  // Handle keyboard controls
  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!piece) return;

    if (
      ["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp", " "].includes(e.key)
    )
      e.preventDefault();

    setPosition((prev) => {
      const newPos = { ...prev };

      if (e.key === "ArrowLeft" && isValidMove(prev.x - 1, prev.y))
        newPos.x -= 1;
      if (e.key === "ArrowRight" && isValidMove(prev.x + 1, prev.y))
        newPos.x += 1;
      if (e.key === "ArrowDown" && isValidMove(prev.x, prev.y + 1))
        newPos.y += 1;

      // Rotate piece but keep auto-drop unaffected
      if (e.key === "ArrowUp") {
        const rotated = rotate(piece);
        if (isValidMove(prev.x, prev.y, rotated)) {
          setPiece(rotated); // update piece
        }
      }

      // Hard drop
      if (e.key === " ") {
        let dropY = prev.y;
        while (isValidMove(prev.x, dropY + 1)) dropY++;
        mergePiece({ x: prev.x, y: dropY });
        return prev; // position will reset in spawnPiece
      }

      return newPos;
    });
  };

  // Auto drop every 700ms
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (!piece) return prev;

        if (isValidMove(prev.x, prev.y + 1)) {
          return { ...prev, y: prev.y + 1 }; // move down
        } else {
          mergePiece(prev); // lock piece if cannot move
          return prev; // new piece will reset position
        }
      });
    }, 500);
    return () => clearInterval(interval);
  }, [piece, board]); // depends on piece and board to see latest state

  // Focus container on mount and spawn first piece
  useEffect(() => {
    containerRef.current?.focus();
    spawnPiece();
  }, []);

  // Render board with current piece
  const display = board.map((row) => [...row]);
  if (piece) {
    piece.forEach((row, dy) =>
      row.forEach((cell, dx) => {
        if (cell) {
          const x = position.x + dx;
          const y = position.y + dy;
          if (y >= 0) display[y][x] = "active";
        }
      }),
    );
  }

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKey}
      className="flex flex-col items-center gap-4 p-6 outline-none"
    >
      <h1 className="text-2xl font-bold">Tetris</h1>
      <div className="grid grid-cols-10 gap-1">
        {display.map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${y}-${x}`}
              className={`w-6 h-6 ${
                cell === "filled"
                  ? "bg-blue-500"
                  : cell === "active"
                    ? "bg-red-400"
                    : "bg-gray-200"
              }`}
            />
          )),
        )}
      </div>
      <p className="text-sm text-gray-600">
        Arrow keys: move & rotate, Space: hard drop
      </p>
    </div>
  );
}
