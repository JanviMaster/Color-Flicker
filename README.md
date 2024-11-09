<h1>Color Flicker</h1>
    <h2>Project Description</h2>
    <p>
        Color Flicker is a simple JavaScript project that changes the background color of a webpage every time a button is clicked. It has two different color modes: a pre-defined color list mode and a hex color mode. Users can click a button to generate random colors, either from a list or as a randomly generated hex color, which then updates the background and displays the color value on the screen.
    </p>
    <h2>Features</h2>
    <ul>
        <li><strong>Random Color Flicker</strong>: The background color changes randomly to one of the pre-defined colors or a randomly generated hex color.</li>
        <li><strong>Color Display</strong>: The current color code (either from the color list or hex) is shown on the screen.</li>
        <li><strong>Simple and Interactive UI</strong>: A single button click triggers the color change.</li>
    </ul>
    <h2>Installation and Usage</h2>
    <ol>
        <li>Clone or download the project files.</li>
        <li>Open <code>index.html</code> in a web browser to view and interact with the project.</li>
    </ol>
    <h2>Code Explanation</h2>
    <h3>Color Flicker with Predefined Colors</h3>
    <pre><code>const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    let index = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[index];
    color.textContent = colors[index];
});</code></pre>
    <p>This part of the code uses a predefined list of colors:</p>
    <ul>
        <li><strong>colors</strong>: An array of colors that the background can change to.</li>
        <li><strong>Button Event Listener</strong>: When the button is clicked, a random color from the array is selected, applied to the background, and displayed as text.</li>
    </ul>
    <h3>Hex Color Flicker</h3>
    <pre><code>const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    let computedColor = generateColor();
    document.body.style.backgroundColor = computedColor;
    color.textContent = computedColor;
});

const generateColor = () => {
    let res = "#";
    for (let i = 0; i < 6; i++) {
        res += hex[Math.floor(Math.random() * hex.length)];
    }
    return res;
};</code></pre>
    <ul>
        <li><strong>Hex Array</strong>: Contains values from 0-9 and A-F, which represent hexadecimal color values.</li>
        <li><strong>generateColor Function</strong>: Randomly selects 6 characters from the hex array to generate a hex color.</li>
        <li><strong>Button Event Listener</strong>: Calls <code>generateColor</code> to get a new random hex color, applies it to the background, and displays the hex color code.</li>
    </ul>
    <h2>Usage Instructions</h2>
    <ol>
        <li>Open the project in a browser.</li>
        <li>Click on the button to change the background color. The color code will be displayed on the screen.</li>
    </ol>
    <h2>Technologies Used</h2>
    <ul>
        <li><strong>HTML</strong>: Structure of the webpage.</li>
        <li><strong>CSS</strong>: Styling for the page layout and elements.</li>
        <li><strong>JavaScript</strong>: Logic for random color selection and display.</li>
    </ul>
    <h2>Project Demo</h2>
    <p>Here’s a quick look at how the <strong>Color Flicker</strong> project works:</p>
    <ul>
        <li><strong>Predefined Color Mode</strong>: Click the button to cycle through predefined colors.</li>
        <li><strong>Hex Color Mode</strong>: Click the button to generate and display a random hex color code.</li>
    </ul>
</body>
</html>
