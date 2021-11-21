let theme_attrs = {};
if (document.getElementById('theme-colors-checkbox').checked) {
  theme_attrs = {
    "name": "dark",
    "radius": 2.5,
    "missing-radius": 2.5,
  }
} else {
    theme_attrs = {
    "name": "light",
    "radius": 3,
    "missing-radius": 1.5,
  }
}

function drawNetWeb (theme_attrs) {
    d3.json("{{ site.baseurl }}/assets/graph-net-web.json")
      .then(function(data) {       
          const svgWrapper = document.getElementById('svg-graph');
          const width = +svgWrapper.getBoundingClientRect().width / 2;
          const height = +svgWrapper.getBoundingClientRect().height / 2;
          const svg = d3.select(svgWrapper)
              .attr("viewBox", [-width / 2, -height / 2, width, height]);

          const simulation = d3.forceSimulation()
              .nodes(data.nodes)
              .force("link", d3.forceLink()
                  .id(function(d) {return d.id;})
                  .distance(30)
                  .iterations(1)
                  .links(data.links))
              .force("charge", d3.forceManyBody().strength(-50))
              .force("collide", d3.forceCollide())
              .force("center", d3.forceCenter())
              .force("forceX", d3.forceX()
                  .strength(.3)
                  .x(.75))
              .force("forceY", d3.forceY()
                  .strength(.1)
                  .y(.9));
  
          const link = svg.append("g")
              .attr("class", "links")
              .selectAll("line")
              .data(data.links)
              .enter().append("line");
  
          const node = svg.selectAll('.nodes')
              .data(data.nodes)
              .enter().append('g')
              .attr('class', 'nodes')
              .attr("active", (d) => isCurrentNoteInNetWeb(d) ? true : null)
              .attr("r",  (d) => isMissingNoteInNetWeb(d) ? theme_attrs["missing-radius"] : theme_attrs["radius"])
              .attr("class", (d) => isMissingNoteInNetWeb(d) ? "missing" : null)
              .on("click", goToNoteFromNetWeb)
              .call(d3.drag()
                  .on("start", dragstarted)
                  .on("drag", dragged)
                  .on("end", dragended)
                  .touchable(true));
          node.append("text")
              .attr("dx", 5)
              .attr("dy", ".05em")
              .attr("font-size", "20%")
              .text(function (d) { return d.label });
          node.append("title")
              .text((d) => isMissingNoteInNetWeb(d) ? "Missing Note" : d.label);
  
          simulation.on("tick", () => {
              link
                  .attr("x1", function(d) { return d.source.x; })
                  .attr("y1", function(d) { return d.source.y; })
                  .attr("x2", function(d) { return d.target.x; })
                  .attr("y2", function(d) { return d.target.y; });
              node
                  .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
          });
  

          function isCurrentNoteInNetWeb(node) {
            return !isMissingNoteInNetWeb(node) && window.location.pathname.includes(node.id);
          }
          
          function isMissingNoteInNetWeb(node) {
            return node.url === '';
          }
  
          function goToNoteFromNetWeb (e, d) {
            if (!isMissingNoteInNetWeb(d)) {
              window.location = d.url;
            } else {
              return null;
            }
          };

          function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          }

          function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
          }

          function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          }
      })
      .catch(function(error) {
          console.log(error);
      });
  }
