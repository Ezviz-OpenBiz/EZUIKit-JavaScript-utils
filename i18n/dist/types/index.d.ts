import { type Scope, type TranslateOptions, type Dict, type I18nOptions } from 'i18n-js';
export type OnChangeHandler = (i18n: I18n) => void;
/**
 * @class I18n
 * @classdesc 多语言
 *
 * @example
 *
 * ```ts
 * const i18n = new I18n(
 *   {
 *     zh,
 *     en,
 *   },
 *   {
 *     locale: 'zh',
 *     defaultLocale: 'zh',
 *     enableFallback: true,
 *   },
 * );
 * i18n.t("title")
 * ```
 */
declare class I18n {
    private readonly _i18n;
    constructor(translations?: Dict, options?: Partial<I18nOptions>);
    /**
     * @description
     * @param scope
     * @param options
     * @returns {string}
     *
     * @example
     * ```ts
     * i18n.t("title")
     * // name 是一个占位符
     * i18n.t("name", {name: "ShineShao"}) // {name: "name: {{name}}"} =>  {name: "name: {{ShineShao}}"}
     * ```
     */
    t(scope: Scope, options?: TranslateOptions): string;
    /**
     * @description 追加多语言
     * @param {Dict} translations 多语言
     * @returns {void}
     * @example
     * ```ts
     * i18n.appendTranslations({
     *    zh: {
     *       title: "标题"
     *    },
     *    en: {
     *      title: "title"
     *    }
     * })
     *
     * i18n.t("title")
     * ```
     */
    appendTranslations(translations: Dict): void;
    /**
     * @description 切换语言
     * @param {string} translate 多语言 key
     * @returns {void}
     */
    switchTranslation(translate: string): void;
    /**
     * @description 获取当前 locale
     * @returns {string}
     */
    getCurrentLocale(): string;
    /**
     * @description 获取当前多语言
     * @returns {any}
     */
    getCurrentTranslation(): any;
    /**
     * @description 获取多语言
     * @returns {Dict}
     */
    getTranslations(): Dict;
    /**
     * Add a callback that will be executed whenever locale/defaultLocale changes,
     * or `I18n#store` / `I18n#update` is called.
     *
     * @param {OnChangeHandler} callback The callback that will be executed.
     *
     * @returns {Function} Return a function that can be used to unsubscribe the
     *                     event handler.
     *
     */
    onChange(callback: OnChangeHandler): () => void;
    /**
     * @description 获取版本
     * @returns {string}
     */
    getVersion(): string;
}
export default I18n;
