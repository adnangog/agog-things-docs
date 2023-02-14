
import Markdown from '../../helpers/markdown';
import AppMarkdown from './checkbox.md'
import Basic from "./basic";
import Direction from "./direction";

const comp = {
  "Basic" : <Basic/>,
  "Direction" : <Direction/>
}

export default function Table() {
    return <Markdown AppMarkdown={AppMarkdown} comp={comp} />
}
