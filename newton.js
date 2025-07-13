function newton(f, f_prime, x0, tolerance, maxIterations) {
  let message = "";
  let success = false;

  let iteration = 0;
  let xk = x0;
  let fxk, f_prime_xk, next_x;

  while (iteration < maxIterations) {
    fxk = f(xk);
    f_prime_xk = f_prime(xk);

    if (Math.abs(f_prime_xk) < CANVAS_SETTINGS.DERIVATIVE_ZERO_THRESHOLD) {
      message = `エラー: ニュートン法で導関数が0に近くなりました `;
      return { message, success: false };
    }

    next_x = xk - fxk / f_prime_xk;

    if (Math.abs(f(next_x)) < tolerance || Math.abs(next_x - xk) < tolerance) {
      message = `ニュートン法: ${
        iteration + 1
      } ステップで解が収束しました。近似解は ${next_x.toFixed(6)} です。`;
      success = true;
      break;
    }

    xk = next_x;
    iteration++;
  }

  if (!success) {
    message = `ニュートン法: 最大繰り返し回数 (${maxIterations}) に達しました。現在の近似解は ${xk.toFixed(
      6
    )} です。`;
  }

  return { message, success };
}
