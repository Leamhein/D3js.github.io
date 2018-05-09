window.onload = () => {
    
    d3.select("#bars").append("h3").text("Bars");
    
    d3.select("h3").remove("h3");
   
    d3.select("#bars").insert("h3", "div").text("Bars");
    
    d3.select("h3").style("color", "blue").style("width", "400px").style("border", "1px solid red").style("margin", "0 auto");
    
    d3.select("#bars").select("div").attr("class", "charts");


    let numbers = [100, 50, 25, 120, 250, 100, 170, 502]; /* Data array */


    /*let bars = d3.selectAll(".bar"); /* Select all bars */
    /*bars.data(numbers); /* connect the data with the bars */
    /* d3.selectAll(".bar").data(numbers); /* chaining in D3 */
    /*bars.text((d) => {
        return d;
    })*/

    /*enter*/
    d3.select("div").selectAll(".bar").data(numbers).enter().append('div').attr("class", "bar");
    
    /*update*/
    d3.selectAll(".bar").data(numbers).style("height", function (d) {
        return d + "px";
    }).text((d) => {
        return d;
    });
    
    /*exit*/
    d3.selectAll(".bar").data(numbers).exit().remove();



}
