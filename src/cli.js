import { hideBin } from "yargs/helpers";
import yargs from "yargs";
import { completeTask, getTasks } from "./tasks.js";
import { printAllTasks } from "./utils/index.js";

yargs(hideBin(process.argv))
  .command(
    "all",
    "get all tasks",
    () => {},
    async (_) => {
      const tasks = await getTasks();
      printAllTasks(tasks);
    }
  )
  .command(
    "complete <number>",
    "complete task n° <number>",
    (yargs) => {
      return yargs.positional("number", {
        type: "number",
        description: "The number of the task you want to mark as completed",
      });
    },
    async (argv) => {
      const { number } = argv;
      try {
        await completeTask(number);
        console.error("Task has been completed!")
      } catch (error) {
        console.error(error.message)
      }
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
