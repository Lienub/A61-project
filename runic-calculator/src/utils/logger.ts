export class Logger {
  private static readonly colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    cyan: '\x1b[36m',
    yellow: '\x1b[33m',
    magenta: '\x1b[35m'
  };

  static error(message: string): void {
    console.error(`${Logger.colors.red}[ERROR]: ${message}${Logger.colors.reset}`);
  }

  static info(message: string): void {
    console.info(`${Logger.colors.cyan}[INFO]: ${message}${Logger.colors.reset}`);
  }

  static warn(message: string): void {
    console.warn(`${Logger.colors.yellow}[WARN]: ${message}${Logger.colors.reset}`);
  }

  static debug(message: string): void {
    console.debug(`${Logger.colors.magenta}[DEBUG]: ${message}${Logger.colors.reset}`);
  }
}
