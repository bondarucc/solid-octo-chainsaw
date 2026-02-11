import type {Config} from 'jest';

export default async (): Promise<Config> => {
  return {
    verbose: true,
    roots: ['<rootDir>/src/test'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    globalSetup: "<rootDir>/src/test/setup.ts"
    // setupFilesAfterEnv: ["<rootDir>/src/initDB.ts"]
  };
};