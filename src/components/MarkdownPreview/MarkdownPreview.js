import { Remarkable } from 'remarkable';

const md = new Remarkable();

function MarkdownPreview({ markdown }) {
  const renderedHTML = md.render(markdown);
  return <div dangerouslySetInnerHTML={{__html: renderedHTML}} />;
}

export default MarkdownPreview