module.exports = {
  // 테스트할 파일의 확장자를 지정합니다.
  testMatch: [
    "**/__tests__/**/*.js",
    "**/__tests__/**/*.ts",
    "**/?(*.)+(spec|test).js",
  ],

  // 테스트를 실행할 때 무시할 경로를 지정합니다.
  testPathIgnorePatterns: ["/node_modules/", "/build/"],

  // 테스트를 실행할 때 사용할 환경(예: 브라우저, 노드 등)을 지정합니다.
  testEnvironment: "node",

  // 커버리지 보고서를 생성할 때 사용할 설정을 지정합니다.
  coverageReporters: ["text", "lcov"],
};
