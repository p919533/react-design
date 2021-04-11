import { forIn } from 'lodash';

// 存放所有类型
const TypesStorage = new Map();

/**
 * 类型管理器
 *
 * 用于管理注册的所有类型
 */
export class TypesManager {
    /**
     * 注册一个类型
     *
     * @param name 名称
     * @param instance 类型实例
     */
    static register(name, instance) {
        if (TypesStorage.has(name)) {
            throw new Error(`Type ${name} is registered.`);
        }
        TypesStorage.set(name, instance);
    }
    /**
     * 检查指定名称的类型是否已注册
     *
     * @param name 名称
     */
    static has(name) {
        return TypesStorage.has(name);
    }

    /**
     * 获取指定的类型
     *
     * @param name - 类型名称
     */
    static get(name) {
        if (!TypesStorage.has(name)) {
            throw new Error(`Type ${name} is not registered.`);
        }
        return TypesStorage.get(name);
    }

    /**
     * 按照类型定义转换参数格式，未找到类型定义的参数不进行转换
     *
     * @param properties 实体的属性定义
     * @param fields 表单域对象
     */
    static formatParams(properties, fields) {
        let params = {};
        forIn(fields, (value, key) => {
            let keys = key.split('.');
            let typeDefination = properties[keys];
            if (typeDefination) {
                const { type } = typeDefination;
                if (type === 'object.subForm') {
                    Object.assign(params, {
                        [key]: this.formatParams(typeDefination.properties, value),
                    });
                } else {
                    Object.assign(params, this.get(type).formatParams(key, value));
                }
            } else {
                Object.assign(params, { [key]: value });
            }
        });
        return params;
    }
}
