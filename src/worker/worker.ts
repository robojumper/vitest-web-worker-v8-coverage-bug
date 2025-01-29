import { doCalc } from './functions.js';

self.onmessage = (ev: MessageEvent<number>) => {
  const start = performance.now();
  let data = ev.data;
  if (data === 5) {
    throw new Error("cannot calculate with this input!");
  }

  while (data > 9) {
    data -= 1;
  }

  const result = doCalc(data);
  console.log(
    'input:',
    ev.data,
    'result:',
    data,
    'duration:',
    performance.now() - start,
  );
  postMessage(result);
};
