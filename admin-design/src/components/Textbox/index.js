import React, { Component } from 'react';
import { isEqual } from 'lodash';
import { Input } from 'antd'

const { TextArea } = Input;


/**
 * 文本输入框
 */
export class Textbox extends Component {
    static defaultProps = {
        type: 'text',
    };

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, onChange } = this.props;
        const { value } = e.target;

        if (onChange) {
            onChange(value, name);
        }
    }

    shouldComponentUpdate(nextProps) {
        return !isEqual(this.props, nextProps);
    }

    render() {
        const {
            className,
            style,
            name,
            value,
            placeholder = "请输入",
            disabled,
            maxLength,
            type,
            size,
            autoSize,
            addonBefore,
            addonAfter,
            prefix,
            suffix
        } = this.props;

        const inputProps = {
            className,
            style,
            name,
            value,
            size,
            placeholder,
            disabled,
            maxLength,
            onChange: this.handleChange,
        };

        if (type === 'textarea') {
            inputProps.autoSize = autoSize;
            return <TextArea {...inputProps} />;
        } else {
            Object.assign(inputProps, {
                type,
                addonBefore,
                addonAfter,
                prefix,
                suffix
            });
            return <Input {...inputProps} />;
        }
    }
}
