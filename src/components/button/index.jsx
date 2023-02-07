
import Markdown from '../../helpers/markdown';
import AppMarkdown from './button.md'
import Basic from "./basic";

const comp = {
  "Basic" : <Basic/>
}

export default function Table() {
    return <Markdown AppMarkdown={AppMarkdown} comp={comp} />
}
