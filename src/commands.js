import { hideBin } from "yargs/helpers";
import yargs from "yargs";
import {handlers} from "./cli.js";

yargs(hideBin(process.argv))
  .strict()
  .strictCommands()
  .strictOptions()
  .recommendCommands()
  .fail(handlers.fail)
  .command(
    "$0 <description>",
    "Add a new task (default command)",
    (yargs) =>
      yargs.positional("description", {
        type: "string",
        describe: "Task description",
      }),
    handlers.add
  )
  .command(
    "all",
    "get all tasks",
    () => {},
    handlers.getAll
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
    handlers.complete
  )
  .command(
    "clear",
    "remove completed tasks",
    () => {},
    handlers.clear
  )
  .option("all", {
    alias: "a",
    type: "boolean",
    description: "remove all tasks",
  })
  .parse();
