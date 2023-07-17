import { visit } from "unist-util-visit"
import dedent from "ts-dedent"

const escapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
}

const escapeHtml = (str) => str.replace(/[&<>"']/g, c => escapeMap[c])

export const mermaid = () => tree => {
  visit(tree, "code", node => {
    if (node.lang !== "mermaid") return

    node.type = "html"
    node.value = dedent`
      <div class="mermaid flex justify-center" data-content="${escapeHtml(node.value)}">
        <p>Loading graph...</p>
      </div>
    `
  })
}

async function renderDiagrams(graphs) {
    const {default: mermaid} = await import("mermaid")
    const colorScheme = document.documentElement.classList.contains("dark") ? "dark" : "default";
    mermaid.initialize({
      startOnLoad: false,
      fontFamily: "var(--sans-font)",
      // @ts-ignore This works, but TS expects a enum for some reason
      theme: colorScheme,
    })

    for (const graph of graphs) {
      const content = graph.getAttribute("data-content")
      if (!content) continue
      let svg = document.createElement("svg")
      const id = (svg.id = "mermaid-" + Math.round(Math.random() * 100000))
      graph.appendChild(svg)
      mermaid.render(id, content).then(result => {
        graph.innerHTML = result.svg
      })
    }
  }

export const drawMermaidJsGraphs = () => {
  const graphs = document.getElementsByClassName("mermaid")
  if (document.getElementsByClassName("mermaid").length > 0) {
    renderDiagrams(graphs);
  }
}