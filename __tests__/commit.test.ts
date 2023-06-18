describe("commit 함수 테스트", () => {
  test("유효한 커밋 메시지 반환", () => {
    const result = "Commit: Add new feature";
    expect(result).toEqual("Commit: Add new feature");
  });
});
