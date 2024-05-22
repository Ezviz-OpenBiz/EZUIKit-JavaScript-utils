export type EzopenType = 'live' | 'rec' | string;
export type EzopenRecType = 'cloud' | string;
export type EzopenDefinition = 'sd' | 'hd' | string;
export interface EzopenURL {
    protocol: string;
    search?: string;
    searchParams?: Record<string, any>;
    pathname: string;
    origin: string;
    href: string;
    hostname: string;
    deviceSerial: string;
    channelNo: string;
    validateCode?: string;
    /** 播放类型 直播 | 回放 */
    type: EzopenType;
    /** 回放存储类型 */
    recType?: EzopenRecType;
    /** 清晰度 */
    definition?: EzopenDefinition;
}
/**
 * @description 解析ezopen 协议 url
 * @param {string} url ezopen url
 * @returns {EzopenParams}
 *
 * ```ts
 * parseEzopenUrl("ezopen://open.ys7.com/C116331000/1.cloud.rec?a=00000&b=23&c=%E4%BD%A0%E5%A5%BD%E5%95%8A")
 * ```
 */
export declare function parseEzopenUrl(url: string): Partial<EzopenURL>;
export interface SwitchEzpoenOptions {
    deviceSerial?: string;
    channelNo?: string;
    type?: EzopenType;
    recType?: EzopenRecType;
    definition?: EzopenDefinition;
    search?: string;
    validateCode?: string;
}
/**
 * @description exopen 协议播放地址切换(search 中值为空会覆盖url中的值并移除这个参数)
 * @param {string} url exopen 协议播放地址
 * @param {SwitchEzpoenOptions} options
 * @returns
 *
 * @example
 * ```ts
 *   switchEzopenUrl('ezopen://open.ys7.com/C11633138/1.hd.live?a=1', {type: 'rec',recType: 'cloud',search: 'b=23&c=123423&a=00000&c=你好啊',definition: 'hd'}) // -> ezopen://open.ys7.com/C11633138/1.cloud.rec?a=00000&b=23&c=%E4%BD%A0%E5%A5%BD%E5%95%8A
 *
 *   switchEzopenUrl('ezopen://open.ys7.com/C11633138/1.hd.live', {type: 'live',recType: 'cloud',search: 'b=23&c=123423', definition: 'sd'}) // -> ezopen://open.ys7.com/C11633138/1.live?b=23&c=123423
 * ```
 */
export declare function switchEzopenUrl(url: string, options?: SwitchEzpoenOptions): string;
