import { Type } from './type';
import { TypesManager } from './manager'
import { StringFormat } from './format/string'
import { InputMode } from './mode/string/input';
import { SelectMode } from './mode/string/select'


const defaultTypes = new Map();

defaultTypes.set("string", new Type( new StringFormat(), new InputMode()))
defaultTypes.set("select", new Type( new StringFormat(), new SelectMode()))


defaultTypes.forEach((type, name) => {
    TypesManager.register(name, type);
});



export { 
    TypesManager
 };