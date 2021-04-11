import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEqual, isArray, some, find, map } from 'lodash';
import { Select as AntSelect } from 'antd';



export class Select extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        const { name, onChange } = this.props;

        if (onChange) {
            onChange(value, name);
        }
    }

    componentWillMount() {
        const { name, value, options, onChange, defaultValueIndex } = this.props;
        if (defaultValueIndex !== undefined && !value && defaultValueIndex < options.length) {
            onChange(options[defaultValueIndex].id, name);
        }
    }

    shouldComponentUpdate(nextProps) {
        return !isEqual(this.props, nextProps);
    }

    componentWillReceiveProps(nextProps) {
        const { name, value, options, onChange, defaultValueIndex } = nextProps;

        if (value && options.length) {
            if (isArray(value)) {
                if (some(value, (id) => !find(options, { id }))) {
                    onChange([], name);
                }
            } else {
                if (!some(options, (option) => option.id + '' === value + '')) {
                    onChange(undefined, name);
                }
            }
        }

        if (defaultValueIndex !== undefined && !value && !isEqual(this.props.options, options)) {
            onChange(options[defaultValueIndex].id, name);
        }
    }

    render() {
        const {
            className,
            style,
            mode,
            name,
            value,
            placeholder = '请输入',
            disabled,
            options,
            allowClear,
            showSearch,
            optionFilterProp,
            onSelect,
            onDeselect,
        } = this.props;

        const selectProps = {
            className,
            style,
            mode,
            name,
            placeholder,
            disabled,
            showSearch,
            allowClear,
            optionFilterProp,
            onChange: this.handleChange,
            onSelect,
            onDeselect,
            value,
        };

        if (value !== undefined && value !== null) {
            selectProps.value = isArray(value) ? value : value + '';
        } else {
            selectProps.value = undefined;
        }

        const children = map(options, (option) => (
            <AntSelect.Option key={option.id}>{option.name}</AntSelect.Option>
        ));

        return <AntSelect {...selectProps}>{children}</AntSelect>;
    }
}
