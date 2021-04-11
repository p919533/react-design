import { isNil, isNaN } from 'lodash';

export class StringFormat {
    /**
     * 对数据进行校验
     */
    validate(_rule, value, callback) {
        if (value && typeof value !== 'string') {
            callback('你好');
        } else {
            callback();
        }
    }

    /**
     * 对数据进行格式化
     */
    format(value) {
        if (isNil(value) || isNaN(value)) {
            return value.toString();
        } else {
            return '';
        }
    }

    /**
     * 将数据格式化为请求参数
     */
    formatParams(key, value) {
        return { [key]: value };
    }
}