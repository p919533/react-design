
export class Type {
    constructor(format, mode){
        this.getNotAvailableDisplayComponent = mode.getNotAvailableDisplayComponent;
        this.getAvailableDisplayComponent = mode.getAvailableDisplayComponent;
        this.getDisplayComponent = mode.getDisplayComponent;
        this.getControlComponent = mode.getControlComponent;

        this.validate = format.validate;
        this.format = format.format;
        this.formatParams = format.formatParams;
    }
    /**
     * 获取无数据状态展示组件
     */
    getNotAvailableDisplayComponent;
   
    /**
     * 获取有数据状态展示组件
     */
    getAvailableDisplayComponent;
    /**
     * 获取展示组件
     */
    getDisplayComponent;
    /**
     * 获取输入组件
     */
    getControlComponent;
    
    // 校验
    /**
     * 对数据进行校验
     */
    validate;
    /**
     * 对数据进行格式化
     */
    format;
    /**
     * 将数据格式化为请求参数
     */
    formatParams;
}