window.onload = () => {

    let section = d3.select("section");
    section.attr("id", "bar-chart")
        .style("width", "800px")
        .style("height", "600px")
        .style("margin", "0 auto")
        .style("background", "#99CCFF")
        .style("border", "1px solid black")
        .style("display", "flex")
        .style("align-items", "flex-end")
        .style("justify-content", "space-between");

    d3.select("#bar-chart").append("div").attr("class", "bar").style("background", "#003366").style("width", "50px");

    let arr = [150, 270, 64, 402, 50];

    d3.selectAll(".bar").data(arr).style("height", function (d) {
        return d + "px";
    });
}
