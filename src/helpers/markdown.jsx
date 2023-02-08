
import { useState, useEffect } from "react"
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import slugify from 'react-slugify';

export default function Markdown({ AppMarkdown, comp }) {

  const [markdown, setMarkdown] = useState("");

  const createContent = () => {

    if(document.querySelector(".sideMenu")){
      document.querySelector(".sideMenu").remove();
    }
    
    const article = document.querySelector("article");
    const menuItems = document.querySelectorAll("h2[id],h3[id]", article);

    const side = document.createElement("div");
    side.classList.add("sideMenu");

    side.innerHTML = "<div><strong>Quick Links</strong></div>"

    menuItems.forEach(item => {
      const listItem = document.createElement("a");
      if (item.tagName === "H3") {
        listItem.style.paddingLeft = "10px";
      }
      listItem.innerHTML = item.innerText;
      listItem.setAttribute("href", "#" + item.getAttribute("id"));
      listItem.addEventListener('click', (e) => {
        e.preventDefault();
        const element = document.querySelector(e.currentTarget.getAttribute("href"));

        element.scrollIntoView({
          behavior: 'smooth'
        });
      })
      side.appendChild(listItem)
    })

    article.appendChild(side);
  }

  useEffect(() => {
    if (markdown !== "") {
      createContent()
    }
  }, [markdown])

  useEffect(() => {
    fetch(AppMarkdown)
      .then((res) => res.text())
      .then((text) => {
        setMarkdown(text)
      });
  }, []);


  return <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]} components={{
    p: ({ node, ...props }) => <CustomParagraph comp={comp} {...props} />,
    h2: ({ node, ...props }) => <CustomH2 comp={comp} {...props} />,
    h3: ({ node, ...props }) => <CustomH3 comp={comp} {...props} />,
    code: ({ node, ...props }) => <CustomCode comp={comp} {...props} />
  }}
  />
}

function CustomParagraph({ comp, children, ...otherProps }) {
  if (typeof (children[0]) == "string" && children[0].toString().substr(0, 2) === "{{") {
    return <div className="component-container">{comp[children.toString().replace("{{", "").replace("}}", "")]}</div>
  }
  return <p>{children}</p>;
}

function CustomH2({ comp, children, ...otherProps }) {
  return <h2 id={slugify(children.toString())}>{children}</h2>;
}

function CustomH3({ comp, children, ...otherProps }) {
  return <h3 id={slugify(children.toString())}>{children}</h3>;
}

function CustomCode({ comp, children, ...otherProps }) {

  const [visible, setVisible] = useState(false);

  const classNames = visible ? "code-base show" : "code-base";

  if (otherProps.inline) return <code {...otherProps}>{children}</code>;
  return <div className={classNames}>
    <div className="btn-code" onClick={() => setVisible(!visible)}><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M8.7 15.9 4.8 12l3.9-3.9c.39-.39.39-1.01 0-1.4a.9839.9839 0 0 0-1.4 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0 .39-.39.39-1.01 0-1.4zm6.6 0 3.9-3.9-3.9-3.9a.9839.9839 0 0 1 0-1.4c.39-.39 1.01-.39 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6c-.39.39-1.01.39-1.4 0a.9839.9839 0 0 1 0-1.4z"></path></svg> Code</div>
    <code {...otherProps}>{children}</code>
  </div>;
}

