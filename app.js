import rings from "./data.js";

rings.map((ring) => {
  console.log(ring.size);
});

const container = document.getElementById("item-container");

container.innerHTML = rings
  .map(
    (ring) => `
        <div class="item">
            <img src="${ring.src}" alt="${ring.title}">
            <ul>
              <li>Designer: ${ring.designer}</li>
              <li>Size: ${ring.ring}</li>
              <li>Metal Type: ${ring.metal}</li>
              <li>Stone Type: ${ring.stone}</li>
              <li>Price: $${ring.salePrice}</li>
            </ul>
        </div>
    `
  )
  .join("");
