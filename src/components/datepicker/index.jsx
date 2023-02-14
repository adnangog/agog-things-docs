
import Markdown from '../../helpers/markdown';
import AppMarkdown from './datepicker.md'
import Basic from "./basic";
import Format from "./format";
import Lang from "./lang";

const comp = {
  "Basic" : <Basic/>,
  "Format" : <Format/>,
  "Lang" : <Lang/>
}

export default function Table() {
    return <Markdown AppMarkdown={AppMarkdown} comp={comp} />
}
