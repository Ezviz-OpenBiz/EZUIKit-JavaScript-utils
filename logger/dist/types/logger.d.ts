export interface LoggerOptions {
    level?: 'INFO' | 'LOG' | 'WARN' | 'ERROR';
    showTime?: boolean;
    name?: string;
}
export interface LoggerInterface {
    info: Console['info'];
    log: Console['log'];
    warn: Console['warn'];
    error: Console['error'];
    getVersion: () => string;
}
export declare const LoggerStyle: {
    info: string;
    log: string;
    warn: string;
    error: string;
};
export declare const LoggerNameStyle = "background: green;color: #fff";
/**
 * logger 调试日志管理
 *
 * 支持四个日志等级 INFO | LOG | WARN | ERROR
 *
 * @example
 *
 * cosnt logger = new Logger({level: "INFO"})
 * logger.log("this is log")
 */
export declare class LoggerCls implements LoggerInterface {
    private static readonly noop;
    private _options;
    private _levelNum;
    constructor(options?: LoggerOptions);
    /**
     * @description 信息日志 console.info
     * @method
     *
     * @example
     * logger.info("info") // [INFO] info
     */
    info: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
    /**
     * @description 日志 console.log
     * @method
     *
     * @example
     * logger.log("log") // [LOG] log
     */
    log: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
    /**
     * @description 警告日志 console.warn
     * @method
     *
     * @example
     * logger.warn("warn") // [WARN] warn
     */
    warn: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
    /**
     * @description 错误日志 console.error
     * @method
     *
     * @example
     * logger.error("error") // [ERROR] error
     */
    error: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
    /**
     * @description 更新配置, 日志等级会重新衡量是否打印
     * @param {LoggerOptions} options 配置
     * @example
     * logger.setOptions({level: "WARN"}) // 只打印 warn和error 的日志
     */
    setOptions(options: LoggerOptions): void;
    /**
     * @description Private method used to match logger level
     * @private
     *
     * @example
     * this._matchLevel("INFO") // 3
     *
     * @param {LoggerLevel} level logger level
     * @return {number}
     */
    private _matchLevel;
    /**
     * @private
     * @description Logger factory
     * @param {ConsoleKey} type
     * @param {boolean} bool
     * @returns
     */
    private _loggerFactory;
    getOptions(): LoggerOptions;
    /**
     * @description 获取版本号
     * @returns {string}
     */
    getVersion(): string;
}
export declare function currentTimeStr(): string;
export declare const list: string[];
declare function Logger(options?: LoggerOptions): LoggerCls;
export default Logger;
