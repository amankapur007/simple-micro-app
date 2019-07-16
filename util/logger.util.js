const $loggerEnable = true;
export default class LoggerUtil{

    static logger(className){
        this.className = className;
        return this;
    }

    static info(message){
        $loggerEnable?console.info(`[INFO] ${new Date().toISOString()} ${this.className} - ${message}`):'';
    }

    static error(message){
        $loggerEnable?console.error(`[ERROR] ${new Date().toISOString()} ${this.className} - ${message}`):'';
    }

    static debug(message){
        $loggerEnable?console.debug(`[DEBUG] ${new Date().toISOString()} ${this.className} - ${message}`):'';
    }

    static warn(message){
        $loggerEnable?console.warn(`[WARN] ${new Date().toISOString()} ${this.className} - ${message}`):'';
    }
}