import { Input } from 'antd'
import { StringMode } from './string'

export class InputMode extends StringMode {
    /**
     * 获取输入组件，日期选择
     */
    getControlComponent(controlInfo) {
        return <Input {...controlInfo} />;
    }
}