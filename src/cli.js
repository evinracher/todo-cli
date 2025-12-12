import { hideBin } from "yargs/helpers";
import yargs from "yargs";
import { getTasks } from "./tasks.js";
import { printAllTasks } from "./utils/index.js";

yargs(hideBin(process.argv))
  .command(
    "all",
    "get all tasks",
    () => {},
    async (_) => {
      const tasks = await getTasks();
      printAllTasks(tasks)
    }
  )
  .command(
    "complete <id>",
    "complete task by id",
    (yargs) => {
      return yargs.positional("id", {
        type: "number",
        description: "The id of the task you want to mark as completed",
      });
    },
    async (argv) => {
      // TODO: implement task completing command
    }
  )
  .command(
    "clear",
    "remove completed tasks",
    () => {},
    async (argv) => {
      // TODO: implement remove all tasks
    }
  )
  .option("all", {
    alias: "a",
    type: "boolean",
    description: "remove all tasks",
  })
  .demandCommand(1)
  .parse();
