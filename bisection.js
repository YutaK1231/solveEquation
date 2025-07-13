function bisection(f, a, b, maxIterations) {
  let success = false;

  let iteration = 0;
  let currentA;
  let currentB;
  if (f(a) >= 0) {
    currentA = a;
    currentB = b;
  } else {
    currentA = b;
    currentB = a;
  }
  let m = (currentA + currentB) / 2; // mを初期化して、ループが実行されない場合でも値を持つようにする
  let fm = f(m);

  while (iteration < maxIterations) {
    m = (currentA + currentB) / 2;
    fm = f(m);

    // 二分法の区間更新ロジック
    if (f(currentA) * fm < 0) {
      currentB = m;
    } else {
      currentA = m;
    }
    iteration++;
  }

  let message;
  const finalM = steps[steps.length - 1].m;

  if (success) {
    message = `二分法: ${iteration} ステップで解が収束しました。近似解は ${finalM.toFixed(
      6
    )} です。`;
  } else {
    message = `二分法: 最大繰り返し回数 (${maxIterations}) に達しました。収束しませんでした。現在の近似値は ${finalM.toFixed(
      6
    )} です。`;
  }

  return { message, success, initialIntervalProblem };
}
