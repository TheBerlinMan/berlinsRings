
import rings from './data.js'


rings.map(ring =>{
  console.log(ring.size);
})

const container = document.getElementById('item-container');

container.innerHTML = rings.map(ring => `
        <div class="item">
            <img src="${ring.image}" alt="${ring.title}">
            <ul>
                <li>Title: ${ring.title}</li>
                <li>Designer: ${ring.designer}</li>
                <li>Size: ${ring.size}</li>
                <li>Price: ${ring.price}</li>
            </ul>
        </div>
    `).join('')

