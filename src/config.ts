type Config = {
  PUBLIC_KEY: string;
  PRIVATE_KEY: string;
};

export const CONFIG: Config = {
  PUBLIC_KEY: process.env.NEXT_PUBLIC_KEY as string,
  PRIVATE_KEY: process.env.NEXT_PRIVATE_KEY as string,
};
