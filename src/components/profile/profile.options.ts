import Block from '../../common/block';
import InputOptions from '../input/input.options';
import ButtonOptions from '../button/button.options';

export default interface ProfileOptions {
  inputs: Block<InputOptions>[] | InputOptions[] | string;
  buttons: Block<ButtonOptions>[] | ButtonOptions[]
}
