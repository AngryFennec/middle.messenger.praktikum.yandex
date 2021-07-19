import Block from '../../common/block';
import InputOptions from '../input/input.options';
import ButtonOptions from '../button/button.options';

export default interface AuthOptions {
  inputs: Block<InputOptions>[] | InputOptions[];
  buttons: Block<ButtonOptions>[] | ButtonOptions[];
}
