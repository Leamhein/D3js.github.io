window.onload = () => {
    let bars = d3.selectAll(".bar"); /* Select all bars */
    console.log(bars); /* [Array(5)] */
    /*  bars.style("height", "40px"); /* Change charts height to 40px */

    let numbers = [1, 5, 3, 12, 26]; /* Data array */
    bars.data(numbers); /* connect the data with the bars */
    /* d3.selectAll(".bar").data(numbers); /* chaining in D3 */
    bars.style("height", function (d) {
        return d + "%";
    })
    bars.style("margin-top", (d) => {
        return (500 - d) + "px"
    })
}
