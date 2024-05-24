import rings from "./data.js";

rings.map((ring) => {
  console.log(ring.size);
});

const container = document.getElementById("item-container");

container.innerHTML = rings
  .map(
    (ring) => `
        <div class="item">
            <img src="${ring.src}" alt="${ring.Title}">
            <ul>
              <li>Designer: ${ring.Designer}</li>
              <li>Size: ${ring.RingSize}</li>
              <li>Metal Type: ${ring.Metal}</li>
              <li>Stone Type: ${ring.Stone}</li>
              <li>Price: $${ring.SalePrice}</li>
            </ul>
        </div>
    `
  )
  .join("");
