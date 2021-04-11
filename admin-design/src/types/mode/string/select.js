import * as React from 'react';
import { result, find } from 'lodash';
import classNames from 'classnames';

import { StringMode } from './string';
import { Select } from '../../../components/select';

export class SelectMode extends StringMode {
    /**
     * 获取展示组件
     */
    getAvailableDisplayComponent(value, displayInfo) {
        const { className, options } = displayInfo;
        displayInfo = {
            ...displayInfo,
            className: classNames('type-string', className),
        };

        if (options) {
            // 下拉选择框，通过key，查找显示的value值
            value = result(
                find(options, function(option) {
                    return option.id === String(value);
                }),
                'name'
            );
        }
        return super.getAvailableDisplayComponent(value, displayInfo);
    }

    /**
     * 获取输入组件
     */
    getControlComponent(controlInfo) {
        // 下拉选择框
        return <Select {...controlInfo} />;
    }
}
