import { CurrentStatus } from "../components/board";
import { SQUARE_COUNT } from "../squareCount";

export const jadge = (currentSquareList: CurrentStatus[][]): boolean => {
  // 勝利条件: 同じ色が 縦、横、斜め で5つ繋がった時
  // 碁が置かれている場所のみ幅優先探索を用いて、判定を行う
  let res: boolean = false;
  currentSquareList.forEach((ss, x) => {
    ss.forEach((s, y) => {
      if (s !== null) {
        let chain = dfsCheck1(currentSquareList, s, x, y);
        chain = Math.max(chain, dfsCheck2(currentSquareList, s, x, y));
        chain = Math.max(chain, dfsCheck3(currentSquareList, s, x, y));
        chain = Math.max(chain, dfsCheck4(currentSquareList, s, x, y));
        if (chain > 4) {
          res = res || true;
        }
      }
    });
  });
  return res;
};

// 幅優先探索
// 左上
const dfsCheck1 = (
  currentSquareList: CurrentStatus[][],
  currentStatus: CurrentStatus,
  x: number,
  y: number,
  chain = 1
): number => {
  if (x > 0 && y > 0 && currentStatus === currentSquareList[x - 1][y - 1])
    chain = dfsCheck1(currentSquareList, currentStatus, x - 1, y - 1, chain + 1);
  return chain;
};

// 上
const dfsCheck2 = (
  currentSquareList: CurrentStatus[][],
  currentStatus: CurrentStatus,
  x: number,
  y: number,
  chain = 1
): number => {
  if (x > 0 && currentStatus === currentSquareList[x - 1][y])
    chain = dfsCheck2(currentSquareList, currentStatus, x - 1, y, chain + 1);
  return chain;
};

// 右上
const dfsCheck3 = (
  currentSquareList: CurrentStatus[][],
  currentStatus: CurrentStatus,
  x: number,
  y: number,
  chain = 1
): number => {
  if (
    x > 0 &&
    y < SQUARE_COUNT - 1 &&
    currentStatus === currentSquareList[x - 1][y + 1]
  )
    chain = dfsCheck3(currentSquareList, currentStatus, x - 1, y + 1, chain + 1);
  return chain;
};

// 右
const dfsCheck4 = (
  currentSquareList: CurrentStatus[][],
  currentStatus: CurrentStatus,
  x: number,
  y: number,
  chain = 1
): number => {
  if (y < SQUARE_COUNT - 1 && currentStatus === currentSquareList[x][y + 1])
    chain = dfsCheck4(currentSquareList, currentStatus, x, y + 1, chain + 1);
  return chain;
};
