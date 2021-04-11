import classNames from 'classnames';
import { Input } from 'antd'
import { Textbox } from '../../../components/Textbox'

export class StringMode {
    /**
     * 获取无数据状态展示组件
     */
    getNotAvailableDisplayComponent(displayInfo) {
        const { className, style } = displayInfo;
        return (
            <span className={classNames('type-not-available', className)} style={style}>
                NA
            </span>
        );
    }

    /**
     * 获取有数据状态展示组件
     */
    getAvailableDisplayComponent(value, displayInfo) {
        const { className, style } = displayInfo;
        displayInfo = {
            ...displayInfo,
            className: classNames('type-string', className),
        };
        return (
            <span className={className} style={style}>
                {value}
            </span>
        );
    }

    /**
     * 获取展示组件
     */
    getDisplayComponent(value, displayInfo) {
        if (value === undefined || value === null) {
            return this.getNotAvailableDisplayComponent(displayInfo);
        } else {
            return this.getAvailableDisplayComponent(value, displayInfo);
        }
    }

    /**
     * 获取输入组件
     */
    getControlComponent(controlInfo) {
        return (
            <Textbox {...controlInfo} />
        )
        // return <Textbox {...controlInfo} type="text" />;
    }
}