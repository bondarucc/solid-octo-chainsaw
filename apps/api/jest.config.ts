import type {Config} from 'jest';

export default (): Config => {
  return {
    verbose: true,
    roots: ['<rootDir>/src/test'],
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.ts'],
    transform: {
      '^.+\\.ts$': [
        'ts-jest',
        {
          useESM: true,
          tsconfig: 'tsconfig.json'

        }
      ]
    }
    // globalSetup: "<rootDir>/src/test/setup.cjs",
    // globals: {
    //   'ts-jest': {
    //     useESM: true
    //   }
    // }
    // setupFilesAfterEnv: ["<rootDir>/src/initDB.ts"]
  };
};