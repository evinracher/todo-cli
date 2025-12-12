import { formatTasks } from ".";

const mockTasks = [
  {
    description: "create a todo cli",
    status: "pending",
  },
  {
    description: "have lunch",
    status: "completed",
  },
];

describe("utils", () => {
  it("format tasks", () => {
    const expected = `    -   create a todo cli\n✓   -   have lunch`;

    const result = formatTasks(mockTasks);

    expect(result).toEqual(expected);
  });
});
