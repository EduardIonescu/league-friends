/** Made because I'm being rate limited by the RIOT API to 20 calls a second.  */
export const retryAsyncFunction = async <T>(
  asyncFunc: (arg: any) => Promise<T> | T,
  arg: any,
  retries = 3,
  retryIntervalMs = 5000
): Promise<T> => {
  try {
    return await asyncFunc(arg);
  } catch (err) {
    /* if (retries === 0) {
      const bigDelay = 125_000;
      console.warn(
        `Error occured. Trying one last time in ${bigDelay / 1000} seconds...`
      );
      await new Promise((resolve) => setTimeout(resolve, bigDelay));
      return retryAsyncFunction(asyncFunc, arg, retries - 1, bigDelay);
    } */
    if (retries >= 0) {
      console.warn(
        `Error occured. Retrying in ${retryIntervalMs / 1000} seconds...`,
        err
      );
      await new Promise((resolve) => setTimeout(resolve, retryIntervalMs));
      return retryAsyncFunction(asyncFunc, arg, retries - 1, retryIntervalMs);
    }

    throw err;
  }
};
