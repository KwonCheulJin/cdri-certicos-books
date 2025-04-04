import { waitFor } from '@/utils/waitFor';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

describe('waitFor', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('지정된 시간만큼 대기해야 한다.', async () => {
    const delay = 1000;
    const promise = waitFor(delay);

    await vi.advanceTimersByTimeAsync(delay);

    await expect(promise).resolves.toBeUndefined();
  });

  it('음수 시간이 전달되어도 정상적으로 처리되어야 한다.', async () => {
    const delay = -1000;
    const promise = waitFor(delay);

    await vi.advanceTimersByTimeAsync(0);

    await expect(promise).resolves.toBeUndefined();
  });

  it('0ms가 전달되면 즉시 resolve 되어야 한다.', async () => {
    const delay = 0;
    const promise = waitFor(delay);

    await vi.advanceTimersByTimeAsync(0);

    await expect(promise).resolves.toBeUndefined();
  });

  it('여러 개의 waitFor가 동시에 실행되어도 각각 올바른 시간에 resolve 되어야 한다.', async () => {
    const delay1 = 1000;
    const delay2 = 2000;

    const promise1 = waitFor(delay1);
    const promise2 = waitFor(delay2);

    await vi.advanceTimersByTimeAsync(delay1);
    await expect(promise1).resolves.toBeUndefined();

    await vi.advanceTimersByTimeAsync(delay2 - delay1);
    await expect(promise2).resolves.toBeUndefined();
  });

  it('타이머 spy를 통해 정확한 지연 시간이 전달되었는지 확인한다.', () => {
    const delay = 1000;
    const timerSpy = vi.spyOn(global, 'setTimeout');

    waitFor(delay);

    expect(timerSpy).toHaveBeenCalledWith(expect.any(Function), delay);
    expect(timerSpy).toHaveBeenCalledTimes(1);
  });
});
